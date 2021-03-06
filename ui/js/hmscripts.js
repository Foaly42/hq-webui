var scriptStates = "string sDevId;\n" +
    "string sChnId;\n" +
    "string sDPId;\n" +
    "var show_internal = 0;\n" +
    "integer DIR_SENDER      = 1;\n" +
    "integer DIR_RECEIVER    = 2;\n" +
    "!    string  TYPE_VIRTUAL    = \"29\";\n" +
    "string  PARTNER_INVALID = \"65535\";\n" +
    "Write(\"<stateList>\");\n" +
    "foreach (sDevId, root.Devices().EnumUsedIDs()) {\n" +
    "    object oDevice   = dom.GetObject(sDevId);\n" +
    "    boolean bDevReady = oDevice.ReadyConfig();\n" +
    "        string sDevInterfaceId = oDevice.Interface();\n" +
    "        string sDevInterface   = dom.GetObject(sDevInterfaceId).Name();\n" +
    "    if( bDevReady && (oDevice.Name() != \"Zentrale\") && (oDevice.Name() != \"HMW-RCV-50 BidCoS-Wir\") )\n" +
    "    {\n" +
    "        Write(\"<device\");\n" +
    "        Write(\" name='\" # oDevice.Name() # \"'\");\n" +
    "        Write(\" ise_id='\" # sDevId # \"'\");\n" +
    "        Write(\" address='\");WriteXML( oDevice.Address() );Write(\"'\");\n" +
    "        Write(\" interface='\" # sDevInterface # \"'\");\n" +
    "        Write(\" device_type='\");WriteXML(oDevice.HssType());Write(\"'\");\n" +
    "        Write(\" ready_config='\" # bDevReady # \"'\");\n" +

    "        Write(\" >\");  ! device tag schliessen\n" +
    "        foreach(sChnId, oDevice.Channels())\n" +
    "        {\n" +
    "            object oChannel = dom.GetObject(sChnId);\n" +
    "            if ( (! oChannel.Internal()) ||  oChannel.Internal()  )\n" +
    "            {\n" +
    "                integer iChnDir     = oChannel.ChnDirection();\n" +
    "                string  sChnDir     = \"UNKNOWN\";\n" +
    "                if (DIR_SENDER   == iChnDir) { sChnDir = \"SENDER\";   }\n" +
    "                if (DIR_RECEIVER == iChnDir) { sChnDir = \"RECEIVER\"; }\n" +
    "                string  sChnPartnerId = oChannel.ChnGroupPartnerId();\n" +
    "                if (PARTNER_INVALID == sChnPartnerId) { sChnPartnerId = \"\"; }\n" +
    "                boolean bChnAESAvailable = false;\n" +
    "                if (0 != oChannel.ChnAESOperation()) { bChnAESAvailable = true; }\n" +
    "                string sChnMode = \"DEFAULT\";\n" +
    "                if (true == oChannel.ChnAESActive()) { sChnMode = \"AES\"; }\n" +
    "                Write(\"<channel name='\");\n" +
    "                WriteXML( oChannel.Name() );\n" +
    "                Write(\"' logged='\" # oChannel.ChnArchive() # \"'\" );\n" +
    "        Write(\" type='\");WriteXML( oChannel.ChannelType() );Write(\"'\");\n" +
    "        Write(\" address='\");WriteXML( oChannel.Address() );Write(\"'\");\n" +
    "        Write(\" direction='\" # sChnDir # \"'\");\n" +
    "        Write(\" label='\" # oChannel.ChnLabel() # \"'\");\n" +
    "        Write(\" parent_device='\" # oChannel.Device() # \"'\");\n" +
    "        Write(\" index='\" # oChannel.ChnNumber() # \"'\");\n" +
    "        Write(\" group_partner='\" # sChnPartnerId # \"'\");\n" +
    "        Write(\" aes_available='\" # bChnAESAvailable # \"'\");\n" +
    "        Write(\" transmission_mode='\" # sChnMode # \"'\");\n" +
    "        Write(\" hss_type='\" # oChannel.HssType() # \"'\");\n" +
    "        Write(\" visible='\" # oChannel.Visible() # \"'\");\n" +
    "        Write(\" ready_config='\" # oChannel.ReadyConfig() # \"'\");\n" +
    "                Write(\" ise_id='\" # sChnId # \"'>\");\n" +
    "if (iChnDir == DIR_RECEIVER) {\nobject oWork = oChannel.DPByHssDP(\"WORKING\");\n" +
    "  if (oWork) {\n" +
    "    string oWId = oWork.ID();\n    string oWName = oWork.Name();\n" +
    "                            Write(\"<datapoint\");\n" +
    "                            Write(\" name='\"); WriteXML(oWork.Name());\n" +
    "                            Write(\"' type='WORKING' dptype='HSSDP' oper='5' ise_id='\" # oWId );\n" +
    "                            Write(\"' />\");\n" +
    "  }\n" +
    "}" +
    "                foreach(sDPId, oChannel.DPs().EnumUsedIDs())\n" +
    "                {\n" +
    "                    object oDP = dom.GetObject(sDPId);\n" +
    "                    if(oDP)\n" +
    "                    {\n" +
    "                        string dp = oDP.Name().StrValueByIndex(\".\", 2);\n" +
    "                            Write(\"<datapoint\");\n" +
    "                            Write(\" name='\"); WriteXML(oDP.Name());\n" +
    "                            Write(\"' type='\"); WriteXML(oDP.Name().StrValueByIndex(\".\", 2));\n" +
    "                            Write(\"' dptype='\"); WriteXML(oDP.TypeName());\n" +
    "                            Write(\"' oper='\"); WriteXML(oDP.Operations());\n" +
    "                            Write(\"' ise_id='\" # sDPId );\n" +
    "                            ! state fragt den aktuellen status des sensors/aktors ab, dauert lange\n" +
    "                            !if (show_internal == 1) {\n" +
    "                            !    Write(\"' state='\"); WriteXML(oDP.State());\n" +
    "                            !}\n" +
    "                            ! value nimmt den von der ccu gecachten wert, moeglicherweise nicht korrekt. Ggf. bei einigen geraeten immer abfragen\n" +
    "                            !Write(\"' value='\"); WriteXML(oDP.Value());\n" +
    "                            Write(\"' valuetype='\" # oDP.ValueType());\n" +
    "                            Write(\"' unit='\" # oDP.ValueUnit());\n" +
    "                            !Write(\"' timestamp='\" # oDP.Timestamp());\n" +
    "                            Write(\"' />\");\n" +
    "                    }\n" +
    "                }\n" +
    "                Write(\"</channel>\");\n" +
    "            }\n" +
    "        }\n" +
    "        Write(\"</device>\");\n" +
    "    }\n" +
    "}\n" +
    "Write(\"</stateList>\");\n" +
    "\n";

var scriptPrograms = "string oPrgID;\n" +
//    "string sRet;\n" +
    "object oProgram;\n" +
    "Write(\"<programlist>\");\n" +
    "foreach (oPrgID, dom.GetObject(ID_PROGRAMS).EnumUsedIDs()) {\n" +
    "    oProgram = dom.GetObject(oPrgID);\n" +
    "    if(oProgram != null) {\n" +
    "        sTrigger = oProgram.Rule().RuleConditions().EnumUsedIDs();\n" +
    "        Write('<program id=\"' # oPrgID # '\" name=\"');\n" +
    "        WriteXML( oProgram.Name() );\n" +
    "        Write('\" description=\"');\n" +
    "        WriteXML(oProgram.PrgInfo());\n" +
    "        Write('\" condition=\"');\n" +
//    "        sRet = \"\";\n" +
//    "        Call( \"/esp/programs.fn::WriteConditionText()\" );                                                                                                                 \n" +
//    "        WriteXML(sRet);\n" +
//    "        sRet = \"\";\n" +
      "        Write('\" destination=\"');\n" +
//    "        Call( \"/esp/programs.fn::WriteDestinationText()\" );                                                                                                                 \n" +
//    "        WriteXML(sRet);\n" +
    "        WriteLine('\"/>');\n" +
    "    }\n" +
    "}\n" +
    "Write(\"</programlist>\");\n";

var scriptVariables = "object oSysVar;\n" +
    "string sSysVarId;\n" +
    "string sShowText='true';\n" +
    "Write(\"<systemVariables>\");\n" +
    "foreach (sSysVarId, dom.GetObject(ID_SYSTEM_VARIABLES).EnumUsedIDs()) {\n" +
    "    oSysVar     = dom.GetObject(sSysVarId);\n" +
    "    Write(\"\\n <systemVariable\");\n" +
    "    Write(\" name='\"); WriteXML( oSysVar.Name() );\n" +
    "    Write(\"' desc='\"); WriteXML( oSysVar.DPInfo() );\n" +
    "    Write(\"' variable='\");\n" +
    "    if (oSysVar.ValueSubType() == 6) {\n" +
    "      WriteXML( oSysVar.AlType());\n" +
    "    } else {\n" +
    "      WriteXML( oSysVar.Variable());\n" +
    "    }\n" +
    "    !Write(\"' value='\"); WriteXML( oSysVar.Value());\n" +
    "    if (oSysVar.ValueType() == 2) {\n" +
    "     Write(\"' text_false='\"); WriteXML( oSysVar.ValueName0());\n" +
    "     Write(\"' text_true='\"); WriteXML( oSysVar.ValueName1());\n" +
    "    }\n" +
    "    Write(\"' value_list='\");\n" +
    "    if (oSysVar.ValueType() == 16) {\n" +
    "      WriteXML( oSysVar.ValueList());\n" +
    "    }\n" +
    "    Write(\"' ise_id='\" # oSysVar.ID() );\n" +
    "    if (sShowText == \"true\") {\n" +
    "        Write(\"' value_text='\"); WriteXML( oSysVar.ValueList().StrValueByIndex(';', oSysVar.Value()));\n" +
    "    }\n" +
    "    Write(\"' min='\"); WriteXML( oSysVar.ValueMin());\n" +
    "    Write(\"' max='\"); WriteXML( oSysVar.ValueMax());\n" +
    "    Write(\"' unit='\"); WriteXML( oSysVar.ValueUnit());\n" +
    "    Write(\"' type='\" # oSysVar.ValueType() # \"' subtype='\" # oSysVar.ValueSubType());\n" +
    "    Write(\"' logged='\"); WriteXML( oSysVar.DPArchive());\n" +
    "    Write(\"' visible='\"); WriteXML( oSysVar.Visible());\n" +
    "    !Write(\"' timestamp='\" # oSysVar.Timestamp());\n" +
    "    Write(\"' channel='\" # oSysVar.Channel());\n" +
    "    Write(\"'/>\");\n" +
    "}\n" +
    "Write(\"</systemVariables>\");\n";

var scriptProtocol = "var rCount;\n" +
    "string s;\n" +
    "string datetime;\n" +
    "object oDP;\n" +
    "var counter = iStart;\n" +
    "WriteLine('<systemprotocol>');\n" +
    "foreach(s, dom.GetHistoryData( iStart, iCount, &rCount)) {\n" +
    "    integer iGroupIndex = s.StrValueByIndex(\";\",0).ToInteger();\n" +
    "    string sDatapointId = s.StrValueByIndex(\";\",1);\n" +
    "    string sRecordedValue = s.StrValueByIndex(\";\",2);\n" +
    "    string sDateTime = s.StrValueByIndex(\";\",3);\n" +
    "    string sDatapointName = \"\";\n" +
    "    object oHistDP = dom.GetObject( sDatapointId );\n" +
    "    if(oHistDP) {\n" +
    "        object oDP = dom.GetObject( oHistDP.ArchiveDP() );\n" +
    "        if( oDP ) {\n" +
    "            string sType = oDP.TypeName();\n" +
    "        }\n" +
    "    }\n" +
    "    WriteLine('<row datetime=\"' # sDateTime # '\" id=\"' # counter # '\" did=\"' # oHistDP.ArchiveDP() # '\" type=\"' # sType # '\" value=\"' # sRecordedValue # '\"/>');\n" +
    "    counter = counter + 1;\n" +
    "}\n" +
    "WriteLine('<records count=\"' # rCount # '\"/>\\n</systemprotocol>');\n";

    


var scriptDevices = "integer DIR_SENDER      = 1;\n" +
    "integer DIR_RECEIVER    = 2;\n" +
    "!    string  TYPE_VIRTUAL    = \"29\";\n" +
    "string  PARTNER_INVALID = \"65535\";\n" +
    "string sDevId;\n" +
    "string sChnId;\n" +
    "string sDPId;\n" +
    "Write(\"<deviceList>\");\n" +
    "foreach (sDevId, root.Devices().EnumUsedIDs())\n" +
    "{\n" +
    "    object  oDevice   = dom.GetObject(sDevId);\n" +
    "    boolean bDevReady = oDevice.ReadyConfig();\n" +
    "    if( (true == bDevReady) && (\"HMW-RCV-50\" != oDevice.HssType()) && (\"HM-RCV-50\" != oDevice.HssType()) )\n" +
    "    {\n" +
    "        string sDevInterfaceId = oDevice.Interface();\n" +
    "        string sDevInterface   = dom.GetObject(sDevInterfaceId).Name();\n" +
    "        string sDevType        = oDevice.HssType();\n" +
    "        Write(\"<device\");\n" +
    "        Write(\" name='\");WriteXML( oDevice.Name() );Write(\"'\");\n" +
    "        Write(\" address='\");WriteXML( oDevice.Address() );Write(\"'\");\n" +
    "        Write(\" ise_id='\" # sDevId # \"'\");\n" +
    "        Write(\" interface='\" # sDevInterface # \"'\");\n" +
    "        Write(\" device_type='\");WriteXML(sDevType);Write(\"'\");\n" +
    "        Write(\" ready_config='\" # bDevReady # \"'\");\n" +
    "        Write(\">\");\n" +
    "        foreach(sChnId, oDevice.Channels())\n" +
    "        {\n" +
    "            object oChannel = dom.GetObject(sChnId);\n" +
    "            if (false == oChannel.Internal())\n" +
    "            {\n" +
    "                integer iChnDir     = oChannel.ChnDirection();\n" +
    "                string  sChnDir     = \"UNKNOWN\";\n" +
    "                if (DIR_SENDER   == iChnDir) { sChnDir = \"SENDER\";   }\n" +
    "                if (DIR_RECEIVER == iChnDir) { sChnDir = \"RECEIVER\"; }\n" +
    "                string  sChnPartnerId = oChannel.ChnGroupPartnerId();\n" +
    "                if (PARTNER_INVALID == sChnPartnerId) { sChnPartnerId = \"\"; }\n" +
    "                boolean bChnAESAvailable = false;\n" +
    "                if (0 != oChannel.ChnAESOperation()) { bChnAESAvailable = true; }\n" +
    "                string sChnMode = \"DEFAULT\";\n" +
    "                if (true == oChannel.ChnAESActive()) { sChnMode = \"AES\"; }\n" +
    "                !            boolean bChnReady        = oChannel.ReadyConfig();\n" +
    "                !            integer iChnLinkCount    = oChannel.ChnLinkCount();\n" +
    "                !            integer iChnProgramCount = oChannel.DPUsageCount();\n" +
    "                !            if (ID_ERROR == iChnProgramCount) { iChnProgramCount = 0; }\n" +
    "                !            boolean bChnVirtual = false;\n" +
    "                !            if (TYPE_VIRTUAL == sChnType) { bChnVirtual = true; }\n" +
    "                !            boolean bChnReadable  = false;\n" +
    "                !            boolean bChnWritable  = false;\n" +
    "                !            boolean bChnEventable = false;\n" +
    "                !            foreach (sDPId, oChannel.DPs())\n" +
    "                !            {\n" +
    "                !              object  oDP          = dom.GetObject(sDPId);\n" +
    "                !              if (false == oDP.Internal())\n" +
    "                !              {\n" +
    "                !                integer iDPOperations = oDP.Operations();\n" +
    "                !                if (OPERATION_READ  & iDPOperations) { bChnReadable  = true; }\n" +
    "                !                if (OPERATION_WRITE & iDPOperations) { bChnWritable  = true; }\n" +
    "                !                if (OPERATION_EVENT & iDPOperations) { bChnEventable = true; }\n" +
    "                !              }\n" +
    "            !            }\n" +
    "        !\n\n" +
    "        Write(\"<channel name='\");WriteXML( oChannel.Name() );Write(\"'\");\n" +
    "        Write(\" type='\");WriteXML( oChannel.ChannelType() );Write(\"'\");\n" +
    "        Write(\" address='\");WriteXML( oChannel.Address() );Write(\"'\");\n" +
    "        Write(\" ise_id='\" # sChnId # \"'\");\n" +
    "        Write(\" direction='\" # sChnDir # \"'\");\n" +
    "        Write(\" label='\" # oChannel.ChnLabel() # \"'\");\n" +
    "        Write(\" parent_device='\" # oChannel.Device() # \"'\");\n" +
    "        Write(\" index='\" # oChannel.ChnNumber() # \"'\");\n" +
    "        Write(\" group_partner='\" # sChnPartnerId # \"'\");\n" +
    "        Write(\" aes_available='\" # bChnAESAvailable # \"'\");\n" +
    "        Write(\" transmission_mode='\" # sChnMode # \"'\");\n" +
    "        Write(\" hss_type='\" # oChannel.HssType() # \"'\");\n" +
    "        !            Write(\" archive='\" # oChannel.ChnArchive() # \"'\");\n" +
    "        Write(\" visible='\" # oChannel.Visible() # \"'\");\n" +
    "        Write(\" ready_config='\" # oChannel.ReadyConfig() # \"'\");\n" +
    "        !            Write(\" link_count='\" # iChnLinkCount # \"'\");\n" +
    "        !            Write(\" program_count='\" # iChnProgramCount # \"'\");\n" +
    "        !            Write(\" virtual='\" # bChnVirtual # \"'\");\n" +
    "        !            Write(\" readable='\" # bChnReadable # \"'\");\n" +
    "        !            Write(\" writable='\" # bChnWritable # \"'\");\n" +
    "        !            Write(\" eventable='\" # bChnEventable # \"'\");\n" +
    "        Write(\" />\")\n" +
    "    }\n" +
    "}\n" +
    "Write(\"</device>\");\n" +
    "}\n" +
    "}\n" +
    "Write(\"</deviceList>\");\n";


var scriptRooms = "object oRoom;\n" +
    "string sRoomId;\n" +
    "string sRoomName;\n" +
    "string sChannelId;\n" +
    "Write(\"<roomList>\");\n" +
    "foreach (sRoomId, dom.GetObject(ID_ROOMS).EnumUsedIDs())\n" +
    "{\n" +
    "    oRoom     = dom.GetObject(sRoomId);\n" +
    "    Write(\"<room name='\"); WriteXML( oRoom.Name() );\n" +
    "    Write(\"' description='\");\n" +
    "    WriteXML(oRoom.EnumInfo());\n" +
    "    Write(\"' ise_id='\" # sRoomId # \"'>\\n\");\n" +
    "    foreach(sChannelId, oRoom.EnumUsedIDs()) {\n" +
    "        Write(\"  <channel ise_id='\" # sChannelId # \"'/>\\n\");\n" +
    "    }\n" +
    "    Write(\"</room>\\n\");\n" +
    "}\n" +
    "Write(\"</roomList>\");\n";

var scriptFunctions = "object oFunction;\n" +
    "string sFunctionId;\n" +
    "string sChannelId;\n" +
    "Write(\"<functionList>\");\n" +
    "foreach (sFunctionId, dom.GetObject(ID_FUNCTIONS).EnumUsedIDs())\n" +
    "{\n" +
    "    oFunction     = dom.GetObject(sFunctionId);\n" +
    "    Write(\"<function name='\");WriteXML( oFunction.Name() );\n" +
    "    Write(\"' description='\");\n" +
    "    WriteXML( oFunction.EnumInfo() );\n" +
    "    Write(\"' ise_id='\" # sFunctionId # \"'>\\n\");\n" +
    "    foreach(sChannelId, oFunction.EnumUsedIDs())\n" +
    "    {\n" +
    "        Write(\"  <channel address='\"); WriteXML( dom.GetObject(sChannelId).Address() );\n" +
    "        Write(\"' ise_id='\" # sChannelId # \"'/>\\n\");\n" +
    "    }\n" +
    "    Write(\"</function>\\n\");\n" +
    "}\n" +
    "Write(\"</functionList>\");\n";


var scriptFavorites = "var show_datapoint=1;\n" +
    "var show_internal=0;\n" +
    "object oFavorite;\n" +
    "string sFavoriteId;\n" +
    "string sFavoriteName;\n" +
    "string sChannelId;\n" +
    "Write(\"<favoriteList>\");\n" +
    "   Write(\"\\n<user id='\" # USER_ID # \"'/>\");\n" +

    "foreach (sFavoriteId, dom.GetObject(ID_FAVORITES).EnumUsedIDs()) {\n" +
    "    oFavorite     = dom.GetObject(sFavoriteId);\n" +
    "    Write(\"\\n<favorite name='\"); WriteXML( oFavorite.Name() );\n" +
    "    Write(\"' ise_id='\" # sFavoriteId # \"'>\");\n" +
    "    foreach(sChannelId, oFavorite.EnumIDs()) {\n" +
    "        object fav = dom.GetObject(sChannelId);\n" +
    "        if (fav) { \n" +

    "        Write(\"\\n <channel ise_id='\" # sChannelId # \"' name='\");  \n" +
    "        var favType = \"UNKNOWN\";\n" +
    "        if (fav.IsTypeOf(OT_PROGRAM)) { favType = \"PROGRAM\"; }\n" +
    "        if (fav.IsTypeOf(OT_DP))      { favType = \"SYSVAR\";  }\n" +
    "        if (fav.IsTypeOf(OT_CHANNEL)) { favType = \"CHANNEL\"; }\n" +
    "        if (fav.IsTypeOf(OT_ALARMDP)) { favType = \"SYSVAR\"; }\n" +
    "        if (fav.IsTypeOf(OT_FAVORITE)) { favType = \"FAVORITE\"; }\n" +
    "        if (favType != \"UNKNOWN\" ) {\n" +
    "        WriteXML(fav.Name());" +
    "        if (fav.IsTypeOf(OT_FAVORITE)) {\n" +
    "          Write( \"' column_count='\"); WriteXML(fav.FavColumnCount());\n" +
    "          Write( \"' name_position='\"); WriteXML(fav.FavNamePosition());\n" +
    "          Write( \"' col_align='\"); WriteXML(fav.FavColumnAlign());\n" +
    "        }\n" +
    "        Write( \"' type='\" # favType);\n" +
    "        if (favType == \"CHANNEL\") {\n" +
    "          Write( \"' chnlabel='\" # fav.ChnLabel());\n" +
    "          Write( \"' ctype='\" # fav.ChannelType());\n" +
    "        }\n" +
    "        string canUse = \"false\";\n" +
    "        string id;\n" +
    "        if (fav.IsTypeOf(OT_FAVORITE)) {\n" +
    "          foreach (id, oFavorite.FavControlIDs().EnumIDs()) {\n" +
    "              if (id == sChannelId) { canUse = \"true\"; }\n" +
    "          }\n" +
    "        }\n" +
    "        Write( \"' not_can_use='\" # canUse);\n" +
    "        if (show_datapoint == 1) {\n" +
    "            Write (\"'>\");\n" +
    "            if (favType == \"CHANNEL\") {\n" +
    "                string sDPId;\n" +
    "                foreach (sDPId, fav.DPs().EnumUsedIDs()) {\n" +
    "                    object oDP = dom.GetObject(sDPId);\n" +
    "                    if (oDP) {\n" +
    "                        string dp = oDP.Name().StrValueByIndex(\".\", 2);\n" +
    "                        if ((dp != \"ON_TIME\") && (dp != \"INHIBIT\")) {\n" +
    "                            Write(\"\\n  <datapoint\");\n" +
    "                            Write(\" name='\"); WriteXML(oDP.Name());\n" +
    "                            Write(\"' ise_id='\" # sDPId );\n" +
    "                            ! state fragt den aktuellen status des sensors/aktors ab, dauert lange\n" +
    "                            if (show_internal == 1) {\n" +
    "                                Write(\"' state='\"); WriteXML(oDP.State());\n" +
    "                            }\n" +
    "                            ! value nimmt den von der ccu gecachten wert, moeglicherweise nicht korrekt. Ggf. bei einigen geraeten immer abfragen\n" +
    "                            Write(\"' value='\"); WriteXML(oDP.Value());\n" +
    "                            Write(\"' valuetype='\" # oDP.ValueType());\n" +
    "    if (oDP.ValueType() == 2) {\n" +
    "     Write(\"' text_false='\"); WriteXML( oDP.ValueName0());\n" +
    "     Write(\"' text_true='\"); WriteXML( oDP.ValueName1());\n" +
    "    }\n" +
    "                Write(\"' unit='\"); WriteXML( oDP.ValueUnit());\n" +
    "                if (oDP.ValueType() == 16) { Write(\"' value_text='\"); WriteXML( oDP.ValueList().StrValueByIndex(';', oDP.Value())); }\n" +
    "                            Write(\"' timestamp='\" # oDP.Timestamp().ToInteger());\n" +
    "                            Write(\"' />\");\n" +
    "                        }\n" +
    "                    }\n" +
    "                }\n" +
    "            }\n" +
    "            if (favType == \"SYSVAR\") {\n" +
    "                Write(\"\\n <systemVariable\");\n" +
    "                Write(\" name='\"); WriteXML( fav.Name() );\n" +
    "                Write(\"' variable='\");\n" +
    "                if (fav.ValueSubType() == 6) {\n" +
    "                  WriteXML( fav.AlType());\n" +
    "                } else {\n" +
    "                  WriteXML( fav.Variable());\n" +
    "                }\n" +
    "                Write(\"' value='\"); WriteXML( fav.Value());\n" +
    "                Write(\"' value_list='\");\n" +
    "                if (fav.ValueType() == 16) {\n" +
    "                  WriteXML( fav.ValueList());\n" +
    "                }\n" +
    "                Write(\"' value_text='\"); WriteXML( fav.ValueList().StrValueByIndex(';', fav.Value()));\n" +
    "    if (fav.ValueType() == 2) {\n" +
    "     Write(\"' text_false='\"); WriteXML( fav.ValueName0());\n" +
    "     Write(\"' text_true='\"); WriteXML( fav.ValueName1());\n" +
    "    }\n" +
    "                Write(\"' ise_id='\" # fav.ID() );\n" +
    "                Write(\"' min='\"); WriteXML( fav.ValueMin());\n" +
    "                Write(\"' max='\"); WriteXML( fav.ValueMax());\n" +
    "                Write(\"' unit='\"); WriteXML( fav.ValueUnit());\n" +
    "                Write(\"' type='\" # fav.ValueType() # \"' subtype='\" # fav.ValueSubType());\n" +
    "                Write(\"' timestamp='\" # fav.Timestamp().ToInteger());\n" +
    "                Write(\"'/>\");\n" +
    "            }\n" +
    "            Write(\"\\n </channel>\");\n" +
    "        } else {\n" +
    "            Write (\"'/>\");\n" +
    "        }\n" +
    "            } else { Write( \"' />\"); }\n" +
    "            } else { Write( \"' />\"); }\n" +
    "    }\n" +
    "    Write(\"\\n</favorite>\");\n" +
    "}\n" +
    "Write(\"\\n</favoriteList>\");";
