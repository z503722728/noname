'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'sp',
		connect:true,
		characterSort:{
			sp:{
				sp_tianji:["sunhao","liuxie","caoang","hetaihou","sunluyu",'ol_wangrong',"zuofen","ganfuren","ol_bianfuren","qinghegongzhu"],
				sp_sibi:["yangxiu","chenlin","chengyu","shixie","fuwan","wangyun","zhugejin","simalang","maliang","buzhi","dongyun","kanze","sunqian","xizhicai","sunshao",'duxi',"jianggan",'ol_dengzhi','ol_yangyi','ol_dongzhao','ol_chendeng'],
				sp_tianzhu:["wutugu","yanbaihu","shamoke","panfeng","zhugedan",'huangzu','gaogan',"tadun"],
				sp_nvshi:["lingju","guanyinping","zhangxingcai","mayunlu","dongbai","zhaoxiang",'ol_zhangchangpu','ol_xinxianying',"daxiaoqiao"],
				sp_shaowei:["simahui","zhangbao","zhanglu","zhugeguo","xujing","zhangling",'huangchengyan'],
				sp_huben:["caohong","xiahouba","zhugeke","zumao","wenpin","litong","mazhong","heqi","quyi","luzhi","zangba","yuejin","dingfeng","wuyan","ol_zhuling","tianyu","fanjiangzhangda"],
				sp_liesi:['mizhu'],
				sp_default:["sp_diaochan","sp_zhaoyun","sp_sunshangxiang","sp_caoren","sp_jiangwei","sp_machao","sp_caiwenji","jsp_guanyu","jsp_huangyueying","sp_pangde","sp_jiaxu","yuanshu",'sp_zhangliao','sp_ol_zhanghe'],
				sp_qifu:["caoying",'panshu',"caochun","yuantanyuanshang",'caoshuang','wolongfengchu','guansuo','baosanniang','fengfangnv'],
				sp_wanglang:['wanglang'],
				sp_tongque:["sp_fuwan","sp_fuhuanghou","sp_jiben"],
				sp_zhongdan:["cuiyan","huangfusong"],
				sp_guozhan2:["mateng","tianfeng","sp_dongzhuo","liqueguosi","jiling","zhangren","zongyu"],
				//sp_single:["niujin"],
				sp_others:["hanba","caiyang"],
			},
		},
		characterFilter:{
			tianyu:function(mode){
				return mode!='chess'&&mode!='tafang'&&mode!='stone';
			},
		},
		character:{
			qinghegongzhu:['female','wei',3,['zengou','qhzhangji']],
			fanjiangzhangda:['male','wu',4,['yuanchou','juesheng']],
			tianyu:['male','wei',4,['saodi','zhuitao']],
			ol_chendeng:['male','qun',4,['olfengji']],
			ol_zhuling:['male','wei',4,['jixian']],
			wuyan:['male','wu',4,['lanjiang']],
			sp_ol_zhanghe:['male','qun',4,['spolzhouxuan']],
			ol_dongzhao:['male','wei',3,['olxianlve','olzaowang']],
			fengfangnv:['female','qun',3,['zhuangshu','chuiti']],
			ol_yangyi:['male','shu',3,['oljuanxia','oldingcuo']],
			zuofen:['female','jin',3,['zhaosong','lisi']],
			ol_wangrong:['female','qun',3,['olfengzi','oljizhan','olfusong']],
			ol_dengzhi:['male','shu',3,['olxiuhao','olsujian']],
			ol_bianfuren:['female','wei',3,['fuwei','yuejian']],
			duxi:['male','wei',3,['quxi','bixiong']],
			gaogan:['male','qun',4,['juguan']],
			huangchengyan:['male','qun',3,['guanxu','yashi']],
			huangzu:['male','qun',4,['wangong']],
			panshu:['female','wu',3,['weiyi','jinzhi']],
			sp_jiben:['male','qun',3,['spduanzhi','spduyi']],
			sp_fuhuanghou:['female','qun',3,['spcangni','spmixin']],
			sp_fuwan:['male','qun',3,['spfengyin','spchizhong']],
			zongyu:['male','shu',3,['zyqiao','chengshang']],
			ol_xinxianying:['female','wei',3,['xincaishi','xinzhongjian']],
			wolongfengchu:['male','shu',4,['youlong','luanfeng']],
			sp_zhangliao:['male','qun',4,['mubing','ziqu','diaoling']],
			caoshuang:['male','wei',4,['retuogu','shanzhuan']],
			ol_zhangchangpu:['female','wei',3,['yanjiao','olxingshen']],
			zhangling:['male','qun',3,['zlhuji','zlshoufu']],
			caiyang:['male','qun',1,['yinka','zhuixi'],['forbidai','unseen']],
			panfeng:['male','qun',4,['kuangfu']],
			sunshao:['male','wu',3,['bizheng','yidian']],
			
			huangfusong:['male','qun',4,['xinfenyue']],
			yuantanyuanshang:['male','qun',4,['neifa']],
			xujing:['male','shu',3,['yuxu','xjshijian']],
			
			//niujin:['male','wei',4,['cuorui','liewei']],
			jianggan:["male","wei",3,["weicheng","daoshu"]],
			
			caoying:["female","wei",4,["xinfu_lingren","xinfu_fujian"],[]],
			simahui:["male","qun",3,["xinfu_jianjie","xinfu_chenghao","xinfu_yinshi"],[]],
			baosanniang:["female","shu",4,["olwuniang","olxushen"],[]],
			
			yangxiu:['male','wei',3,['jilei','danlao']],
			chenlin:['male','wei',3,['bifa','songci']],
			caohong:['male','wei',4,['yuanhu']],
			xiahouba:['male','shu',4,['rebaobian']],
			yuanshu:['male','qun',4,['yongsi','weidi']],
			sp_diaochan:['female','qun',3,['lihun','rebiyue']],
			sp_zhaoyun:['male','qun',3,['ollongdan','chongzhen']],
			liuxie:['male','qun',3,['tianming','mizhao']],
			zhugejin:['male','wu',3,['hongyuan','huanshi','mingzhe']],
			zhugeke:['male','wu',3,['aocai','duwu']],
			guanyinping:['female','shu',3,['huxiao','xueji','wuji']],
			simalang:['male','wei',3,['junbing','quji']],
			zhangxingcai:['female','shu',3,['shenxian','qiangwu']],
			fuwan:['male','qun',4,['moukui']],
			sp_sunshangxiang:['female','shu',3,['liangzhu','fanxiang']],
			caoang:['male','wei',4,['kaikang']],
			sp_caoren:['male','wei',4,['weikui','lizhan']],
			zhangbao:['male','qun',3,['rezhoufu','reyingbing']],
			maliang:['male','shu',3,['zishu','xinyingyuan']],
			zhugedan:['male','wei',4,['gongao','juyi']],
			sp_jiangwei:['male','wei',4,['kunfen','fengliang']],
			sp_machao:['male','qun',4,['zhuiji','ol_shichou']],
			sunhao:['male','wu',5,['recanshi','rechouhai','guiming'],['zhu']],
			shixie:['male','qun',3,['rebiluan','relixia']],
			mayunlu:['female','shu',4,['fengpo','mashu']],
			zhanglu:['male','qun',3,['yishe','bushi','midao']],
			wutugu:['male','qun',15,['ranshang','hanyong']],
			sp_caiwenji:['female','wei',3,['chenqing','mozhi']],
			zhugeguo:['female','shu',3,['qirang','yuhua']],
			
			lingju:['female','qun',3,['jieyuan','fenxin']],
			
			cuiyan:['male','wei',3,['yawang','xunzhi']],
			jsp_guanyu:['male','wei',4,['new_rewusheng','danji']],
			jsp_huangyueying:['female','qun',3,['jiqiao','linglong']],
			sunluyu:['female','wu',3,['new_meibu','new_mumu']],
			hanba:['female','qun',4,['fentian','zhiri']],
			zumao:['male','wu',4,['yinbing','juedi']],
			wenpin:['male','wei',4,['zhenwei']],
			daxiaoqiao:['female','wu',3,['new_xingwu','new_luoyan']],

			guansuo:['male','shu',4,['xinzhengnan','xiefang']],
			tadun:['male','qun',4,['reluanzhan']],
			yanbaihu:['male','qun',4,['zhidao','jili']],
			chengyu:['male','wei',3,['shefu','benyu']],

			wanglang:['male','wei',3,['regushe','rejici']],
			sp_pangde:['male','wei',4,['mashu','juesi']],
			sp_jiaxu:['male','wei',3,['zhenlue','jianshu','yongdi']],

			litong:['male','wei',4,['tuifeng']],
			mizhu:['male','shu',3,['ziyuan','jugu']],
			buzhi:['male','wu',3,['hongde','dingpan']],

			caochun:['male','wei',4,['xinshanjia']],
			
			dongbai:['female','qun',3,['lianzhu','xiehui']],

			zhaoxiang:['female','shu',4,['refanghun','refuhan']],
			mazhong:['male','shu',4,['fuman']],
			dongyun:['male','shu',3,['bingzheng','sheyan']],
			kanze:['male','wu',3,['xiashu','kuanshi']],
			heqi:['male','wu',4,['qizhou','shanxi']],

			ganfuren:['female','shu',3,['shushen','shenzhi']],
			//mifuren:['female','shu',3,['guixiu','cunsi']],
			mateng:['male','qun',4,['xiongyi','mashu']],
			tianfeng:['male','qun',3,['sijian','suishi']],
			yuejin:['male','wei',4,['xiaoguo']],
			sp_dongzhuo:['male','qun',5,['hengzheng']],
			//jiangfei:['male','shu',3,['reshengxi','shoucheng']],
			//jiangqing:['male','wu',4,['shangyi','zniaoxiang']],
			hetaihou:['female','qun',3,['zhendu','qiluan']],
			//kongrong:['male','qun',3,['lirang','mingshi']],
			dingfeng:['male','wu',4,['reduanbing','refenxun']],
			shamoke:['male','shu',4,['gzjili']],
			//liqueguosi:['male','qun',4,['xiongsuan']],
			//cuimao:['male','wei',3,['zhengbi','fengying']],

			jiling:['male','qun',4,['shuangren']],
			zangba:['male','wei',4,['rehengjiang']],
			zhangren:['male','qun',4,['chuanxin','zfengshi']],

			wangyun:['male','qun',4,['xinlianji','xinmoucheng']],
			sunqian:['male','shu',3,['qianya','shuimeng']],
			xizhicai:['male','wei',3,['tiandu','xianfu','chouce']],
			quyi:['male','qun',4,['fuqi','jiaozi']],

			luzhi:['male','wei',3,['qingzhongx','weijing']],
			
			//kaisa:["male","western",4,["zhengfu"]],
		},
		characterIntro:{
			qinghegongzhu:'清河长公主，沛国谯县人，曹操长女（按其与曹操长子曹昂同出于刘夫人，而刘夫人又早死，故其年龄应长于曹丕等其他曹操诸子女，又按长公主亦有年最长之意，故应为曹操之长女）。母刘夫人，得到曹操喜爱。清河公主后来下嫁夏侯楙。曹操初欲嫁丁仪，曹丕劝其嫁与夏侯楙。后与小叔子设计欲谋害丈夫，未果。',
			fanjiangzhangda:'范强，在明朝小说《三国演义》里叫做范疆。二人均为张飞手下部将。蜀汉章武元年，刘备伐吴，张飞率军从阆中前往江州，出发前，范强和张达杀死张飞，带着张飞的首级投奔了东吴。',
			tianyu:'田豫（171年～252年），字国让，渔阳雍奴（今天津市武清区）人。三国时期曹魏将领。初从刘备，因母亲年老回乡，后跟随公孙瓒，公孙瓒败亡，劝说鲜于辅加入曹操。曹操攻略河北时，田豫正式得到曹操任用，历任颖阴、郎陵令、弋阳太守等。后来田豫常年镇守曹魏北疆，从征代郡乌桓、斩骨进、破轲比能，多有功勋；也曾参与对孙吴的作战，在成山斩杀周贺，于新城击败孙权。官至太中大夫，封长乐亭侯。有一子田彭祖。',
			wuyan:'吴国及西晋初年将领。初任通江县吏，后得到大司马陆抗的提拔重用，逐渐升至建平太守。',
			fengfangnv:'冯方之女，司隶人，袁术妻妾。在史书中被记载为天姿国色的美人。钱大昭在《三国志辨疑》中认为冯方当为冯芳误字，冯方女实为是西园八校尉之一的冯芳的女儿。然而，在曹丕《典论》、《九州春秋》等书籍都有提及她，皆作冯方女字样，并无一书写作冯芳女或是明提是冯芳之女。最关键的一点是，冯芳是荆州西陵县人，她女儿不可能是司隶籍，冯芳也没担任过任何与司隶有关的官职。同时期名字为“○女”的并不少见，如施绩女儿施淑女，曹植女儿曹行女，夏侯令女等。',
			zuofen:'左芬（约253年－300年4月23日），出土墓志作左棻，字兰芝，齐国临淄（今山东临淄）人，西晋诗人。少好学，善属文。为晋武帝贵人。今存诗、赋、颂、赞、诔等20余篇，大都为应诏而作，《离思赋》最著名。原有集，已失传。',
			duxi:'杜袭（生卒年不详），字子绪，颍川郡定陵县（今河南省襄城县）人。三国时期魏国重臣，东汉末年颍川“四大名士”之一，济阴太守杜根的孙子。建安初年，投奔司空曹操，历任西鄂县令、议郎、丞相军咨祭酒、魏王侍中、丞相长史、驸马都尉。魏文帝时期，出任督军粮御史、尚书，累封武平亭侯。魏明帝时期，担任大将军曹真和司马懿的军师，抵御蜀国进攻，拜太中大夫，受封平阳乡侯。卒于任上，获赠少府，谥号为定。',
			gaogan:'高干（？~206年），字元才，陈留郡圉县（今河南杞县圉镇）人。东汉末年并州割据将领，蜀郡太守高躬之子、大将军袁绍外甥。出身陈留高氏，才志弘邈，文武秀出。早年联合荀谌游说韩馥让出冀州牧。袁绍平定河北后，以为并州牧。官渡之战时，在西线配合作战。因曹操早有准备，没有实质进展。袁绍死后，袁谭、袁尚与曹操大战于黎阳郡时，联合郭援攻打平阳郡，为马腾为首关中将领所败，郭援为庞德所斩。袁尚败走中山郡后，出降于曹操，仍为并州刺史。建安十年，兴兵反曹，固守壶关，成功抵挡乐进进攻。得知曹操亲征后，留下别将守城，亲往匈奴呼厨泉求救，没有成功。引兵攻略河东郡，屡为钟繇、张既所败。建安十一年，投奔荆州刘表。途经上洛时，为上洛都尉捕斩之。',
			huangchengyan:'黄承彦，生卒年不详，汉末三国时期沔阳名士，诸葛亮岳父，黄月英之父。南郡大士蔡讽的女婿，与襄阳名士上层社会圈子：庞统（凤雏）、庞德公、司马徽、徐庶等人交好。《襄阳记》：黄承彦者，高爽开列，为沔阳名士，谓诸葛孔明曰：“闻君择妇，身有丑女，黄头黑色，而才堪配。”孔明许，即载送之。时人以为笑乐，乡里为之谚曰：“莫作孔明择妇，正得阿承丑女。”',
			panshu:'潘淑（？－252年），会稽句章（今浙江省宁波市）人，是吴大帝孙权的皇后，吴少帝孙亮的母亲。和孙权是中国历代帝后中年龄差距较大的一对。潘淑少时与姐姐俱没入织室，容媚有宠，拜为夫人，生有一子孙亮。赤乌十三年（250年），孙权立孙亮为皇太子，翌年（251年）立潘淑为皇后。神凤元年（252年）暴崩，合葬蒋陵。世称潘淑为江东绝色，有神女之称。',
			jiben:'吉本（？—218年），东汉末年太医令。建安二十三年春正月，时金祎自以世为汉臣，睹汉祚将移，谓可季兴，乃喟然发愤，遂与太医令本、少府耿纪、司直韦晃、本子邈、邈弟穆等结谋攻许，杀曹公长史王必，南援刘备。后必营，必与典农中郎将严匡讨斩之。在《三国演义》中，吉本在此为吉平或吉太，因字称平，故又唤作吉平。曾参与董承等人刺杀曹操的计划，并企图在为曹操治病时毒死曹操，但被曹操识破而遭处刑。之后其子吉邈和吉穆都参与了由耿纪和韦晃等人所发动的反叛曹操的行动，但都失败被杀。',
			zongyu:'宗预（？－264年），字德艳 ，荆州南阳郡安众县（今河南省南阳市）人。三国时期蜀汉官员、将领。曾随张飞入蜀助平益州，又受辟为丞相诸葛亮手下主簿，升任参军、右中郎将。诸葛亮逝世后，宗预受命出使孙吴，得到孙权的赞赏。迁后将军，出督永安，又升任征西大将军，并受封关内侯。公元258年（景耀元年），因病回成都，受任镇军大将军。蜀汉灭亡后，宗预随后主刘禅徙往洛阳，在中途病逝。宗预为人坦率耿直，多次出使孙吴并深得孙权的敬重，为吴、汉两国同盟的巩固作出了一定的贡献。',
			mengda:'孟达（?－228），字子度，本字子敬，因刘备的叔父名叫刘子敬，为避讳而改字。扶风郡郿人，三国时期人物。本为刘璋属下，后降刘备。关羽围樊城、襄阳时因不发兵救关羽而触怒刘备，于是投奔曹魏。此后，劝降刘封，未果。在魏官至散骑常侍、建武将军，封平阳亭侯。此后又欲反曹魏而归蜀汉，事败而死。',
			wolongfengchu:'沙比武将，懒得复制粘贴，自己去看诸葛亮和庞统的介绍吧。',
			caoshuang:'曹爽（？－249年2月9日），字昭伯，沛国谯县（今安徽亳州市）人。三国时期魏国权臣，大司马曹真长子。曹爽体态肥胖，凭借宗室身份，出入宫廷，交好太子曹叡。魏明帝即位，起家员外散骑侍郎，累迁城门校尉、散骑常侍，转武卫将军。太和五年（231年），袭封邵陵侯。景初三年（239年），魏明帝曹叡病危，拜大将军、假黄钺，与司马懿并为托孤大臣。少帝曹芳即位，加侍中，改封武安侯。势倾四海，声震天下。任用私人，专权乱政，侵吞公产。伐蜀失败，虚耗国力。起居逾制，软禁郭太后。正始十年，太傅司马懿发动高平陵政变，掌握魏国大权。曹爽失去大将军职务，以谋反之罪处死，夷灭三族。',
			zhangling:'张道陵（34年2月22日—156年），字辅汉，原名陵，道教正一道实际创立者，汉朝东汉时期丰邑（今江苏徐州丰县）人。太上老君降临蜀地，“授以三天正法，命为天师”，张道陵整合当时的：黄老派、方仙道、文始派等先秦修道团体，创立道教称正一盟威之道。后世尊称为“老祖天师”、“正一真人”、“三天扶教大法师”、高明上帝、张天师。著作《老子想尔注》，弟子有3000多人，设立24治，奠基天师道。张道陵、葛玄、许逊、萨守坚合称四大天师。张道陵创建道教的背景：当时在巴蜀一带，原有巴人信奉原始巫教，大规模的淫祀而害民。而这些祀奉鬼妖（学名为：妖邪）的法教巫师聚众敛财，无恶不作。张天师携王长、赵升二位弟子和黄帝九鼎丹经，来到北邙山修行，平定了那些祸害百姓的巫妖之教。川渝一带流传的张天师以太上老君剑印符箓大破鬼兵的故事就是以此为原型的。',
			caiyang:'蔡阳（？－201年），又作蔡扬，东汉丞相曹操部下武将，汝南太守。于建安六年（201）奉曹操之命攻击与刘备联合的汝南贼龚都等人，兵败被刘备所杀。明代小说《三国演义》改编为“云长擂鼓斩蔡阳”。',
			pujing:'湖北省当阳境内有一座山，名叫玉泉山。东汉建安末年，山上住着一个老和尚，法名普净，普净原来是沂水关镇国寺方丈，后因云游天下，来到此处，风这地方山明水秀，就于山中结草为庵，每天坐禅参道，身边只有一个小和尚，外出化一些斋饭，供养师父。在《三国演义》中，当关羽通过汜水关时，正是由于普净提醒，关羽才揭穿了卞喜的阴谋，并杀死了卞喜。关羽死后，其怨魂亦在普净的指点下醒悟，放下了心中的仇恨，专心致力于造福一方百姓。',
			huban:'为《三国演义》所杜撰的人物，正史无记载，荥阳太守王植麾下从事、桓帝时议郎胡华之子。关羽过五关斩六将时其中一关就是王植所镇守，胡班奉命放火夜袭关公，因敬服公之气概，并得其父托公所带家书，班看毕，叹曰：“险些误杀忠良！”故将之放走。胡班到荆州来投降关公，公念其旧日相救之情，甚爱之；令随费诗入川，见汉中王受爵。费诗辞别关公，带了胡班，自回蜀中去了。',
			chunyuqiong:'淳于琼（？－200年），字仲简，颍川（治今河南禹州）人。东汉时期官吏，于汉灵帝中平五年（188）被任命为西园八校尉之一的右校尉，与蹇硕、袁绍、鲍鸿、曹操、赵融、冯芳、夏牟同列。为袁绍大将，与张郃、高览等人齐名。在官渡之战时镇守乌巢，遭到曹操的偷袭而惨败，自己也被曹操处斩。',
			lvkuanglvxiang:'吕旷（生卒年不详），与吕翔同是袁绍属下，袁绍去世后，为袁尚守东平，后来投降曹操，并被封为列侯。在《三国演义》中，在曹操准备往南准备攻击前，两人跟著大将曹仁和将军李典准备要攻击刘备。但吕旷被赵云刺下马身亡，而吕翔也死于张飞矛下，可以算是出师未捷身先死',
			caobuxing:'曹不兴，亦名弗兴，三国时著名画家。孙吴吴兴（今浙江湖州）人，生卒年不详。他在黄武年间（222—229年）享有很大的声誉。被称为“佛画之祖”。与东晋顾恺之、南朝宋陆探微、南朝梁张僧繇并称“六朝四大家”。又与赵达的算术、严武的弈棋、皇象的草书等号称“吴中八绝”。曹不兴善画龙、虎、马及人物，有“落墨为蝇”等传奇故事，其佛画成就对后世影响很大，相传其所画龙头令谢赫叹服不已。画迹今已不存，据《贞观公私画史》载，作品有《青溪龙》、《赤盘龙》、《南海监牧进十种马图》、《夷事夷兽样》、《桃源图》等，惜早已散佚。但之后的著名画家卫协直接师承其法。',
			gaolan:'高览，生卒年不详，一名高奂，本属袁绍部将，后官渡之战淳于琼被曹操击破，与张郃一同投降曹操，被封为偏将军，东莱侯。《三国演义》里，曾与许褚、徐晃大战不分胜负。201年刘备败走荆州时，高览奉命追杀，三合斩刘辟，而后被冲阵而来的赵云刺死。',
			xunchen:'荀谌，字友若，荀彧之兄（一说荀彧之弟），荀绲之子，颍川人。曾任军阀袁绍的幕僚。帮助袁绍游说韩馥，夺取了冀州。',
			sunshao:'孙邵（163年－225年），字长绪，青州北海国人（今山东潍坊市昌乐县西）。原为北海相孔融的功曹，被孔融称赞为可任朝廷要职的人才，后随刘繇到达江东，继而辅佐孙权。孙权称吴王后，孙邵成为吴国首任丞相，数年后病逝。由于孙邵和当时吴国史官的关系并不是很好，因此在史书中并没有详细的记载。',
			yuantanyuanshang:'袁谭、袁尚分别是袁绍的长子和第三子。袁绍坐拥青州、冀州、幽州、并州，本是北方最强诸侯，却于官渡大败，惭恨而终。虽然袁绍生前偏爱小儿子袁尚，却并未在继承人上有明确表态，这也导致本应以嫡长子身份继承的袁谭因郭图、审配伪立遗令未能如愿。曹操击败袁绍后，进而渡过黄河追击袁家残余势力，袁谭告急，但袁尚仅给他少量兵力。曹操得郭嘉之计退兵坐观其变，恰使两人此前的种种矛盾彻底爆发，袁谭不敌便引狼入室，派辛毗作为使者向曹操求援，让袁尚不得不北逃投奔乌桓。但袁谭也在之后背叛曹操兵败被杀。没多久，乌桓也被平定，袁熙、袁尚二人投奔公孙康后被斩首送还曹操。',
			xujing:'许靖（？—222年），字文休。汝南郡平舆县（今河南省平舆县）人。汉末至三国蜀汉时期重臣、名士、评论家。许靖因与从弟许邵俱以品评人物而闻名于世。后被刘翊推举为孝廉，任尚书郎。曾先后投奔孔伷、陈祎、许贡、王朗等人，于孙策攻王朗前与家属俱避难交州，受到交趾太守士燮礼待。其后受益州牧刘璋邀请，相继为巴郡、广汉、蜀郡太守。于刘备包围成都时欲越墙叛逃，为刘璋所获。刘备定蜀后欲将其弃用，在法正的建议下方以其为左将军长史。建安二十三年（218年），刘备称汉中王，任命许靖为汉中王傅。章武元年（221年），刘备称帝，任命许靖为司徒，位列三公。章武二年（222年），去世。有文集二卷。',
			hejin:'何进（？~189年），字遂高，南阳郡宛县（今河南南阳市宛城区）人。东汉时期外戚大臣，灵思皇后之兄。初以妹妹有宠，拜为郎中，出任虎贲中郎将、颍川太守，迁侍中、将作大匠、河南尹。黄巾起义时，拜为大将军，总镇京师，发现并镇压马元义的密谋，封为慎侯。为张大威望，在京师讲武结营，置西园八校尉。汉灵帝驾崩后，粉碎了中常侍蹇硕拥立皇子刘协的图谋，听从袁绍之言，博征智谋之士，内借元舅之资，外据辅政之权，独揽朝中大权。中平六年（189），不纳陈琳和曹操劝谏，阴结军阀董卓，联合袁绍谋诛宦竖。事情败露后，为中常侍张让等人损害，其后代是魏晋高门士族南阳何氏。',
			hansui:'韩遂（？－215年），字文约。凉州金城郡人。东汉末年军阀、将领，汉末群雄之一。原名韩约，后改名遂。韩遂最初闻名于西州，被羌胡叛军劫持并推举为首领，以诛宦官为名举兵造反，聚众十万，先后败皇甫嵩、张温、董卓、孙坚等名将，使得天下骚动。后受朝廷招安，拥兵割据一方长达三十余年。韩遂曾与马腾结为异姓兄弟，后二人关系破裂。袁绍、曹操相争之际，马腾、韩遂被钟繇说服，依附于曹操。马腾入京后，留其子马超统领部队。马超推举韩遂为都督起兵反叛曹操，为曹操所败，韩遂逃奔凉州，后又为夏侯渊所败，病死（一说被杀），享年七十余岁。',
			niujin:'牛金（生卒年不详），初为曹仁部曲将，周瑜军数万人来攻，前锋数千人始至，曹仁登城望，乃募得三百人，遣牛金迎战。但对方兵力较多，牛金遂被围困。曹仁亲自杀入阵中救出牛金。司马懿使牛金轻骑饵诱蜀军，刚交战诸葛亮就退兵，追至祁山。蜀将马岱入寇，司马懿遣将军牛金击退，斩千余级。公孙渊反，司马懿帅牛金、胡遵等步骑四万发自洛阳，后平定辽东。牛金官至后将军。',
			jianggan:"蒋干，字子翼，汉末三国时期的人物，九江（治今安徽寿县）人。历史上的蒋干是当时的名士、辩论家。而罗贯中在历史小说《三国演义》中则将蒋干刻画成了被周瑜所愚弄的小丑形象。",
			
			caoying:"曹婴是在电影《三国志之见龙卸甲》中登场的虚拟人物，由李美琪饰演。曹婴是曹操的孙女，弓马娴熟，文武双全，深得曹操的用兵之道及心术。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。",
			simahui:"司马徽（约145—208年），字德操，颍川阳翟（今河南禹州）人。东汉末年名士，精通道学、奇门、兵法、经学。有“水镜先生”之称。 司马徽为人清雅，学识广博，有知人之明，并向刘备推荐了诸葛亮、庞统等人，受到世人的敬重。",
			baosanniang:"鲍三娘是中国民间传说中的人物，事迹多见于《花关索传》。相传她是鲍家庄鲍员外的小女儿。后来与关索成亲，关羽自传授其武艺，因此也造就了鲍三娘的文武双全。荆州失守之后鲍三娘就跟随关索一同投奔蜀汉，并随诸葛亮征讨南蛮。平定了南蛮之后，夫妻二人就此一直替诸葛亮镇守着南中，他们也的确留下了许多脍炙人口的行侠仗义故事，在民间广为流传。",
			
			pangdegong:"庞德公，字尚长，荆州襄阳人，东汉末年名士、隐士。 庞德公与当时徐庶、司马徽、诸葛亮、庞统等人交往密切。庞德公曾称诸葛亮为\"卧龙\"，庞统为\"凤雏\"，司马徽为\"水镜\"，被誉为知人。对诸葛亮、庞统等人早年影响较大，并得到诸葛亮的敬重。庞德公最后隐居于鹿门山，采药而终。",
			zhaotongzhaoguang:"赵统，赵云长子，生卒年不详。常山真定（今为河北正定）人，陈寿在正史《三国志》中记载赵云去世后，赵统袭爵永昌亭侯，官至蜀汉虎贲中郎督，加行领军。赵广（？—263年），三国时期蜀汉牙门将，赵云的次子，赵统之弟。随姜维前往沓中，官拜牙门将。曹魏司马氏派五路大军伐蜀时，随大将军姜维与魏兵战于疆川口，姜维败绩还守剑阁，赵广于沓中战死。",
			majun:"马钧，字德衡，扶风（今陕西扶风）人，生活在汉朝末期，是中国古代科技史上最负盛名的机械发明家之一。马钧年幼时家境贫寒，自己又有口吃的毛病，所以不擅言谈却精于巧思，后来在魏国担任给事中的官职。马钧最突出的表现有还原指南车；改进当时操作笨重的织绫机；发明一种由低处向高地引水的龙骨水车；制作出一种轮转式发石机，能连续发射石块，远至数百步；把木制原动轮装于木偶下面，叫做“水转百戏”。此后，马钧还改制了诸葛连弩，对科学发展和技术进步做出了贡献。",
			simazhao:"司马昭（211年—265年9月6日），字子上（小说《三国演义》为子尚），河内温县（今属河南）人。三国时期曹魏权臣，西晋王朝的奠基人之一。为晋宣帝司马懿与宣穆皇后张春华次子、晋景帝司马师之弟、晋武帝司马炎之父。 司马昭早年随父抗击蜀汉，多有战功。累官洛阳典农中郎将，封新城乡侯。正元二年（255年），继兄司马师为大将军，专揽国政。甘露五年（260年），魏帝曹髦被弑杀，司马昭立曹奂为帝。景元四年（263年），分兵遣钟会、邓艾、诸葛绪三路灭亡蜀汉，受封晋公。次年，进爵晋王。 咸熙二年（265年），司马昭病逝，年五十四，葬于崇阳陵。数月后，其子司马炎代魏称帝，建立晋朝，追尊司马昭为文帝，庙号太祖。",
			wangyuanji:"王元姬（217年—268年4月20日），东海郯县（今山东郯城西北）人。三国时期曹魏经学家王朗之孙女、王肃之女，晋文帝司马昭妻子，晋武帝司马炎与齐王司马攸的生母。 王元姬幼时便通《诗经》、《论语》，嫁司马昭后竭尽妇道、谦虚谨慎。其人颇有远见，曾预言钟会谋反之事。泰始元年（265年），司马炎建立西晋，尊王元姬为皇太后，宫号曰崇化宫。王元姬身处太后之位，提倡节俭，身体力行，作为众妃子的表率。在其治理之下，后宫井井有条，众人和睦相处。 泰始四年（268年），王元姬崩逝，终年五十二岁。谥号文明皇后，与司马昭合葬于崇阳陵。",
			
			liuye:'刘晔（？－234年），字子扬，淮南成德人，是光武帝刘秀之子阜陵王刘延的后代，三国时期魏国著名的战略家。刘晔年少知名，人称有佐世之才，是曹操手下举足轻重的谋士，他屡献妙计，对天下形势的发展往往一语中的。刘晔历仕数朝，是曹魏的三朝元老。',
			luzhi:'鲁芝（190年—273年），字世英。扶风郡郿县（今陕西眉县）人。魏晋时期名臣。官至光禄大夫，位特进，封阴平侯。泰始九年（273年）卒，时年八十四。谥号“贞”。',
			xizhicai:'戏志才（生卒年不详），或志才为字，名不详（一说名忠），东汉颍川郡（今河南禹州）人。经张邈推荐，成为曹操手下谋士。为人多谋略，曹操十分器重，不幸早卒。三国演义中并无此人，三国志中只有寥寥数语。由荀彧推荐给曹操，被称为有“负俗之讥”。死后，荀彧又举荐了郭嘉。<br>陈寿《三国志》记载：太祖与荀彧书曰：自志才亡后，莫可与计事者。汝、颍固多奇士，谁可以继之？彧荐嘉。',
			sunqian:'孙乾（？—约215年），字公祐。北海郡（治今山东昌乐西）人。东汉末年刘备的幕僚。最初被大儒郑玄推荐于州里。刘备领徐州，以孙乾为从事。自徐州跟随刘备，多次作为刘备的使臣。刘备定益州后，拜孙乾为秉忠将军，其待遇仅次于麋竺，与简雍相同。不久后便病逝。',
			miheng:'祢衡（173年－198年），字正平，平原郡（今山东德州临邑德平镇）人。个性恃才傲物．和孔融交好。孔融著有《荐祢衡表》，向曹操推荐祢衡，但是祢衡称病不肯去，曹操封他为鼓手，想要羞辱祢衡，却反而被祢衡裸身击鼓而羞辱。后来祢衡骂曹操，曹操就把他遣送给刘表，祢衡对刘表也很轻慢，刘表又把他送去给江夏太守黄祖，最后因为和黄祖言语冲突而被杀，时年二十六岁。黄祖对杀害祢衡一事感到十分后悔，便将其加以厚葬。',
			quyi:'麴义（又作曲义、鞠义），生卒年不详，是东汉末年军阀袁绍部下的将领，能征善战，屡建战功，早年在凉州，精通羌人战法，率领着袁绍的精锐部队。后来由于自恃功高而骄纵不轨，被袁绍所杀。',
			taoqian:'陶谦（132年－194年），字恭祖。丹阳郡（治今安徽宣城）人。汉末群雄之一。陶谦最初为诸生，在州郡任职，被举茂才，历任舒、卢二县令、幽州刺史、议郎，性格刚直，有大志。后随左车骑将军皇甫嵩对抗北宫伯玉，任扬武校尉，之后又随张温征韩遂、边章。中平五年（188年），徐州黄巾起，陶谦被朝廷任为徐州刺史，击破徐州黄巾，并推行屯田，恢复生产。尔后听从王朗、赵昱建议遣使进京朝贡，获拜安东将军、徐州牧，封溧阳侯。晚年因战事上为曹操大败，徐州大半几乎遭兵祸所害，以致过度忧劳而逝，终年六十三岁。',
			wangyun:'王允（137~192年），字子师，太原郡祁县（今山西祁县）人。东汉末年时期大臣。出身太原王氏，世代官宦。举孝廉出身，司徒高第征为侍御史。出任豫州刺史，勤政爱民。斗争中常侍张让失败后，去官隐居。中平六年，大将军何进掌权之后，辟为从事中郎，迁河南尹。董卓拥立汉献帝即位后，代替杨彪，拜太仆、尚书令、司徒，密谋刺死董卓，联合吕布共同执政，日益骄傲自满。初平三年（192年），董卓余党李傕、郭汜、樊稠等攻破长安。王允兵败处死，时年五十六岁。',
			bianfuren:'武宣皇后卞氏（159年12月30日－230年7月9日），琅邪开阳（今山东临沂）人，魏武帝曹操的正妻（继室），魏文帝曹丕、任城威王曹彰、陈思王曹植、萧怀王曹熊的母亲。原本是倡家，即汉代专门从事音乐歌舞的乐人家庭，后来与曹操成婚，建安初年，原配丁夫人被废，卞夫人成为曹操的正妻。曹丕继位后尊其为皇太后，曹叡继位后尊其为太皇太后。卞后在太和四年去世，与魏武帝曹操合葬高陵。',
			shamoke:'沙摩柯（？－222年），东汉末三国时期五溪蛮首领。汉章武元年（221年）初，为报关羽被东吴杀害之仇，刘备亲自领兵攻孙权，以金锦爵赏诱沙摩柯助战。章武二年（222年），吴大都督陆逊以火攻破刘备，率诸军齐击，汉军四十多个营寨被攻破，沙摩柯在大乱中匹马奔逃，被乱军杀死。',
			lvfan:'吕范（？－228年），字子衡。汝南郡细阳县（今安徽太和）人。汉末至三国时期吴国重臣。吕范年轻为汝南县吏，后避难寿春，结识孙策。此后随孙策、孙权征伐四方，对稳固孙氏在江东的统治做出了杰出的贡献，孙权将其比之于东汉开国元勋吴汉。吴国建立后，吕范累官至前将军、假节、扬州牧，封南昌侯。黄武七年（228年），吕范被拜为大司马，未得授官，便已病逝。孙权悲痛不已，遣使赠其大司马印绶。孙权还都建业后，以太牢礼祭祀吕范。',
			liqueguosi:"请分别参考武将【李傕】和【郭汜】各自的介绍。",
			maojie:"毛玠（？—216年），字孝先，陈留平丘（今河南封丘）人。东汉末年大臣。年少时为县吏，以清廉公正著称。因战乱而打算到荆州避乱，但中途知道刘表政令不严明，因而改往鲁阳。后来投靠曹操，提出“奉天子以令不臣，脩耕植，畜军资”的战略规划，得到曹操的欣赏。<br>毛玠与崔琰主持选举，所举用的都是清廉正直之士。而毛玠为人廉洁，激起天下廉洁之风，一改朝中奢华风气。曹操大为赞赏，曹丕也亲自去拜访他。<br>曹操获封魏公后，毛玠改任尚书仆射，再典选举。又密谏曹操应该立嫡长子曹丕为魏国太子。崔琰被杀后，毛玠十分不快。后来有人诬告毛玠，曹操大怒，将毛玠收于狱中。及后在桓阶、和洽营救下，只被免职，不久逝世于家中。曹操在他死后赐他棺材和钱帛。",
			
			huangfusong:'字义真。安定郡朝那县（今宁夏彭阳）人。于黄巾起义时，以中郎将身份讨伐黄巾，用火攻大破张梁、张宝。后接替董卓进攻张梁，连胜七阵。掘张角墓，拜左车骑将军、冀州牧，因拒绝贿赂宦官而被免职。 董卓死，王允命其与吕布等共至郿坞抄籍董卓家产、人口，皇甫嵩将坞中所藏良家子女，尽行释放。',
			zangba:'其父臧戒，有二子臧艾与臧舜。年少时曾召集数人将获罪的父亲救出，此后四处流亡。后来成为陶谦麾下的骑都尉，负责募兵抵抗黄巾军。与孙观、尹礼等人拥兵驻屯于开阳，自成一股独立势力，后跟随吕布。吕布战败后，投降了曹操。后与袁绍、孙权等的战役里战功赫赫，官至镇东将军。',
			zhangren:'刘璋的属下，以忠勇著称。刘备入蜀时，张任曾劝刘璋提防刘备，但刘璋没有听从。魏延舞剑想趁机除掉刘璋时，张任出面对舞，解救刘璋。后在刘备进攻时于落凤坡射死了庞统。',
			jiling:'东汉末年袁术帐下将领，勇猛非常，曾奉命率军攻打小沛的刘备，在吕布辕门射戟的调停下撤兵。',
			zoushi:'军阀张济之妻，张绣之婶。张绣降曹后，邹氏遂被曹操霸占。贾诩献计趁机诛杀曹操，险些得手。曹操在损失爱将典韦、侄子曹安民和长子曹昂后方才逃出生天。',
			ganfuren:'刘备起兵后，于沛城娶甘氏为妾。后来，甘夫人随刘备到荆州，生了阿斗(也就是后主刘禅)。223年四月，刘备病死于白帝城，追谥甘夫人为“昭烈皇后”。',
			jiangfei:'请分别查阅【蒋琬】和【费袆】各自的介绍。',
			mifuren:'刘备夫人。徐州别驾糜竺之妹。长坂兵败，她怀抱年仅两岁的刘禅在乱军中走散，被赵云发现；但麋夫人因为赵云只有一匹马，不肯上马，在将阿斗托付给赵云后投井而亡。',
			chendong:'陈武，东吴将领，孙策攻打刘繇，陈武前来相助，孙策非常喜爱陈武，拜为校尉，使作先锋。陈武以十数骑兵力杀敌五十余人。后于赤壁等战役屡立功勋。董袭献上严虎的人头来降孙策。赤壁之战，董袭受周瑜命，分兵去汉阳，合肥会战时接应太史慈，逍遥津支援孙权。濡须口之战时，董袭在船上督战，船覆董袭坚守殉职。',
			jiangqing:'擅长弓术。与周泰原为活跃于长江一带的江贼，孙策脱离袁术下江东自立门户时，和周泰一起率众投靠。 孙策攻刘繇，并引出城中麾下的陈横、薛礼、张英三名将领，陈横后被蒋钦一箭射杀，后与韩当等将乘舟过江，乱箭射杀敌军。曾在赤壁之战与周泰，还有擅使长枪的韩当率领水军在三江口踏江破敌。',
			kongrong:'字文举，鲁国人，东汉文学家，“建安七子”之首。献帝即位后任北军中侯、虎贲中郎将、北海相，时称孔北海后因触怒曹操，为曹操所杀。能诗善文。',
			mateng:'字寿成，扶风茂陵人，东汉末年征西将军，割据西凉一带的军阀，伏波将军马援的后代，官至卫尉，封爵槐里乡侯。因其子马超谋反，而被杀，夷灭三族。',
			tianfeng:'字元皓。东汉末年大军阀袁绍部下重要谋士。为人刚直不阿，曾多次向袁绍进言而不被采纳。后因谏阻袁绍征伐曹操而被袁绍下令监禁，并于官渡之战后，被袁绍杀害。',
			caochun:'字子和，沛国谯（今安徽亳州）人。东汉末年曹操麾下将领，曹仁之弟。曹纯是曹操部下精锐部队“虎豹骑”的统领者之一，因在平定北方的战役中颇有功绩，被加封为高陵亭侯。死后谥曰威侯。曹纯擅战，甚得人心，为人重纲纪，不失理智，好学问，敬爱学士，闻名天下。',
			hanba:'中国古代神话传说中引起旱灾的怪物。《诗·大雅·云汉》：“旱魃为虐，如惔如焚。”',
			cuiyan:'字季珪，清河东武城（今河北省清河县）人。东汉末年名士，司空崔林的从兄，曹操帐下谋士。崔琰相貌俊美，很有威望，曹操对他也很敬畏。建安二十一年（216年），崔琰在给杨训的书信中写道“时乎时乎，会当有变时”，曹操认为此句有不逊之意，因而将崔琰下狱，不久崔琰即被曹操赐死。',
			lifeng:'南阳（治今河南南阳）人，三国时期蜀汉大臣李严之子。230年，李严迁为骠骑将军，率军前往汉中，诸葛亮上表推举李丰为江州都督督军，以代替李严管理后方事务。李严去世后，李丰在蜀汉官至朱提太守。',
			sunru:'孙茹，孙坚之妹，其名载于《江浙通志》中。儿子徐琨亦为孙吴早期名将，当初母子二人随军跟从孙策渡长江时，因为暂时没足够的船，孙策感到苦恼打算暂时驻军江边。孙茹夫人献计以芦苇为筏，孙策大喜。吴军遂以神不知鬼不觉的速度过长江击破刘繇部将张英，立下平江东第一功。',
			lingcao:'东汉末年将领，吴郡余杭（今浙江余杭）人，凌统之父。早年跟随孙策转战江东。孙权统军后，凌操随其征伐黄祖，被甘宁射杀。《吴书》载：甘宁以善射，将兵在后，射杀校尉凌操',
			zhugeguo:'诸葛果，为《历代神仙通鉴》中诸葛亮女儿的名字，《历代神仙通鉴》记录从上古到明代的神仙历史，因此诸葛果不见于任何史书。成都西南有朝真观，即乘烟观。相传，诸葛果在这里修行后成仙升天。',
			zhuling:'朱灵（生卒年不详），字文博，冀州清河国人，三国时期曹魏名将。官至后将军，封为高唐侯，谥号威侯。初为袁绍部将，后归顺曹操，随曹操征伐四方，屡建战功。',
			re_yuanshu:'字公路，汝南汝阳人，袁绍之弟。初为虎贲中郎将。董卓进京后以袁术为后将军，袁术因畏祸而出奔南阳。初平元年与袁绍、曹操等同时起兵，共讨董卓。后与袁绍对立，被袁绍、曹操击败，率馀众奔九江，割据扬州。建安二年称帝，建号仲氏。',
			fuwan:'伏完（?－209），琅邪东武（今属山东）人，东汉末大臣，汉献帝伏皇后之父。历官辅国将军、中散大夫、屯骑校尉。',
			liuxie:'字伯和，又字合。汉族，祖籍沛县，生于洛阳。汉灵帝第三子，被董卓迎立为帝。董卓被王允和吕布诛杀后，董卓部将李傕等攻入长安，再次挟持了他，后来逃出长安。公元196年，曹操控制了刘协，并迁都许昌，“挟天子以令诸侯”。公元220年，曹操病死，刘协被曹丕控制，随后被迫禅让于曹丕。',
			yuanshu:'字公路，汝南汝阳人，袁绍之弟。初为虎贲中郎将。董卓进京后以袁术为后将军，袁术因畏祸而出奔南阳。初平元年与袁绍、曹操等同时起兵，共讨董卓。后与袁绍对立，被袁绍、曹操击败，率馀众奔九江，割据扬州。建安二年称帝，建号仲氏。',
			gongsunzan:'字伯珪，汉族，号“白马义从”。辽西令支人。东汉末年献帝年间占据幽州一带的军阀，汉末群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑氏山中读书，粗通经传。',
			caohong:'字子廉，沛国谯（今安徽亳县）人，曹操从弟，曾献马并救护曹操。后多随军征伐，平兖州、征刘表、讨祝臂。曹丕即位时封曹洪为骠骑将军。曹叡即位，拜曹洪为后将军，更封乐城侯，后复拜为骠骑将军。曹洪逝世，追谥曰恭侯。',
			guanyinping:'河东解县（今山西运城）人，美髯公关羽之女。因在关羽的四个子女中排行第三，故又被称作“关三小姐”、“关氏三姐”或“关羽三小姐”。传说她是赵云的弟子、并随同诸葛亮平定南蛮。',
			xiahouba:'夏侯渊次子。本为曹魏武将，后因司马懿诛曹爽一族，夏侯霸身为曹氏宗室而心怀不安，遂投降蜀汉。后随蜀将姜维北伐，官至车骑将军。',
			daxiaoqiao:'大乔，庐江皖县人，为乔公长女，孙策之妻，容貌国色流离。小乔为大乔之妹，周瑜之妻，资貌绝伦。两人合称“二乔”。',
			yuejin:'字文谦，魏“五子良将”之一。容貌短小，以胆烈跟从曹操，南征北讨，战功无数。从击袁绍于官渡，奋勇力战，斩袁绍部将淳于琼。又从击袁绍子谭、尚于黎阳，斩其大将严敬。从平荆州，留屯襄阳，进击关羽、苏非等人，击退其众，南郡诸郡的山谷蛮夷都前往乐进处投降。后来从曹操征孙权，假进节。曹操回师后，留乐进与张辽、李典屯于合肥。又以乐进数有军功，迁右将军。建安二十三年逝世，谥曰威侯。',
			caoang:'字子修，曹操的长子，由于性情谦和且聪慧所以深得曹操喜爱。曹操征讨张绣时，羞辱张绣之婶邹氏，被张绣突然袭击。曹昂为保护曹操撤退，与典韦一起战死在宛城。',
			zhugejin:'字子瑜，吴国大臣，诸葛亮之兄，诸葛恪之父。经鲁肃推荐，为东吴效力。胸怀宽广，温厚诚信，得到孙权的深深信赖，努力缓和蜀汉与东吴的关系。建安二十五年（220年）吕蒙病逝，诸葛瑾代吕蒙领南郡太守，驻守公安。孙权称帝后，诸葛瑾官至大将军，领豫州牧。',
			zhangxingcai:'蜀名将张飞与夏侯氏所生之女，刘禅的妻子，史上称为“敬哀皇后”。',
			zumao:'字大荣，吴郡富春人，使用双刀。孙坚在汜水关被华雄击败，祖茂为保护主公而主动提出与孙坚交换头盔，孙坚因此得脱。祖茂将孙坚的赤帻挂在柱子上，准备以此引诱华雄，趁机偷袭，却反被华雄所杀。',
			dingfeng:'吴国将领。年少时以骁勇为小将，经常奋勇杀敌，屡立功勋，此后又于东兴之战中“雪中奋短兵”，大破侵犯东吴的魏军。吴景帝孙休在位时，丁奉设计除掉了东吴的权臣孙綝，被拜为大将军，后为右大司马、左军师。',
			panfeng:'冀州牧韩馥部下的上将。当十八路诸侯讨伐董卓之时，他奉韩馥之命前往汜水关前挑战董卓部下大将华雄，不敌被斩。',
			maliang:'字季常，因眉毛中有白毛，人称白眉马良，马谡的兄长。马良在兄弟五人中名声最佳，因此有“马氏五常，白眉最良”的说法。',
			zhugedan:'字公休，曹魏后期的重要将领，诸葛亮的族弟。曾与司马师一同平定毌丘俭、文钦的叛乱。之后因与被诛的夏侯玄、邓飏交厚，且见到王淩、毌丘俭等人的覆灭而心不自安，于甘露二年起兵，并得到东吴的支援，但于次年被镇压，被大将军司马胡奋所斩。',
			hetaihou:'大将军何进的妹妹，汉灵帝刘宏第二任皇后，汉少帝刘辩的生母。何氏出身于屠户家庭，后选入掖庭，得到汉灵帝临幸，生下皇子刘辩，并受封贵人。光和三年（180年），立为皇后。中平六年（189年），汉灵帝去世，刘辩继位，尊何氏为皇太后。董卓进京，废黜刘辩，不久毒杀刘辩及何氏。',
			sunluyu:'又名小虎，孙权与步练师之女。吴后期，孙鲁班诬陷孙鲁育参与谋反，于是孙峻杀害了孙鲁育。',
			wenpin:'本为刘表大将，刘表死后，跟随刘琮投降曹操。后曹操令其镇守江夏，多次阻止了关羽和孙权的进攻，为曹操倚为屏障的大将之一。',
			zhanglu:'汉宁太守，继父祖之后传播五斗米教。刘璋杀张鲁之母，二人因此结仇，多次交战。刘备攻益州时，刘璋向张鲁求援。张鲁派马超前往，但马超投降刘备。张鲁后见曹操自封魏王，想要自立为汉宁王，为谋士阎圃劝免。后曹操讨汉中，张鲁败，众人劝其烧粮仓，张鲁认为这是国家之物，未听从，为曹操所称赞。后投降曹操，任镇南将军。',
			mayunlu:'马腾之女，马超之妹，赵云之妻。父亲令其自幼习武，枪术非凡，寻常男子也是难以匹敌。',
			tadun:'东汉末年辽西乌桓（亦称乌丸）的首领，乌桓大人丘力居的从子，总摄三王部。曾出兵协助袁绍，击破公孙瓒。此后受袁绍假传朝廷诏命，与三王难楼、苏仆延、乌延等人同受单于称号及印绶。后难楼、苏仆延率其部众奉立楼班为单于，蹋顿于是退位为王。袁绍死后，收到被曹操击败的袁尚的求助，纠集逃亡至乌桓的幽州、冀州官吏百姓，企图夺回河北。东汉建安十二年，曹操亲征乌桓。八月，乌桓、袁氏部队于柳城白狼山为曹军所败，蹋顿在此战中被曹操的先锋张辽所斩杀。	',
			yanbaihu:'吴郡乌程县人，原名“严虎”，别号“白虎”，东汉末年盘据吴郡一带山贼出身的地方豪帅。献帝初拥兵万人自固。孙策受袁术使渡江，攻破白虎等。白虎奔余杭，投靠许昭。建安二年，再度被孙策击败，至此不知亡佚何处。',
			simalang:'字伯达，“司马八达”之一。曹操任司空后，司马朗被辟为司空属官，又历任成皋令、堂阳长、元城令、丞相主簿、兖州刺史等职，所在皆有政绩，深受百姓爱戴。后司马朗与夏侯惇、臧霸等征讨吴国，到达居巢。军队中流行瘟疫，司马朗亲自去视察，派送医药，因此染病去世。',
			wangji:'字伯舆，东莱曲城人。三国时期魏国将领。王基文武兼备，才高于世，德溥于时，深得司马懿、司马师、司马昭的器重，尤其在南征毋丘俭，文钦之乱，东征诸葛诞之叛大规模军事活动中，王基与司马师、司马昭结下了深厚的军友情谊。魏景元二年王基去世，追赠司空，谥号为景侯。',
			buzhi:'吴重臣，最初避难江东，于孙权统事后，被召为主记。后游历吴地，又任海盐县长，还任东曹掾，出领鄱阳太守。建安十五年，转交州刺史、立武中郎将，率军接管往交州，追拜使持节、征南中郎将。次年，以平定交州功，加平戎将军，封广信侯。后迁右将军、左护军，改封临湘侯。孙权称帝后，拜骠骑将军，领冀州牧，后因冀州分与蜀汉而解牧职。又都督西陵。赤乌九年，代陆逊为丞相。',
			litong:'字文达，小字万亿。江夏平春（今河南信阳）人，汝南太守。早年以游侠闻名于江汝，在率众补充曹操兵源有功拜为阳安都尉，其间不因私而忘公，不因其妻子的求请而过问执法者。后来在曹操讨伐马超时出阵挑战，死于马超枪下。',
			mizhu:'原为徐州富商，后被徐州牧陶谦辟为别驾从事。陶谦病死后，奉其遗命迎接刘备。与其弟麋芳拒绝曹操的任命而跟随刘备，在刘备最潦倒之时给予刘备很大的帮助，使他重新振作。214年（建安十九年），刘备入主益州后，拜麋竺为安汉将军，地位在诸葛亮之上，为刘备手下众臣之最。吕蒙袭取荆州，麋芳举城投降，导致关羽兵败身亡，麋竺面缚请罪，刘备劝慰麋竺，对他待遇如初。',
			dongbai:'东汉末年县君，陇西临洮（今甘肃省岷县）人，董卓之孙女。董卓当权时，遍封其宗族，其中孙女董白尚未及笄，被封为渭阳君。',
			zhaoxiang:'赵云与马云騄之女，赵统赵广之妹，关平之妻。',
			heqi:'早年在平定山越的战争中立有大功，又讨平叛乱无数，身经百战，所向披靡，深受孙权器重。后来在与魏国的多次边境争斗中也屡立战功，官至后将军，并领徐州牧。',
			dongyun:'大汉重臣，掌军中郎将董和之子。东汉末年，其父董和事刘璋为益州太守，刘备立太子时，允被选为洗马，后为黄门侍郎，延熙六年（公元243年）加辅国将军，延熙七年（公元244年）以侍中守尚书令，任大将军费祎的副手。',
			mazhong:'本名狐笃，字德信，巴西阆中人，初次出场时随丞相诸葛亮南征孟获，诸葛亮遣马忠与赵云两路夹攻，大败蛮将阿会喃。孟获派弟孟优赴汉军处假投降，欲内应外合，诸葛亮将计就计，埋伏擒获孟获和诸洞酋长，马忠亦于此战立下战功。后诸葛亮北伐时亦数次出阵，立下汗马功劳。',
			kanze:'孙权谋士，在孙权广纳贤才之时与严畯等来到江东，甚为孙权礼遇。第一个识破周瑜打黄盖是苦肉计，后欣然向曹操献诈降书，被曹操识破后面不改色，哈哈大笑，一番妙言让曹操相信了诈降书，是苦肉计中的关键人物。后劝孙权不要设局请关羽。在刘备御驾亲征东吴时，向孙权举荐陆逊为都督，间接上挽救了东吴的命运。',
			lingju:'相传为吕布与貂蝉的女儿，被汉献帝掳走并训练为死士，被秘密送入宫中接近曹操，成为其“忘年红颜知己”。外表是柔弱的女子，实际上身怀致命的杀人绝技，等待时机给予曹操致命一击。',
			yangxiu:'字德祖，今陕西华阴人，是东汉末年的文学家。杨修学问渊博，极聪慧，任丞相府主簿。史载，“是时，军国多事，修总知外内，事皆称意”。',
			chenlin:'陈琳（？－217年），字孔璋，广陵射阳（今江苏宝应）人。东汉末年著名文学家，“建安七子”之一。',
			zhugeke:'字元逊，琅邪阳都（今山东沂南）人。三国时期吴臣，蜀丞相诸葛亮之侄，吴大将军诸葛瑾长子，从小就以神童著称，深受孙权赏识。',
			zhangbao:'东汉末年黄巾起义的首领之一，张角之弟，张梁之兄。中平元年（184）随兄张角起义，号称“地公将军”。',
			chengyu:'字仲德，本名程立，因梦中於泰山捧日，更名程昱。荀彧投曹操时向其举荐程昱。他参与了攻打吕布、袁绍、刘备、孙权的大部份战事，一直出谋献策，表现出众。',
			sunhao:'孙权之孙，孙和之子，东吴的末代君主。在位初期虽施行过明政，但不久即沉溺酒色，专于杀戮，变得昏庸暴虐，嗜用挖眼、剥皮等酷刑。280年，吴国被西晋所灭，孙皓投降西晋，被封为归命侯。',
			wutugu:'南蛮乌戈国主，身长丈二（约合现在2.77米），不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒。',
			shixie:'割据交州（今越南）一带的军阀，年少时师事刘陶，经逐渐升迁任交趾太守。后被朝廷加职绥南中郎将，迁安远将军，封龙度亭侯。在步骘接管交州时积极配合，归附孙权，被孙权加为左将军；此后又因诱降益州豪族雍闿而迁任卫将军，进封龙编侯。任交趾太守四十年。',
			guansuo:'关羽的三子。自荆州失陷后，逃难在鲍家庄养病，伤势痊愈之后入蜀，逢丞相诸葛亮南征，拜之为前部先锋，一同南征。',
			wanglang:'字景兴，汉末三国经学家，曹魏初期重臣。曾任会稽太守举兵抵抗孙策，后为曹操所征，被拜为谏议大夫等职。曹丕建立魏国后任命为司空。小说《三国演义》中他在阵前与诸葛亮饶舌比拼，最终被诸葛亮言词所驳倒，一时气愤坠马身亡。',
			zhangliang:'东汉末年黄巾起义首领之一，张角的三弟。中平元年（184）随兄起义，号称“人公将军”。遭到朝廷所派左中郎将皇甫嵩进攻时，他率军在广宗（今河北威县）进行反击。后因警戒疏忽，遭到汉军夜袭，兵败身亡。',
		},
		characterTitle:{},
		perfectPair:{
			yuejin:['re_lidian'],
			zhugejin:['zhugeke'],
			guanyinping:['guanyu'],
			zhangxingcai:['liushan'],
			fuwan:['fuhuanghou'],
			sunshangxiang:['liubei'],
			caoang:['caocao'],
			zhangbao:['zhangliang','zhangjiao'],
			zhangliang:['zhangjiao'],
			maliang:['masu'],
			lingcao:['lingtong'],
			lingju:['diaochan','lvbu'],
			jiangqing:['zhoutai'],
			dingfeng:['xusheng','zhugeke'],
			caohong:['caoren'],
			daxiaoqiao:['zhouyu','sunce'],
			cuiyan:['caocao'],
			guansuo:['guanyu'],
			mateng:['machao','madai','mayunlu'],
			chengpu:['zhouyu'],
			hanba:['swd_muyun'],
			dongbai:['dongzhuo'],
			cuimao:['caopi'],
			simazhao:['wangyuanji'],
		},
		card:{
			wy_meirenji:{
				fullskin:true,
				vanish:true,
				derivation:'wangyun',
				type:'trick',
				enable:true,
				filterTarget:function(card,player,target){
					return target.countCards('h')&&target!=player&&target.hasSex('male');
				},
				content:function(){
					'step 0'
					event.list=game.filterPlayer(function(current){
						return current!=player&&current!=target&&current.hasSex('female');
					}).sortBySeat();
					'step 1'
					if(target.countCards('h')&&event.list.length){
						event.current=event.list.shift();
						event.current.gainPlayerCard(target,true,'h');
						target.line2([event.current,player]);
					}
					else{
						event.goto(4);
					}
					'step 2'
					event.current.chooseCard('h',true,'将一张手牌交给'+get.translation(player));
					'step 3'
					if(result.bool){
						event.current.give(result.cards,player);
					}
					event.goto(1);
					'step 4'
					var n1=target.countCards('h');
					var n2=player.countCards('h');
					if(n1>n2){
						target.damage(player);
						player.line(target);
					}
					else if(n1<n2){
						player.damage(target);
						target.line(player);
					}
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							var num=game.countPlayer(function(current){
								return current!=player&&current!=target&&current.hasSex('female');
							});
							var nh=target.countCards('h');
							num=Math.min(num,nh);
							var nh1=nh-num;
							var nh2=player.countCards('h')-1+num;
							if(nh1==nh2&&num==0) return 0;
							if(nh2<=nh1) return -3;
							if(player.hp==1||num==1) return 0;
							return -1;
						}
					}
				}
			},
			wy_xiaolicangdao:{
				fullskin:true,
				vanish:true,
				derivation:'wangyun',
				type:'trick',
				enable:true,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					'step 0'
					var num=Math.min(5,target.maxHp-target.hp);
					if(num) target.draw(num);
					'step 1'
					target.damage();
				},
				ai:{
					order:6,
					tag:{
						damage:1
					},
					result:{
						target:function(player,target){
							var num=Math.min(5,target.maxHp-target.hp);
							if(target.hp==1){
								if(num>=3) return 0;
								if(!target.hasSkillTag('maixie_hp')){
									return -3;
								}
								return -1;
							}
							if(num==2) return 0;
							return -2+num+(Math.pow(target.hp,0.2)-1);
						}
					}
				}
			},
			zhuangshu_basic:{
				fullskin:true,
				vanish:true,
				derivation:'fengfangnv',
				type:'equip',
				suit:'spade',
				subtype:'equip5',
				skills:['zhuangshu_basic'],
				forceDie:true,
				onLose:function(){
					if((!event.getParent(2)||event.getParent(2).name!='swapEquip')&&(event.getParent().type!='equip'||event.getParent().swapEquip)){
						card.fix();
						card.remove();
						card.destroyed=true;
						game.log(card,'被销毁了');
					}
				},
				equipDelay:false,
				loseDelay:false,
			},
			zhuangshu_trick:{
				fullskin:true,
				vanish:true,
				derivation:'fengfangnv',
				type:'equip',
				suit:'club',
				subtype:'equip5',
				forceDie:true,
				skills:['zhuangshu_trick'],
				onLose:function(){
					if((!event.getParent(2)||event.getParent(2).name!='swapEquip')&&(event.getParent().type!='equip'||event.getParent().swapEquip)){
						card.fix();
						card.remove();
						card.destroyed=true;
						game.log(card,'被销毁了');
					}
				},
				equipDelay:false,
				loseDelay:false,
			},
			zhuangshu_equip:{
				fullskin:true,
				vanish:true,
				derivation:'fengfangnv',
				type:'equip',
				suit:'heart',
				subtype:'equip5',
				skills:['zhuangshu_equip'],
				forceDie:true,
				inherit:'zhuangshu_basic',
				onLose:function(){
					if((!event.getParent(2)||event.getParent(2).name!='swapEquip')&&(event.getParent().type!='equip'||event.getParent().swapEquip)){
						card.fix();
						card.remove();
						card.destroyed=true;
						game.log(card,'被销毁了');
					}
				},
				equipDelay:false,
				loseDelay:false,
			},
		},
		skill:{
			//清河公主
			zengou:{
				audio:2,
				trigger:{global:'useCard'},
				filter:function(event,player){
					return event.card.name=='shan'&&player.inRange(event.player)&&(player.hp>0||player.hasCard(function(card){
						return get.type(card)!='basic'&&lib.filter.cardDiscardable(card,player,'zengou');
					},'eh'))
				},
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)>=0) return false;
					if(get.damageEffect(event.player,event.getParent(3).player,player,get.nature(event.card))<=0) return false;
					if(player.hasCard(function(card){
						return get.type(card)!='basic'&&get.value(card)<7&&lib.filter.cardDiscardable(card,player,'zengou');
					},'eh')) return true;
					return player.hp>Math.max(1,event.player.hp);
				},
				content:function(){
					'step 0'
					trigger.all_excluded=true;
					var str='弃置一张非基本牌';
					if(player.hp>0) str+='，或点「取消」失去一点体力';
					var next=player.chooseToDiscard(str,function(card){
						return get.type(card)!='basic';
					},'he').set('ai',function(card){
						return 7-get.value(card);
					});
					if(player.hp<=0) next.set('forced',true);
					'step 1'
					if(!result.bool) player.loseHp();
					'step 2'
					var cards=trigger.cards.filterInD();
					if(cards.length) player.gain(cards,'gain2');
				},
			},
			qhzhangji:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					if(!event.player.isIn()) return false;
					if(player.getHistory('sourceDamage').length>0) return true;
					if(player.getHistory('damage').length>0) return event.player.countCards('he')>0;
					return false;
				},
				content:function(){
					'step 0'
					event.target=trigger.player;
					if(player.getHistory('sourceDamage').length) player.chooseBool(get.prompt('qhzhangji',event.target),'令'+get.translation(event.target)+'摸两张牌').set('choice',get.attitude(player,event.target)>0).set('ai',()=>_status.event.choice);
					else event.goto(2);
					'step 1'
					if(result.bool){
						player.logSkill('qhzhangji',target);
						event.logged=true;
						target.draw(2);
					}
					'step 2'
					if(target.isIn()&&target.countCards('he')>0&&player.getHistory('damage').length>0) player.chooseBool(get.prompt('qhzhangji',event.target),'令'+get.translation(event.target)+'弃置两张牌').set('choice',get.attitude(player,event.target)<0).set('ai',()=>_status.event.choice);
					else event.finish();
					'step 3'
					if(result.bool){
						if(!event.logged) player.logSkill('qhzhangji',target);
						target.chooseToDiscard('he',true,2);
					}
				},
			},
			//十周年夏侯霸
			rebaobian:{
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					for(var i of lib.skill.rebaobian.derivation){
						if(!player.hasSkill(i,null,null,false)) return true;
					}
					return false;
				},
				forced:true,
				content:function(){
					for(var i of lib.skill.rebaobian.derivation){
						if(!player.hasSkill(i,null,null,false)){
							player.addSkillLog(i);
							break;
						}
					}
				},
				ai:{
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')&&!target.hasSkill('oltiaoxin',null,null,false)){
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [0,1];
							}
						}
					}
				},
				derivation:['oltiaoxin','new_repaoxiao','xinshensu'],
			},
			//范强张达
			yuanchou:{
				audio:2,
				trigger:{
					player:'useCardToPlayered',
					target:'useCardToTargeted',
				},
				filter:function(event){
					return event.card.name=='sha'&&get.color(event.card)=='black';
				},
				forced:true,
				logTarget:'target',
				content:function(){
					trigger.target.addTempSkill('qinggang2');
					trigger.target.storage.qinggang2.add(trigger.card);
				},
				ai:{
					unequip_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&arg.name=='sha'&&get.color(arg.card)=='black') return true;
						return false;
					}
				},
				global:'yuanchou_ai',
				subSkill:{
					ai:{
						unequip_ai:true,
						skillTagFilter:function(player,tag,arg){
							if(arg&&arg.name=='sha'&&get.color(arg.card)=='black'&&arg.target&&arg.target.hasSkill('yuanchou')) return true;
							return false;
						}
					},
				},
			},
			juesheng:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				viewAs:{name:'juedou',isCard:true},
				filterCard:()=>false,
				selectCard:-1,
				precontent:function(){
					player.awakenSkill('juesheng');
					player.addTempSkill('juesheng_counter');
				},
				ai:{
					result:{
						player:function(player,target){
							return target.getAllHistory('useCard',(evt)=>evt.card.name=='sha').length*lib.card.juedou.ai.result.player.apply(this,arguments);
						},
						target:function(player,target){
							var num=target.getAllHistory('useCard',(evt)=>evt.card.name=='sha').length;
							if(num<target.hp) return 0;
							return num*lib.card.juedou.ai.result.target;
						},
					},
				},
				subSkill:{
					counter:{
						trigger:{global:'damageBegin1'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							var evt=event.getParent();
							return evt.skill=='juesheng'&&evt.player==player;
						},
						content:function(){
							var target=trigger.getParent().target;
							trigger.num=target.getAllHistory('useCard',(evt)=>evt.card.name=='sha').length;
							target.addTempSkill('juesheng',{player:'phaseAfter'});
						},
					},
				},
			},
			//田之间
			saodi:{
				audio:2,
				trigger:{
					player:'useCardToPlayer',
				},
				direct:true,
				filter:function(event,player){
					if(event.targets.length!=1||event.target==player||event.target.hasSkill('nodis')) return false;
					if(event.card.name!='sha'&&get.type(event.card)!='trick') return false;
					var target=event.target;
					var left=[],right=[],left2=player,right2=player;
					while(left2!=target&&right2!=target){
						left2=left2.getPrevious();
						right2=right2.getNext();
						if(left2!=target) left.push(left2);
						if(right2!=target) right.push(right2);
					}
					if(target==left2){
						for(var i of left){
							if(lib.filter.targetEnabled2(event.card,player,i)) return true;
						}
					}
					if(target==right2){
						for(var i of right){
							if(lib.filter.targetEnabled2(event.card,player,i)) return true;
						}
					}
					return false;
				},
				aiJudge:function(card,player,target,bool){
					var left=[],right=[],left2=player,right2=player,left3=false,right3=false;
					var eff_left=0,eff_right=0;
					while(left2!=target&&right2!=target){
						left2=left2.getPrevious();
						right2=right2.getNext();
						if(left2!=target) left.push(left2);
						if(right2!=target) right.push(right2);
					}
					if(target==left2){
						for(var i of left){
							if(lib.filter.targetEnabled2(card,player,i)){
								left3=true;
								eff_left+=get.effect(i,card,player,player);
							}
						}
					}
					if(target==right2){
						for(var i of right){
							if(lib.filter.targetEnabled2(card,player,i)){
								right3=true;
								eff_right+=get.effect(i,card,player,player);
							}
						}
					}
					if(left3&&right3){
						if(!bool) return Math.max(eff_left,eff_right);
						if(eff_left>Math.max(0,eff_right)) return '↖顺时针';
						if(eff_right>Math.max(0,eff_left)) return '逆时针↗';
						return 'cancel2';
					}
					else if(left3){
						if(bool) return eff_left>0?'↖顺时针':'cancel2';
						return eff_left;
					}
					else if(right3){
						if(bool) return eff_right>0?'↖顺时针':'cancel2';
						return eff_right;
					}
					else return bool?'cancel2':0;
				},
				content:function(){
					'step 0'
					var choices=[];
					var target=trigger.target;
					var left=[],right=[],left2=player,right2=player;
					while(left2!=target&&right2!=target){
						left2=left2.getPrevious();
						right2=right2.getNext();
						if(left2!=target) left.push(left2);
						if(right2!=target) right.push(right2);
					}
					if(target==left2){
						for(var i of left){
							if(lib.filter.targetEnabled2(trigger.card,player,i)){
								choices.push('↖顺时针');
								break;
							}
						}
					}
					if(target==right2){
						for(var i of right){
							if(lib.filter.targetEnabled2(trigger.card,player,i)){
								choices.push('逆时针↗');
								break;
							}
						}
					}
					choices.push('cancel2');
					player.chooseControl(choices).set('prompt',get.prompt('saodi')).set('prompt2','令自己和'+get.translation(trigger.target)+'某个方向之间的所有角色均成为'+get.translation(trigger.card)+'的目标').set('choices',choices).set('ai',function(){
						var evt=_status.event.getTrigger();
						return lib.skill.saodi.aiJudge(evt.card,evt.player,evt.target,true);
					});
					'step 1'
					if(result.control!='cancel2'){
						var targets=[];
						if(result.control=='↖顺时针'){
							var current=player.getPrevious();
							while(current!=trigger.target){
								if(lib.filter.targetEnabled2(trigger.card,player,current)) targets.push(current);
								current=current.getPrevious();
							}
						}
						else{
							var current=player.getNext();
							while(current!=trigger.target){
								if(lib.filter.targetEnabled2(trigger.card,player,current)) targets.push(current);
								current=current.getNext();
							}
						}
						event.targets=targets;
						if(!event.isMine()&&!event.isOnline()) game.delayx();
					}
					else event.finish();
					'step 2'
					player.logSkill('saodi',targets);
					trigger.targets.addArray(targets);
				},
				ai:{
					effect:{
						player_use:function(card,player,target){
							if(!target||player._saodi_judging||ui.selected.targets.length||player==target||target.hasSkill('nodis')) return;
							if(typeof card!='object'||card.name!='sha'&&get.type(card)!='trick') return false;
							player._saodi_judging=true;
							var effect=lib.skill.saodi.aiJudge(card,player,target);
							delete player._saodi_judging;
							if(effect>0) return [1,effect/Math.max(0.01,get.attitude(player,player))];
						},
					},
				},
			},
			zhuitao:{
				audio:2,
				direct:true,
				locked:false,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					var storage=player.getStorage('zhuitao');
					return game.hasPlayer(function(current){
						return current!=player&&!storage.contains(current);
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('zhuitao'),'令自己至一名其他角色的距离-1',function(card,player,target){
						return target!=player&&!player.getStorage('zhuitao').contains(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<0&&get.distance(player,target)==2) return 100;
						return get.distance(player,target)*(1-get.sgn(att)/3);
					});
					'step 1'
					if(result.bool){
						player.logSkill('zhuitao',result.targets[0]);
						player.markAuto('zhuitao',result.targets);
						game.delayx();
					}
				},
				intro:{
					content:'至$的距离-1',
					onunmark:true,
				},
				onremove:true,
				mod:{
					globalFrom:function(player,target,distance){
						if(player.getStorage('zhuitao').contains(target)) return distance-1;
					},
				},
				group:'zhuitao_remove',
				subSkill:{
					remove:{
						audio:'zhuitao',
						trigger:{
							source:'damageSource',
						},
						forced:true,
						filter:function(event,player){
							return player.getStorage('zhuitao').contains(event.player);
						},
						logTarget:'player',
						content:function(){
							player.unmarkAuto('zhuitao',[trigger.player]);
						},
					},
				},
			},
			//生鱼片
			olfengji:{
				audio:2,
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return !player.numFixed;
				},
				content:function(){
					'step 0'
					player.chooseTarget('丰积：请选择增加摸牌的目标','令自己本回合的额定摸牌数-1，且目标下回合的额定摸牌数+2。或者点击「取消」，令自己的额定摸牌数+1',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						if(target.hasJudge('lebu')||target.hasJudge('bingliang')) return 0;
						var att=get.attitude(player,target),dist=get.distance(player,target,'absolute');
						if(_status.event.goon){
							return att/dist;
						}
						if(game.countPlayer(function(current){
							return current!=player&&current!=target&&get.attitude(player,current)<0&&get.distance(player,current,'absolute')<dist;
						})>=target.hp) return 0;
						return att/dist;
					}).set('goon',player.skipList.contains('lebu'));
					'step 1'
					if(!player.storage.olfengji_draw) player.storage.olfengji_draw=0;
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'thunder');
						player.storage.olfengji_draw--;
						if(!target.storage.olfengji_draw) target.storage.olfengji_draw=0;
						target.storage.olfengji_draw+=2;
						target.addTempSkill('olfengji_draw',{player:'phaseAfter'});
						target.markSkill('olfengji_draw');
					}
					else{
						player.storage.olfengji_draw++;
					}
					player.addTempSkill('olfengji_draw');
					player.markSkill('olfengji_draw');
					'step 2'
					player.chooseTarget('丰积：请选择增加使用杀次数的目标','令自己本回合使用杀的次数上限-1，且目标下回合使用杀的次数上限+2。或者点击「取消」，令自己使用杀的次数上限+1',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						if(target.countMark('olfengji_draw')>0&&target.getCardUsable('sha')<2) return get.attitude(player,target);
						return 0;
					});
					'step 3'
					if(!player.storage.olfengji_sha) player.storage.olfengji_sha=0;
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'fire');
						player.storage.olfengji_sha--;
						if(!target.storage.olfengji_sha) target.storage.olfengji_sha=0;
						target.storage.olfengji_sha+=2;
						target.addTempSkill('olfengji_sha',{player:'phaseAfter'});
						target.markSkill('olfengji_sha');
					}
					else{
						player.storage.olfengji_sha++;
					}
					player.addTempSkill('olfengji_sha');
					player.markSkill('olfengji_sha');
				},
				subSkill:{
					sha:{
						charlotte:true,
						onremove:true,
						intro:{
							content:function(storage){
								return '使用【杀】的次数上限'+(storage>=0?'+':'')+storage;
							},
						},
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.storage.olfengji_sha;
							},
						},
					},
					draw:{
						charlotte:true,
						onremove:true,
						intro:{
							content:function(storage){
								return '额定摸牌数'+(storage>=0?'+':'')+storage;
							},
						},
						trigger:{player:'phaseDrawBegin2'},
						forced:true,
						filter:function(event,player){
							return !event.numFixed;
						},
						content:function(){
							trigger.num+=player.storage.olfengji_draw;
						},
					},
				},
			},
			//朱灵
			jixian:{
				audio:2,
				trigger:{player:'phaseDrawAfter'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&lib.skill.jixian.getNum(player,current)>0&&player.canUse('sha',current,false);
					})
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('jixian'),'视为对一名满足条件的角色使用一张【杀】',function(card,player,target){
						return target!=player&&lib.skill.jixian.getNum(player,target)>0&&player.canUse('sha',target,false);
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'sha'},player,player)*Math.sqrt(lib.skill.jixian.getNum(player,target));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('jixian',target);
						var num=lib.skill.jixian.getNum(player,target);
						player.useCard({name:'sha',isCard:true},target,false);
						if(num>0) player.draw(num);
					}
					else event.finish();
					'step 2'
					if(!player.hasHistory('sourceDamage',function(evt){
						var card=evt.card;
						if(!card||card.name!='sha') return false;
						var evtx=evt.getParent('useCard');
						return evtx.card==card&&evtx.getParent()==event;
					})) player.loseHp();
				},
				getNum:function(player,target){
					var num=0;
					if(target.isHealthy()) num++;
					if(target.getEquip(2)) num++;
					var countSkill=function(player){
						return player.getSkills(null,null,false).filter(function(skill){
							var info=get.info(skill);
							if(!info||info.charlotte) return false;
							if(info.zhuSkill) return player.hasZhuSkill(skill);
							return true;
						}).length;
					}
					if(countSkill(player)<countSkill(target)) num++;
					return num;
				},
			},
			//吾彦
			lanjiang:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				content:function(){
					'step 0'
					var ph=player.countCards('h');
					var targets=game.filterPlayer((current)=>(current==player||current.countCards('h')>=ph)).sortBySeat();
					player.line(targets,'green');
					event.targets=targets;
					event.num=0;
					'step 1'
					var target=targets[num];
					event.num++;
					if(target.isIn()){
						event.target=target;
						target.chooseBool('是否令'+(player==target?'自己':get.translation(player))+'摸一张牌？').set('ai',()=>get.attitude(_status.event.player,_status.event.getParent().player)>0);
					}
					else{
						event.goto(event.num<targets.length?1:3);
					}
					'step 2'
					if(result.bool){
						target.line(player);
						player.draw();
					}
					if(num<targets.length) event.goto(1);
					'step 3'
					player.chooseTarget('是否对一名手牌数等于自己的目标角色造成1点伤害？',function(card,player,target){
						return _status.event.getParent().targets.contains(target)&&target.countCards('h')==player.countCards('h');
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 4'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.damage();
					}
					else event.finish();
					'step 5'
					player.chooseTarget('是否令一名手牌数小于自己的目标角色摸一张牌？',function(card,player,target){
						return _status.event.getParent().targets.contains(target)&&target.countCards('h')<player.countCards('h');
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.attitude(player,target);
					});
					'step 6'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						target.draw();
					}
				},
			},
			//新SP张郃
			spolzhouxuan:{
				audio:2,
				trigger:{player:'phaseDiscardBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.chooseCard('h',get.prompt('spolzhouxuan'),[1,5],'将至多五张手牌置于武将牌上作为“旋”').set('ai',function(card){
						if(ui.selected.cards.length>=player.needsToDiscard()) return 6-get.value(card);
						return 100-get.useful(card);
					});
					'step 1'
					if(result.bool){
						var cards=result.cards;
						player.logSkill('spolzhouxuan');
						player.addToExpansion(cards,player,'give').gaintag.add('spolzhouxuan');
					}
				},
				marktext:'旋',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				group:['spolzhouxuan_use','spolzhouxuan_discard'],
				subSkill:{
					use:{
						audio:'spolzhouxuan',
						trigger:{player:'useCard'},
						forced:true,
						locked:false,
						filter:function(event,player){
							return player.getExpansions('spolzhouxuan').length>0;
						},
						content:function(){
							'step 0'
							var num=Math.min(5,player.isMaxHandcard(true)?1:player.getExpansions('spolzhouxuan').length);
							if(num>0) player.draw(num);
							'step 1'
							var cards=player.getExpansions('spolzhouxuan');
							if(cards.length) player.chooseButton(['选择移去一张“旋”',cards],true);
							else event.finish();
							'step 2'
							if(result.bool) player.loseToDiscardpile(result.links);
						},
					},
					discard:{
						trigger:{player:'phaseUseEnd'},
						forced:true,
						locked:false,
						filter:function(event,player){
							return player.getExpansions('spolzhouxuan').length>0;
						},
						content:function(){
							player.loseToDiscardpile(player.getExpansions('spolzhouxuan'));
						},
					},
				},
			},
			//董昭
			olxianlve:{
				audio:2,
				mode:['identity'],
				trigger:{
					global:'phaseZhunbeiBegin',
				},
				direct:true,
				filter:function(event,player){
					return event.player==game.zhu&&event.player.isZhu;
				},
				content:function(){
					'step 0'
					var list=lib.inpile.filter(function(i){
						return get.type2(i)=='trick';
					}).map(function(i){
						return ['锦囊','',i];
					});
					if(!list.length) event.finish();
					else player.chooseButton([get.prompt('olxianlve'),[list,'vcard']]).set('ai',function(button){
						switch(button.link[2]){
							case 'wuxie': return 0.6+Math.random();
							case 'wuzhong': case 'dongzhuxianji':return 0.5+Math.random();
							case 'guohe': case 'zhujinqiyuan': return 0.4+Math.random();
							default: return Math.random();
						}
					});
					'step 1'
					if(result.bool){
						var name=result.links[0][2];
						player.logSkill('olxianlve');
						player.storage.olxianlve=name;
						player.markSkill('olxianlve');
						game.log(player,'声明了','#g'+get.translation(name));
					}
				},
				intro:{content:'已声明【$】'},
				group:['olxianlve_use','olxianlve_count'],
				subSkill:{
					count:{
						trigger:{global:'useCard1'},
						silent:true,
						forced:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							return event.player!=player&&event.card.name==player.storage.olxianlve;
						},
						content:function(){
							if(!trigger.olxianlve_map) trigger.olxianlve_map={};
							trigger.olxianlve_map[player.playerid]=true;
						},
					},
					use:{
						audio:'olxianlve',
						trigger:{global:'useCardAfter'},
						forced:true,
						locked:false,
						usable:1,
						filter:function(event,player){
							return event.player!=player&&event.olxianlve_map&&event.olxianlve_map[player.playerid]&&event.card.name==player.storage.olxianlve;
						},
						content:function(){
							'step 0'
							player.draw(2);
							'step 1'
							var cards=result;
							if(get.itemtype(cards)!='cards'){
								event.goto(5);
								return;
							}
							var hs=player.getCards('h');
							cards=cards.filter(function(card){
								return hs.contains(card);
							});
							if(!cards.length){
								event.goto(5);
								return;
							}
							event.cards=cards;
							if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
							event.given_map={};
							event.ai_list=[];
							'step 2'
							player.chooseCardTarget({
								filterCard:function(card){
									return _status.event.cards.contains(card)&&!card.hasGaintag('olxianlve');
								},
								cards:cards,
								filterTarget:lib.filter.notMe,
								selectCard:[1,cards.length],
								prompt:'是否将获得的牌分配给其他角色？',
								ai1:function(card){
									if(!ui.selected.cards.length) return 1;
									return 0;
								},
								ai2:function(target){
									var player=_status.event.player,card=ui.selected.cards[0];
									var val=target.getUseValue(card);
									if(target.isPhaseUsing()&&get.type2(card)=='trick') val*=3;
									if(val>0) return val*get.attitude(player,target)*2;
									return get.value(card,target)*get.attitude(player,target);
								},
							});
							'step 3'
							if(result.bool){
								var res=result.cards,target=result.targets[0].playerid;
								player.addGaintag(res,'olxianlve');
								cards.removeArray(res);
								if(!event.given_map[target]) event.given_map[target]=[];
								event.given_map[target].addArray(res);
								if(result.targets[0].isPhaseUsing()&&get.type2(res[0])=='trick') event.ai_list.push(res[0].name);
								if(cards.length) event.goto(2);
							}
							'step 4'
							if(_status.connectMode){
								game.broadcastAll(function(){delete _status.noclearcountdown});
								game.stopCountChoose();
							}
							for(var i in event.given_map){
								var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
								player.line(source,'green');
								source.gain(event.given_map[i],player,'giveAuto');
							}
							event.next.sort(function(a,b){
								return lib.sort.seat(a.player,b.player);
							});
							'step 5'
							var list=lib.inpile.filter(function(i){
								return get.type2(i)=='trick';
							}).map(function(i){
								return ['锦囊','',i];
							});
							if(!list.length) event.finish();
							else player.chooseButton([get.prompt('olxianlve'),[list,'vcard']]).set('list',event.ai_list).set('ai',function(button){
								if(_status.event.list.contains(button.link[2])) return 2+Math.random();
								switch(button.link[2]){
									case 'wuxie': return 0.6+Math.random();
									case 'wuzhong': case 'dongzhuxianji':return 0.5+Math.random();
									case 'guohe': case 'zhujinqiyuan': return 0.4+Math.random();
									default: return Math.random();
								}
							});
							'step 6'
							if(result.bool){
								var name=result.links[0][2];
								player.storage.olxianlve=name;
								player.markSkill('olxianlve');
								game.log(player,'声明了','#g'+get.translation(name));
							}
						},
					},
				},
			},
			olzaowang:{
				mode:['identity'],
				audio:2,
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'water',
				filterTarget:true,
				content:function(){
					player.awakenSkill('olzaowang');
					target.gainMaxHp();
					target.recover();
					target.draw(3);
					target.addSkill('olzaowang2');
				},
				ai:{
					order:2,
					result:{
						target:function(player,target){
							if(player.hasUnknown(2)) return 0;
							if(target.identity=='zhong') return 20;
							if(target.identity=='zhu') return 10;
							if(target.identity=='nei') return 5;
							if(!target.hasFriend()) return 5;
							return 0;
						},
					},
				},
			},
			olzaowang2:{
				charlotte:true,
				trigger:{global:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return event.player.identity=='zhu'&&(player.identity=='zhong'||player.identity=='mingzhong');
				},
				logTarget:'player',
				skillAnimation:true,
				animationColor:'orange',
				content:function(){
					game.broadcastAll(function(player,target){
						target.identity=player.identity;
						if(player.identity=='mingzhong') game.zhong=target;
						delete target.isZhu;
						player.identity='zhu';
						game.zhu=player;
						player.showIdentity();
						target.showIdentity();
					},player,trigger.player);
					event.trigger('zhuUpdate');
				},
				mark:true,
				marktext:'王',
				intro:{content:'造了个王'},
				group:'olzaowang2_kill',
				subSkill:{
					kill:{
						trigger:{player:'die'},
						forced:true,
						forceDie:true,
						skillAnimation:true,
						animationColor:'wood',
						filter:function(event,player){
							return player.identity=='fan'&&event.source&&(event.source.identity=='zhu'||event.source.identity=='zhong'||event.source.identity=='mingzhong');
						},
						content:function(){
							game.over((game.me.identity=='zhu'||game.me.identity=='zhong'||game.me.identity=='mingzhong'));
						},
					},
				},
			},
			//冯方女
			zhuangshu:{
				audio:2,
				trigger:{global:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					return event.player.isIn()&&event.player.isEmpty(5)&&player.hasCard(lib.skill.zhuangshu.filterCard,'he');
				},
				filterCard:function(card){
					if(_status.connectMode) return true;
					var type=get.type2(card);
					return type=='basic'||type=='trick'||type=='equip';
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he',get.prompt('zhuangshu',trigger.player),'弃置一张牌，并根据此牌的类型，按如下关系将一张宝物牌置入该角色的装备区：{<基本牌,【琼梳】>，<锦囊牌，【犀梳】>，<装备牌，【金梳】>}。',function(card){
						var type=get.type2(card);
						return type=='basic'||type=='trick'||type=='equip';
					}).set('ai',function(card){
						var player=_status.event.player;
						if(get.attitude(player,_status.event.getTrigger().player)<4) return 0;
						var name='zhuangshu_'+get.type2(card,player);
						if(game.hasPlayer(function(current){
							return current.getEquip(name)&&get.attitude(player,current)>0;
						})) return 0;
						return 7-get.value(card);
					}).logSkill=['zhuangshu',trigger.player];
					'step 1'
					if(result.bool){
						var name='zhuangshu_'+get.type2(result.cards[0],result.cards[0].original=='h'?player:false);
						if(lib.card[name]&&trigger.player.isIn&&trigger.player.isEmpty(5)){
							var target=game.findPlayer(function(current){
								var equip=current.getEquip(5);
								return equip&&equip.name==name;
							});
							if(target){
								var card=target.getEquip(5);
								target.$give(card,trigger.player,false);
							}
							else{
								var card=game.createCard(name,lib.card[name].suit,12);
								trigger.player.$gain2(card,false);
							}
							game.delayx();
							trigger.player.equip(card);
						}
					}
				},
				group:'zhuangshu_gameStart',
				subSkill:{
					gameStart:{
						trigger:{global:'phaseBefore'},
						direct:true,
						filter:function(event,player){
							return game.phaseNumber==0;
						},
						content:function(){
							'step 0'
							player.chooseButton([get.prompt('zhuangshu'),[['zhuangshu_basic','zhuangshu_trick','zhuangshu_equip'],'vcard']]).set('filterButton',function(button){
								return !game.hasPlayer(function(current){
									return current.getEquip(button.link[2]);
								})
							});
							'step 1'
							if(result.bool){
								player.logSkill('zhuangshu');
								var name=result.links[0][2],card=game.createCard(name,lib.card[name].suit,12);
								player.$gain2(card,false);
								game.delayx();
								player.equip(card);
							}
						},
					},
				},
			},
			chuiti:{
				audio:2,
				usable:1,
				trigger:{global:'loseAfter'},
				direct:true,
				filter:function(event,player){
					if(event.type!='discard') return false;
					if(player!=event.player){
						var card=event.player.getEquip(5);
						if(!card||card.name.indexOf('zhuangshu_')!=0) return false;
					}
					for(var i of event.cards2){
						if(get.position(i,true)=='d'&&player.hasUseTarget(i)) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseButton(['垂涕：是否使用其中的一张牌？',trigger.cards2.filter(function(i){
						return (get.position(i,true)=='d'&&player.hasUseTarget(i));
					})]).set('ai',function(button){
						return _status.event.player.getUseValue(button.link);
					});
					'step 1'
					if(result.bool){
						player.$gain2(result.links[0],false);
						game.delayx();
						player.chooseUseTarget(true,result.links[0],false).logSkill='chuiti';
					}
					else player.storage.counttrigger.chuiti--;
				},
			},
			zhuangshu_basic:{
				equipSkill:true,
				trigger:{player:'damageBegin2'},
				direct:true,
				filter:function(event,player){
					var equip=player.getEquip('zhuangshu_basic');
					return event.num<=player.countCards('he',function(card){
						return card!=equip;
					})
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he',trigger.num,get.prompt('zhuangshu_basic'),'弃置'+get.cnNumber(trigger.num)+'张牌并防止伤害',function(card,player){
						return card!=player.getEquip('zhuangshu_basic');
					}).set('ai',function(card){
						var player=_status.event.player;
						return 4+player.getUseValue(card)-get.value(card,player);
					});
					'step 1'
					if(result.bool) trigger.cancel();
				},
				/*usable:1,
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					if(event.targets.length!=1) return false;
					if(event.card.name!='sha'&&get.type(event.card)!='trick') return false;
					var info=get.info(event.card);
					if(info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						var target=event.targets[0],hp=target.hp,hs=target.countCards('h'),card=event.card;
						return game.hasPlayer(function(current){
							return current!=target&&current!=player&&(current.hp==hp||current.countCards('h')==hs)&&lib.filter.targetEnabled2(card,player,current);
						});
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('zhuangshu_basic'),'为'+get.translation(trigger.card)+'增加一个满足条件的额外目标',function(card,player,current){
						var card=_status.event.getTrigger().card,target=_status.event.target,hp=target.hp,hs=target.countCards('h');
						return current!=target&&current!=player&&(current.hp==hp||current.countCards('h')==hs)&&lib.filter.targetEnabled2(card,player,current);
					}).set('target',trigger.targets[0]).set('ai',function(target){
						var card=_status.event.getTrigger().card,player=_status.event.player;
						return get.effect(target,card,player,player);
					});
					'step 1'
					if(result.bool){
						if(player!=event.player&&!player.isOnline()) game.delayx();
					}
					else{
						player.storage.counttrigger.zhuangshu_basic--;
						event.finish();
					}
					'step 2'
					var targets=result.targets;
					player.logSkill('zhuangshu_basic',targets);
					trigger.targets.addArray(targets);
					trigger.directHit.addArray(targets);
				},*/
			},
			zhuangshu_trick:{
				trigger:{player:['phaseJudgeBefore']},
				equipSkill:true,
				direct:true,
				content:function(){
					'step 0'
					player.chooseControl('判定阶段','弃牌阶段','cancel2').set('prompt',get.prompt('zhuangshu_trick')).set('prompt2','跳过本回合的判定阶段或弃牌阶段').set('ai',function(){
						var player=_status.event.player;
						if(player.hasCard(function(card){
							return get.effect(player,{
								name:card.viewAs||card.name,
								cards:[card],
							},player,player)<0;
						},'j')) return '判定阶段';
						return '弃牌阶段';
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('zhuangshu_trick');
						if(result.control=='判定阶段'){
							trigger.cancel();
							game.log(player,'跳过了','#y判定阶段');
						}
						else{
							player.skip('phaseDiscard');
							game.log(player,'跳过了','#g弃牌阶段');
						}
					}
				},
			},
			zhuangshu_equip:{
				trigger:{player:'phaseUseEnd'},
				forced:true,
				equipSkill:true,
				filter:function(event,player){
					return player.countCards('h')<Math.min(5,player.getHandcardLimit());
				},
				content:function(){
					player.drawTo(Math.min(5,player.getHandcardLimit()));
				},
			},
			//杨仪
			oljuanxia:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('oljuanxia'),lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player,list=[];
						for(var name of lib.inpile){
							var info=lib.card[name];
							if(!info||info.type!='trick'||info.notarget||(info.selectTarget&&info.selectTarget!=1)) continue;
							if(!player.canUse(name,target)) continue;
							var eff=get.effect(target,{name:name},player,player)
							if(eff>0) list.push(eff);
						}
						list.sort().reverse();
						if(!list.length) return 0;
						return list[0]+(list[1]||0);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('oljuanxia',target);
					}
					else event.finish();
					'step 2'
					var list=[];
					for(var name of lib.inpile){
						var info=lib.card[name];
						if(!info||info.type!='trick'||info.notarget||(info.selectTarget&&info.selectTarget!=1)) continue;
						if(!player.canUse(name,target)) continue;
						list.push(name);
					}
					if(!list.length) event.finish();
					else player.chooseButton(['视为对'+get.translation(target)+'使用至多两种牌',[list,'vcard']],[1,2],true).set('ai',function(button){
						var evt=_status.event.getParent();
						return get.effect(evt.target,{name:button.link[2]},evt.player,evt.player);
					});
					'step 3'
					if(result.bool){
						target.addTempSkill('oljuanxia_counter',{player:'phaseAfter'});
						if(!target.storage.oljuanxia_counter) target.storage.oljuanxia_counter={};
						if(!target.storage.oljuanxia_counter[player.playerid]) target.storage.oljuanxia_counter[player.playerid]=0;
						target.storage.oljuanxia_counter[player.playerid]+=result.links.length;
						event.links=result.links;
					}
					'step 4'
					if(target.isIn()){
						var name=event.links.shift()[2];
						player.useCard({name:name,isCard:true},target,false);
						if(event.links.length) event.redo();
					}
				},
				subSkill:{
					counter:{
						trigger:{player:'phaseEnd'},
						forced:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							var map1=(_status.connectMode?lib.playerOL:game.playerMap),map2=player.storage.oljuanxia_counter;
							if(!map2) return false;
							for(var i in map2){
								if(map1[i]&&map1[i].isIn()&&player.canUse('sha',map1[i],false)) return true;
							}
							return false;
						},
						logTarget:function(event,player){
							var list=[];
							var map1=(_status.connectMode?lib.playerOL:game.playerMap),map2=player.storage.oljuanxia_counter;
							if(!map2) return false;
							for(var i in map2){
								if(map1[i]&&map1[i].isIn()) list.push(map1[i]);
							}
							return list;
						},
						content:function(){
							'step 0'
							var list=[];
							var map1=(_status.connectMode?lib.playerOL:game.playerMap),map2=player.storage.oljuanxia_counter;
							if(!map2) return false;
							for(var i in map2){
								if(map1[i]&&map1[i].isIn()) list.push(map1[i]);
							}
							list.sortBySeat();
							event.num=0;
							event.targets=list;
							'step 1'
							var target=targets[num];
							event.target=target;
							if(target.isIn()&&player.canUse('sha',target,false)) player.chooseBool('狷狭：是否视为对'+get.translation(target)+'依次使用'+get.cnNumber(player.storage.oljuanxia_counter[target.playerid])+'张【杀】？').set('goon',get.effect(target,{name:'sha'},player,player)>0).set('ai',()=>_status.event.goon);
							'step 2'
							if(result.bool){
								for(var i=0;i<player.storage.oljuanxia_counter[target.playerid];i++){
									player.useCard({name:'sha',isCard:true},target,false);
								}
							}
							event.num++;
							if(event.num<targets.length) event.goto(1);
						},
					},
				},
			},
			oldingcuo:{
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				usable:1,
				content:function(){
					'step 0'
					player.draw(2);
					'step 1'
					if(Array.isArray(result)&&result.length>1){
						var color=get.color(result[0],player);
						for(var i=1;i<result.length;i++){
							if(get.color(result[i],player)!=color){
								if(player.countCards('h')) player.chooseToDiscard('h',true);
								break;
							}
						}
					}
				},
			},
			//左棻
			zhaosong:{
				trigger:{global:'phaseDrawAfter'},
				logTarget:'player',
				filter:function(event,player){
					if(player==event.player||!event.player.countCards('h')) return false;
					var types=['basic','trick','equip'];
					for(var i of types){
						if(event.player.hasMark('zhaosong_'+i)) return false;
					}
					return true;
				},
				prompt2:'令其交给你一张手牌，并根据类型获得对应的标记',
				content:function(){
					'step 0'
					event.target=trigger.player;
					event.target.chooseCard('h',true,get.translation(player)+'发动了【诏颂】；请交给其一张手牌');
					'step 1'
					if(result.bool){
						var card=result.cards[0];
						player.gain(card,target,'give');
						var type=get.type2(card,target);
						if(lib.skill['zhaosong_'+type]){
							target.addSkill('zhaosong_'+type);
							target.addMark('zhaosong_'+type);
						}
					}
				},
				subSkill:{
					basic:{
						marktext:'颂',
						intro:{
							name:'诏颂(颂)',
							name2:'颂',
							content:'当你使用【杀】选择唯一目标时，你可移去“颂”，并为此【杀】增加至多两个目标。',
						},
						trigger:{player:'useCard2'},
						direct:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return player.hasMark('zhaosong_basic')&&event.card.name=='sha'&&
							event.targets.length==1&&game.hasPlayer(function(current){
								return current!=player&&current!=event.targets[0]&&lib.filter.targetEnabled2(event.card,player,current);
							});
						},
						content:function(){
							'step 0'
							player.chooseTarget([1,2],'是否弃置“颂”标记？','为'+get.translation(trigger.card)+'增加至多两个目标',function(card,player,target){
								var evt=_status.event.getTrigger();
								return target!=player&&target!=evt.targets[0]&&lib.filter.targetEnabled2(evt.card,player,target);
							}).set('ai',function(target){
								var evt=_status.event.getTrigger();
								return get.effect(target,evt.card,evt.player,evt.player);
							});
							'step 1'
							if(result.bool){
								if(player!=event.player&&!player.isOnline()) game.delayx();
								//player.addTempSkill('zhaosong_shaloss');
							}
							else event.finish();
							'step 2'
							var targets=result.targets;
							player.logSkill('zhaosong_basic',targets);
							player.removeMark('zhaosong_basic',1);
							player.removeSkill('zhaosong_basic');
							trigger.targets.addArray(targets);
							trigger.zhaosong_basic=true;
						},
					},/*
					shaloss:{
						trigger:{player:'useCardAfter'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							if(!event.zhaosong_basic) return false;
							var num=0;
							player.getHistory('sourceDamage',function(evt){
								if(evt.card==event.card) num+=evt.num;
							});
							return num<2;
						},
						content:function(){
							player.loseHp();
						},
					},*/
					trick:{
						marktext:'诔',
						intro:{
							name:'诏颂(诔)',
							name2:'诔',
							content:'当你进入濒死状态时，你可移去“诔”，然后将体力回复至1点并摸一张牌。',
						},
						trigger:{player:'dying'},
						prompt:'是否弃置“诔”标记？',
						prompt2:'减1点体力上限，然后回复体力至1点并摸一张牌。',
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return player.hasMark('zhaosong_trick')&&player.hp<1;
						},
						check:function(event,player){
							if(player.maxHp<2||player.countCards('h',function(card){
								var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
								if(mod2!='unchanged') return mod2;
								var mod=game.checkMod(card,player,event.player,'unchanged','cardSavable',player);
								if(mod!='unchanged') return mod;
								var savable=get.info(card).savable;
								if(typeof savable=='function') savable=savable(card,player,event.player);
								return savable;
							})>=1+event.num-event.player.hp) return false;
							return true;
						},
						content:function(){
							player.removeMark('zhaosong_trick',1);
							player.removeSkill('zhaosong_trick');
							//player.loseMaxHp();
							if(player.hp<1) player.recover(1-player.hp);
							player.draw();
						},
					},
					equip:{
						marktext:'赋',
						intro:{
							name:'诏颂(赋)',
							name2:'赋',
							content:'出牌阶段开始时，你可移去“赋”并弃置一名角色区域内的至多两张牌，然后可以令其摸一张牌。',
						},
						trigger:{player:'phaseUseBegin'},
						direct:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return player.hasMark('zhaosong_equip')&&game.hasPlayer(function(current){
								return current.hasCard(function(card){
									return lib.filter.canBeDiscarded(card,player,current);
								},'hej');
							});
						},
						content:function(){
							'step 0'
							player.chooseTarget('是否弃置“赋”标记？','弃置一名角色区域内的至多两张牌，然后可以令其摸一张牌',function(card,player,current){
								return current.hasCard(function(card){
									return lib.filter.canBeDiscarded(card,player,current);
								},'hej');
							}).set('ai',function(target){
								var player=_status.event.player,att=get.attitude(player,target)>0?2:1;
								return get.effect(target,{name:'guohe_copy'},player,player)*att;
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								event.target=target;
								player.logSkill('zhaosong_equip',target);
								player.removeMark('zhaosong_equip',1);
								player.removeSkill('zhaosong_equip');
								player.discardPlayerCard(target,true,'hej',[1,2]);
							}
							else event.finish();
							'step 2'
							if(target.isIn()){
								player.chooseBool('是否令'+get.translation(target)+'摸一张牌？').set('ai',function(){
									var evt=_status.event.getParent();
									return get.attitude(evt.player,evt.target)>0;
								});
							}
							else event.finish();
							'step 3'
							if(result.bool) target.draw();
						},
					},
				},
			},
			lisi:{
				audio:2,
				trigger:{player:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					if(player==_status.currentPhase||!event.cards.filterInD().length) return false;
					var hs=player.countCards('h');
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')<=hs;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('lisi'),'将'+get.translation(trigger.cards.filterInD())+'交给一名手牌数不大于你的其他角色',function(card,player,target){
						return target!=player&&target.countCards('h')<=player.countCards('h');
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('lisi',target);
						target.gain(trigger.cards.filterInD(),'gain2');
					}
				},
			},
			//王荣
			olfengzi:{
				audio:2,
				trigger:{player:'useCard'},
				direct:true,
				usable:1,
				filter:function(event,player){
					if(event.olfengzi_buff||!event.targets.length||!player.isPhaseUsing()||player.hasSkill('olfengzi_buff')) return false;
					var type=get.type(event.card,false);
					if(type!='basic'&&type!='trick') return false;
					return player.hasCard(function(i){
						if(_status.connectMode) return true;
						return get.type2(i,player)==type;
					},'h');
				},
				content:function(){
					'step 0'
					if(player!=game.me&&!player.isUnderControl()&&!player.isOnline()) game.delayx();
					var type=get.type(trigger.card,false);
					player.chooseToDiscard('h',get.prompt('olfengzi'),'弃置一张'+get.translation(type)+'牌，令'+get.translation(trigger.card)+'结算两次',function(card,player){
						return get.type2(card,player)==_status.event.type;
					}).set('type',type).set('ai',()=>-1).logSkill='olfengzi';
					'step 1'
					if(result.bool){
						player.addTempSkill('olfengzi_buff','phaseUseAfter');
						trigger.olfengzi_buff=player;
					}
					else player.storage.counttrigger.olfengzi--;
				},
				subSkill:{
					buff:{
						trigger:{global:'useCardToTargeted'},
						forced:true,
						charlotte:true,
						popup:false,
						lastDo:true,
						filter:function(event,player){
							return (event.parent.olfengzi_buff==player&&event.targets.length==event.parent.triggeredTargets4.length);
						},
						content:function(){
							trigger.getParent().targets=trigger.getParent().targets.concat(trigger.targets);
							trigger.getParent().triggeredTargets4=trigger.getParent().triggeredTargets4.concat(trigger.targets);
						},
						onremove:function(player){
							delete player.storage.counttrigger.olfengji;
						},
					},
				},
			},
			oljizhan:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					'step 0'
					trigger.changeToZero();
					var card=get.cards()[0];
					game.cardsGotoOrdering(card);
					event.cards=[card];
					event.num=get.number(card,false);
					player.showCards(card,get.translation(player)+'发动了【吉占】');
					'step 1'
					var str=get.strNumber(num);
					player.chooseControl('大于'+str,'小于'+str,'cancel2').set('prompt','吉占：猜测下一张牌的点数').set('choice',num<7?0:1).set('ai',()=>_status.event.choice);
					'step 2'
					var card=get.cards()[0];
					game.cardsGotoOrdering(card);
					event.cards.push(card);
					var num=get.number(card,false);
					if(num>event.num&&result.index==0||num<event.num&&result.index==1){
						event.num=num;
						event.goto(1);
					}
					player.showCards(card);
					'step 3'
					player.gain(cards,'gain2');
				},
			},
			olfusong:{
				audio:2,
				forceDie:true,
				trigger:{player:'die'},
				skillAnimation:true,
				animationColor:'gray',
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.maxHp>player.maxHp;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('olfusong'),'令一名体力上限大于你的其他角色获得〖丰姿〗或〖吉占〗',function(card,player,target){
						return target.maxHp>player.maxHp;
					}).set('forceDie',true).set('ai',(target)=>get.attitude(_status.event.player,target));
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('olfusong',target);
						target.chooseControl('olfengzi','oljizhan').set('prompt','令'+get.translation(target)+'获得其中一个技能').set('ai',()=>(Math.random()>0.5?0:1));
					}
					else event.finish();
					'step 2'
					target.addSkillLog(result.control);
				},
			},
			//邓芝
			olxiuhao:{
				audio:2,
				trigger:{
					player:'damageBegin4',
					source:'damageBegin2',
				},
				usable:1,
				filter:function(event,player){
					return event.source&&event.source.isIn()&&event.source!=event.player;
				},
				logTarget:function(event,player){
					return player==event.player?event.source:event.player;
				},
				check:function(event,player){
					_status.olxiuhao_judging=true;
					var bool=false;
					if(player==event.source){
						if(get.attitude(player,event.player)>0) bool=true;
						if(get.damageEffect(event.player,player,player,event.nature)<=0) bool=true;
					}
					else{
						if(get.attitude(player,event.source)>0) bool=true;
						if(get.damageEffect(player,event.source,player,event.nature)<0){
							if(event.source.hasSkillTag('nogain')) bool=true;
							if(event.num>=player.hp+player.countCards('hs',{name:['tao','jiu']})&&(!player.hasFriend()||player==get.zhu(player))) bool=true;
						}
					}
					delete _status.olxiuhao_judging;
					return bool;
				},
				content:function(){
					trigger.cancel();
					trigger.source.draw(2);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(!_status.olxiuhao_judging&&get.tag(card,'damage')&&get.attitude(target,player)>0&&(!target.storage.counttrigger||!target.storage.counttrigger.olxiuhao)) return [0,0.5,0,0.5];
						},
						player:function(card,player,target){
							if(!_status.olxiuhao_judging&&get.tag(card,'damage')&&get.attitude(player,target)>0&&(!player.storage.counttrigger||!player.storage.counttrigger.olxiuhao)) return [0,0.5,0,0.5];
						},
					},
				},
			},
			olsujian:{
				trigger:{player:'phaseDiscardBefore'},
				forced:true,
				content:function(){
					'step 0'
					trigger.cancel();
					var cards=lib.skill.olsujian.update(player);
					if(!cards.length) event.finish();
					else{
						event.cards=cards;
						var str=get.translation(cards);
						player.chooseControl().set('choiceList',[
							'将'+str+'分配给任意名其他角色',
							'弃置'+str+'并弃置一名其他角色至多等量的牌',
						]).set('ai',function(){
							var cards=_status.event.getParent().cards,player=_status.event.player;
							if(!game.hasPlayer(function(current){
								return get.attitude
							})) return 1;
							if(game.hasPlayer(function(current){
								var att=get.attitude(player,current);
								return att!=0&&current.countDiscardableCards(player,'he',function(i){
									if(att>0) return get.value(i,current)>=4;
									return get.value(i,current)<=0;
								})>=cards.length&&get.effect(current,{name:'guohe_copy2'},player,player)>0;
							})) return 1;
							return 0;
						});
					}
					'step 1'
					if(result.index==1){
						cards=event.cards.filter(function(i){
							return lib.filter.cardDiscardable(i,player,'olsujian');
						});
						if(cards.length){
							event.num=cards.length;
							player.discard(cards);
						}
						else event.finish();
					}
					else event.goto(4);
					'step 2'
					if(game.hasPlayer(function(current){
						return current!=player&&current.countDiscardableCards(player,'he')>0;
					})){
						player.chooseTarget(true,'弃置一名其他角色的至多'+get.cnNumber(num)+'张牌',function(card,player,current){
							return current!=player&&current.countDiscardableCards(player,'he')>0;
						}).set('ai',function(current){
							var att=get.attitude(player,current);
							if(current.countDiscardableCards(player,'he',function(i){
								if(att>0) return get.value(i,current)>=4;
								return get.value(i,current)<=0;
							})>=num) return 4*get.effect(current,{name:'guohe_copy2'},player,player);
							return get.effect(current,{name:'guohe_copy2'},player,player);
						});
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.discardPlayerCard(target,true,[1,num]);
					}
					event.finish();
					'step 4'
					if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
					event.given_map={};
					'step 5'
					player.chooseCardTarget({
						filterCard:function(card){
							return card.hasGaintag('olsujian');
						},
						filterTarget:lib.filter.notMe,
						selectCard:[1,cards.length],
						forced:true,
						prompt:'请选择要分配的卡牌和目标',
						ai1:function(card){
							if(!ui.selected.cards.length) return 1;
							return 0;
						},
						ai2:function(target){
							var player=_status.event.player,card=ui.selected.cards[0];
							var val=target.getUseValue(card);
							if(val>0) return val*get.attitude(player,target)*2;
							return get.value(card,target)*get.attitude(player,target);
						},
					});
					'step 6'
					if(result.bool){
						var res=result.cards,target=result.targets[0].playerid;
						player.removeGaintag('olsujian',res);
						player.addGaintag(res,'olsujian_given');
						cards.removeArray(res);
						if(!event.given_map[target]) event.given_map[target]=[];
						event.given_map[target].addArray(res);
						if(cards.length) event.goto(5);
					}
					else event.finish();
					'step 7'
					if(_status.connectMode){
						game.broadcastAll(function(){delete _status.noclearcountdown});
						game.stopCountChoose();
					}
					for(var i in event.given_map){
						var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
						player.line(source,'green');
						source.gain(event.given_map[i],player,'giveAuto');
					}
					event.next.sort(function(a,b){
						return lib.sort.seat(a.player,b.player);
					});
				},
				update:function(player){
					player.removeGaintag('olsujian');
					var hs=player.getCards('h');
					player.getHistory('gain',function(evt){
						hs.removeArray(evt.cards);
					});
					if(hs.length) player.addGaintag(hs,'olsujian');
					return hs;
				},
				group:'olsujian_sync',
				subSkill:{
					sync:{
						trigger:{player:['phaseBeginStart','gainBegin']},
						forced:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							if(event.name=='gain') return (player==_status.currentPhase)&&(event.getParent('olsujian').player!=player);
							return true;
						},
						content:function(){
							lib.skill.olsujian.update(player);
						},
					},
				},
			},
			//卞夫人
			fuwei:{
				audio:'wanwei',
				trigger:{
					player:'loseAfter',
					global:'gainAfter',
				},
				filter:function(event,player){
					var evt=event;
					if(event.name=='lose'){
						if(event.type!='discard') return false;
						evt=event.getParent();
					}
					if(evt[event.name=='gain'?'bySelf':'notBySelf']!=true) return false;
					var evtx=event.getl(player);
					return evtx&&evtx.cards2&&evtx.cards2.length>0;
				},
				prompt2:function(event,player){
					var evt=event.getl(player),origins=evt.cards2.map(function(i){
						return get.name(i,evt.hs.contains(i)?player:false);
					});
					return '从牌堆中获得'+get.translation(origins)+'；若没有则改为摸一张牌';
				},
				usable:1,
				content:function(){
					var num=0,cards=[],evt=trigger.getl(player),origins=evt.cards2.map(function(i){
						return get.name(i,evt.hs.contains(i)?player:false);
					});
					for(var i of origins){
						var card=get.cardPile2(function(card){
							return card.name==i&&!cards.contains(card);
						});
						if(card) cards.push(card);
						else num++;
					}
					if(cards.length) player.gain(cards,'gain2');
					if(num) player.draw(num);
				},
			},
			yuejian:{
				audio:2,
				usable:2,
				trigger:{global:'useCardAfter'},
				filter:function(event,player){
					return player!=event.player&&event.targets&&event.targets.contains(player)&&player.countCards('h')>0;
				},
				prompt2:function(event,player){
					var suit=get.suit(event.card),hs=player.getCards('h'),cards=event.cards.filterInD();
					if(!lib.suit.contains(suit)||!cards.length){
						return '展示所有手牌，然后无事发生';
					}
					for(var i of hs){
						if(get.suit(i)==suit){
							return '展示所有手牌，然后无事发生';
						}
					}
					return '展示所有手牌，然后<span class="yellowtext">获得'+get.translation(cards)+'</span>';
				},
				check:function(event,player){
					var suit=get.suit(event.card),hs=player.getCards('h'),cards=event.cards.filterInD();
					if(!lib.suit.contains(suit)||!cards.length){
						return false;
					}
					for(var i of hs){
						if(get.suit(i)==suit){
							return false;
						}
					}
					return true;
				},
				content:function(){
					'step 0'
					player.showHandcards(get.translation(player)+'发动了【约俭】');
					var suit=get.suit(trigger.card),hs=player.getCards('h');
					if(!lib.suit.contains(suit)){event.finish();return;}
					for(var i of hs){
						if(get.suit(i)==suit){
							event.finish();
							return;
						}
					}
					'step 1'
					var cards=trigger.cards.filterInD();
					if(cards.length) player.gain(cards,'gain2');
				},
			},
			//杜袭
			quxi:{
				audio:2,
				trigger:{player:'phaseUseEnd'},
				direct:true,
				limited:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					if(player.isTurnedOver()) return false;
					var list=game.filterPlayer((target)=>target!=player&&!target.hasMark('quxi_gain')&&!target.hasMark('quxi_lose'));
					if(list.length<2) return false;
					var nf=list[0].countCards('h');
					for(var i=1;i<list.length;i++){
						if(list[i].countCards('h')!=nf) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseTarget(2,get.prompt('quxi'),'选择两名手牌数不同的其他角色。你将翻至背面，令这两名角色中手牌数较少的角色获得另一名角色的一张牌并获得一枚“丰”，另一名角色获得一枚“歉”。',function(card,player,target){
						if(player==target||target.hasMark('quxi_gain')||target.hasMark('quxi_lose')) return false;
						if(!ui.selected.targets.length) return true;
						return target.countCards('h')!=ui.selected.targets[0].countCards('h');
					}).set('complexTarget',true).set('ai',function(target){
						if(!ui.selected.targets.length){
						 var player=_status.event.player,hs=target.countCards('h');
						 if(game.hasPlayer(function(current){
						 	return current!=player&&current!=target&&current.countCards('h')>hs&&!current.hasMark('quxi_gain')&&!current.hasMark('quxi_lose');
						 })) return get.attitude(player,target)/(Math.sqrt(1+target.countCards('h')));
						 return 0;
						}
						if(target.countCards('h')>ui.selected.targets[0].countCards('h')) return -get.attitude(_status.event.player,target);
						return 0;
					});
					'step 1'
					if(result.bool){
						player.logSkill('quxi',result.targets);
						player.awakenSkill('quxi');
						player.skip('phaseDiscard');
						if(result.targets[0].countCards('h')>result.targets[1].countCards('h')) result.targets.reverse();
						event.gainner=result.targets[0];
						event.giver=result.targets[1];
						player.turnOver();
					}
					else event.finish();
					'step 2'
					event.gainner.gainPlayerCard(event.giver,true,'he');
					'step 3'
					player.addSkill('quxi_effect');
					event.gainner.addMark('quxi_gain',1);
					event.giver.addMark('quxi_lose',1);
				},
				subSkill:{
					effect:{
						global:'quxi_gainlose',
						trigger:{global:['roundStart','die']},
						charlotte:true,
						direct:true,
						filter:function(event,player){
							if(event.name=='die') return event.player.countMark('quxi_gain')>0||event.player.countMark('quxi_lose')>0;
							return game.hasPlayer(function(target){
								return target!=player&&(target.countMark('quxi_gain')>0||target.countMark('quxi_lose')>0)
							});
						},
						content:function(){
							'step 0'
							if(trigger.name=='die'){
								var gain=trigger.player.countMark('quxi_gain'),lose=trigger.player.countMark('quxi_lose');
								player.chooseTarget('是否令一名角色获得'+get.translation(trigger.player)+'的“'+(gain&&lose?'丰”和“歉':(gain?'丰':'歉'))+'”标记？',function(card,player,target){
									return !target.hasMark('quxi_gain')&&!target.hasMark('quxi_lose');
								}).set('goon',gain-lose).set('ai',function(target){
									var evt=_status.event;
									return evt.goon*get.attitude(evt.player,target);
								});
							}
							else event.goto(2);
							'step 1'
							if(result.bool){
								var targets=result.targets;
								if(targets.length<2) targets.unshift(trigger.player);
								player.logSkill('quxi_effect',targets,false);
								player.line2(targets);
								var gain=targets[0].countMark('quxi_gain'),lose=targets[0].countMark('quxi_lose');
								if(gain){
									targets[0].removeMark('quxi_gain',gain);
									targets[1].addMark('quxi_gain',gain);
								}
								if(lose){
									targets[0].removeMark('quxi_lose',lose);
									targets[1].addMark('quxi_lose',lose);
								}
								game.delayx();
								event.finish();
							}
							'step 2'
							if(game.hasPlayer(function(target){
								return target.countMark('quxi_gain')>0;
							})) player.chooseTarget(2,'是否转移“丰”标记？',function(card,player,target){
								if(ui.selected.targets.length) return (!target.hasMark('quxi_gain')&&!target.hasMark('quxi_lose'));
								return target.countMark('quxi_gain')>0;
							}).set('complexTarget',true).set('complexSelect',true).set('targetprompt',['移走标记','获得标记']).set('ai',function(target){
								var player=_status.event.player;
								if(!ui.selected.targets.length){
									return -get.attitude(player,target);
								}
								return get.attitude(player,target);
							});
							else event.goto(4);
							'step 3'
							if(result.bool){
								var targets=result.targets;
								player.logSkill('quxi_effect',targets,false);
								player.line2(targets);
								var gain=targets[0].countMark('quxi_gain');
								if(gain){
									targets[0].removeMark('quxi_gain',gain);
									targets[1].addMark('quxi_gain',gain);
								}
								game.delayx();
							}
							'step 4'
							if(game.hasPlayer(function(target){
								return target.countMark('quxi_lose')>0;
							})) player.chooseTarget(2,'是否转移“歉”标记？',function(card,player,target){
								if(ui.selected.targets.length) return (!target.hasMark('quxi_gain')&&!target.hasMark('quxi_lose'));
								return target.countMark('quxi_lose')>0;
							}).set('complexTarget',true).set('complexSelect',true).set('targetprompt',['移走标记','获得标记']).set('ai',function(target){
								var player=_status.event.player;
								if(!ui.selected.targets.length){
									return get.attitude(player,target);
								}
								return -get.attitude(player,target);
							});
							else event.finish();
							'step 5'
							if(result.bool){
								var targets=result.targets;
								player.logSkill('quxi_effect',targets,false);
								player.line2(targets);
								var gain=targets[0].countMark('quxi_lose');
								if(gain){
									targets[0].removeMark('quxi_lose',gain);
									targets[1].addMark('quxi_lose',gain);
								}
								game.delayx();
							}
						},
					},
					gainlose:{
						trigger:{player:'phaseDrawBegin'},
						forced:true,
						filter:function(event,player){
							if(event.numFixed) return false;
							return player.countMark('quxi_gain')-player.countMark('quxi_lose')!=0;
						},
						content:function(){
							trigger.num+=(player.countMark('quxi_gain')-player.countMark('quxi_lose'));
						},
					},
					gain:{
						marktext:'丰',
						intro:{
							name:'驱徙(丰)',
							name2:'丰',
							content:'mark',
						},
					},
					lose:{
						marktext:'歉',
						intro:{
							name:'驱徙(歉)',
							name2:'歉',
							content:'mark',
						},
					},
				},
			},
			bixiong:{
				trigger:{player:'loseAfter'},
				forced:true,
				filter:function(event,player){
					return event.type=='discard'&&event.getParent('phaseDiscard').player==player&&event.hs&&event.hs.length>0;
				},
				content:function(){
					var cards=[];
					for(var i of trigger.hs) cards.add(get.suit(i,player));
					player.addTempSkill('bixiong2',{player:'phaseBegin'});
					player.markAuto('bixiong2',cards);
				},
			},
			bixiong2:{
				onremove:true,
				mod:{
					targetEnabled:function(card,player,target){
						if(target.getStorage('bixiong2').contains(get.suit(card))) return false;
					},
				},
				intro:{content:'不能成为$牌的目标'},
			},
			//高干
			juguan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return event.filterCard({
						name:'sha',
					},player,event)||event.filterCard({
						name:'juedou',
					},player,event);
				},
				chooseButton:{
					dialog:function(){
						return ui.create.dialog('拒关',[['sha','juedou'],'vcard']);
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						return evt.filterCard({
							name:button.link[2],
						},player,evt);
					},
					check:function(button){
						return _status.event.player.getUseValue({
							name:button.link[2],
						})*(button.link[2]=='juedou'?3:1);
					},
					backup:function(links){
						return {
							audio:'juguan',
							viewAs:{name:links[0][2]},
							filterCard:true,
							check:function(card){
								return 6-get.value(card);
							},
							position:'h',
							onuse:function(result,player){
								player.addTempSkill('juguan_effect');
							},
						}
					},
					prompt:function(links){
						return '将一张手牌当做'+get.translation(links[0][2])+'使用';
					},
				},
				ai:{
					order:function(item,player){
						return Math.max(get.order({name:'sha'}),get.order({name:'juedou'}))+0.2;
					},
					result:{player:1},
				},
				subSkill:{
					effect:{
						trigger:{global:'damage'},
						forced:true,
						charlotte:true,
						firstDo:true,
						silent:true,
						popup:false,
						filter:function(event,player){
							var evt=event.getParent('useCard');
							return event.card&&evt&&event.card==evt.card&&evt.skill=='juguan_backup'&&evt.player==player;
						},
						content:function(){
							player.addSkill('juguan_draw');
							player.markAuto('juguan_draw',[trigger.player]);
						},
					},
					draw:{
						audio:'juguan',
						trigger:{player:'phaseDrawBegin'},
						forced:true,
						charlotte:true,
						onremove:true,
						content:function(){
							player.removeSkill('juguan_draw');
							if(!trigger.numFixed) trigger.num+=2;
						},
						group:'juguan_clear',
						intro:{
							content:'若没有受到$的伤害，则下个摸牌阶段多摸两张牌',
						},
					},
					clear:{
						trigger:{player:'damage'},
						forced:true,
						charlotte:true,
						firstDo:true,
						silent:true,
						popup:false,
						filter:function(event,player){
						 return player.storage.juguan_draw&&player.storage.juguan_draw.contains(event.source);
						},
						content:function(){
							player.unmarkAuto('juguan_draw',[trigger.source]);
							if(!player.storage.juguan_draw||!player.storage.juguan_draw.length) player.removeSkill('juguan_draw');
						},
					},
				},
			},
			//OL鲍三娘
			olwuniang:{
				audio:'xinfu_wuniang',
				trigger:{player:'useCardAfter'},
				usable:1,
				filter:function(event,player){
					return event.card.name=='sha'&&event.targets.length==1&&event.targets[0].isAlive();
				},
				logTarget:'targets',
				content:function(){
					'step 0'
					var target=trigger.targets[0];
					target.chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},'武娘：是否对'+get.translation(player)+'使用一张杀？').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set('sourcex',player);
					'step 1'
					player.addTempSkill('olwuniang2');
					player.addMark('olwuniang2',1,false);
					player.draw();
				},
			},
			olwuniang2:{
				onremove:true,
				charlotte:true,
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+player.countMark('olwuniang2');
					},
				},
			},
			olxushen:{
				derivation:'olzhennan',
				audio:'xinfu_xushen',
				trigger:{player:'dying'},
				limited:true,
				skillAnimation:true,
				animationColor:'fire',
				filter:function(event,player){
					return player.hp<1;
				},
				content:function(){
					'step 0'
					player.awakenSkill('olxushen');
					player.addSkill('olzhennan');
					player.recover(1-player.hp);
					'step 1'
					if(!player.isDying()&&!game.hasPlayer(function(current){
						return current.name1=='guansuo'||current.name2=='guansuo';
					})){
						player.chooseTarget(function(card,player,current){
							return current!=player&&current.hasSex('male');
						},'许身：是否令一名其他男性角色选择是否将其武将牌替换为“关索”？').set('ai',function(target){
							return get.attitude(_status.event.player,target)-4;
						});
					}
					else event.finish();
					'step 2'
					if(!result.bool){
						event.finish();
						return;
					}
					var target=result.targets[0];
					event.target=target;
					player.line(target,'fire');
					target.chooseBool('许身：是否将自己的一张武将牌替换为“关索”并令'+get.translation(player)+'？');
					'step 3'
					if(result.bool){
						if(target.name2!=undefined){
							target.chooseControl(target.name1,target.name2).set('prompt','请选择要更换的武将牌');
						}
						else event._result={control:target.name1};
					}
					else event.finish();
					'step 4'
					target.reinit(result.control,'guansuo');
					if(_status.characterlist){
						_status.characterlist.add(result.control);
						_status.characterlist.remove('guansuo');
					}
				},
			},
			olzhennan:{
				audio:'xinfu_zhennan',
				enable:'phaseUse',
				usable:1,
				viewAs:{name:'nanman'},
				filterCard:true,
				selectCard:function(){
					if(ui.selected.targets.length) return [ui.selected.targets.length,Math.min(ui.selected.targets.length+1,game.players.length-1)];
					return [1,Infinity];
				},
				check:function(card){
					var player=_status.event.player;
					if(game.countPlayer(function(current){
						return current!=player&&player.canUse('nanman',current)&&get.effect(current,{name:'nanman'},player,player)>0;
					})<=ui.selected.cards.length) return 0;
					return 6-get.value(card);
				},
				selectTarget:function(){
					return ui.selected.cards.length;
				},
				ai:{
					order:2,
				},
				group:'olzhennan2',
			},
			olzhennan2:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				locked:false,
				audio:'olzhennan',
				filter:function(event,player){
					return event.card.name=='nanman';
				},
				content:function(){
					trigger.cancel();
				},
			},
			//黄承彦
			guanxu:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer((current)=>lib.skill.guanxu.filterTarget(null,player,current));
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var cards=get.cards(5);
					for(var i=cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cards[i],ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
					var hs=target.getCards('h');
					var dialog=['观虚：选择要操作的牌','<div class="text center">'+get.translation(target)+'的手牌</div>',hs,'<div class="text center">牌堆顶</div>',cards];
					player.chooseButton(dialog,2).set('filterButton',function(button){
						if(ui.selected.buttons.length) return get.position(button.link)!=get.position(ui.selected.buttons[0].link);
						return true;
					}).set('cards1',hs).set('cards2',cards).set('ai',function(button){
						var card=button.link,cards1=_status.event.cards1.slice(0);
						var cards2=_status.event.cards2.slice(0),target=_status.event.getParent().target;
						if(!ui.selected.buttons.length){
							if(!cards1.contains(card)) return 0;
							cards1.remove(card);
							var suits=cards2.map(function(i){
								return get.suit(i,target);
							});
							for(var i of lib.suit){
								var num=cards1.filter(function(c){
									return get.suit(c,target)==i;
								}).length;
								if(num>2||(num>1&&suits.contains(i))) return 20+get.value(card);
							}
							return get.value(card);
						}
						cards1.remove(ui.selected.buttons[0].link);
						cards1.push(card);
						for(var i of lib.suit){
							if(cards1.filter(function(c){
								return get.suit(c,target)==i;
							}).length>2) return 20-get.value(card);
							return get.value(ui.selected.buttons[0].link)-get.value(card);
						}
					});
					'step 1'
					if(result.bool){
						var cards=result.links;
						if(get.position(cards[0])!='h') cards.reverse();
						var next=target.lose(cards[0],ui.cardPile);
						next.insert_index_card=cards[1];
						next.insert_index=function(event){
							return event.insert_index_card;
						}
						target.gain(cards[1],'draw');
					}
					else event.finish();
					'step 2'
					game.updateRoundNumber();
					var suits=[],map={},hs=target.getCards('h');
					if(hs.length){
						for(var i of hs){
							if(!lib.filter.canBeDiscarded(i,player,target,'guanxu')) continue;
							var suit=get.suit(i,target);
							if(!map[suit]) map[suit]=1;
							else map[suit]++;
							if(map[suit]>2) suits.add(suit);
						}
						var next=player.discardPlayerCard(target,3,'visible','h');
						next.set('suits',suits);
						next.set('filterButton',function(button){
							var suit=get.suit(button.link);
							if(!ui.selected.buttons.length) return _status.event.suits.contains(suit);
							return suit==get.suit(ui.selected.buttons[0].link)
						});
						if(suits.length) next.set('forced',true);
					}
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(target.countCards('h')>3) return -5;
							if(target.countCards('h')==3) return -3;
							return -0.5;
						},
					},
				},
			},
			yashi:{
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					if(event.source&&event.source.isAlive()) return true;
					return game.hasPlayer((current)=>lib.skill.guanxu.filterTarget(null,player,current));
				},
				content:function(){
					'step 0'
					event.addIndex=0;
					var choiceList=[];
					if(trigger.source&&trigger.source.isAlive()){
						choiceList.push('令'+get.translation(trigger.source)+'的所有非锁定技失效');
					}
					else event.addIndex++;
					if(game.hasPlayer((current)=>lib.skill.guanxu.filterTarget(null,player,current))) choiceList.push('发动一次〖观虚〗');
					player.chooseControl('cancel2').set('prompt',get.prompt('yashi')).set('choiceList',choiceList).set('ai',function(){
						var player=_status.event.player,source=_status.event.getTrigger().source,index=_status.event.getParent().addIndex;
						if(game.hasPlayer(function(current){
							return current!=player&&current.countCards('h')>3&&get.attitude(player,current)<0;
						})) return 1-index;
						if(source&&source.isAlive()&&get.attitude(player,source)<0&&!source.hasSkill('fengyin')) return 0;
						if(game.hasPlayer(function(current){
							return current!=player&&current.countCards('h')>0&&get.attitude(player,current)<0;
						})) return 1-index;
						return 'cancel2';
					});
					'step 1'
					if(result.control!='cancel2'){
						if(result.index+event.addIndex==0){
							var target=trigger.source;
							player.logSkill('yashi',target);
							//target.removeSkill('fengyin');
							target.addTempSkill('fengyin',{player:'phaseBegin'});
							event.finish();
						}
						else player.chooseTarget(true,'请选择〖观虚〗的目标',lib.skill.guanxu.filterTarget).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,'guanxu',player,player);
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('yashi',target);
						var next=game.createEvent('yashi_guanxu');
						next.player=player;
						next.target=target;
						next.setContent(lib.skill.guanxu.content);
					}
				},
			},
			//黄祖
			wangong:{
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					return get.type(event.card,false)=='basic';
				},
				content:function(){
					player.addSkill('wangong2');
				},
			},
			wangong2:{
				trigger:{player:'useCard1'},
				forced:true,
				popup:false,
				firstDo:true,
				charlotte:true,
				content:function(){
					player.removeSkill('wangong2');
					if(trigger.card.name=='sha') trigger.baseDamage++;
				},
				mod:{
					cardUsable:function(card){
						if(card.name=='sha') return Infinity;
					},
					targetInRange:function(card){
						if(card.name=='sha') return true;
					},
				},
				mark:true,
				intro:{
					content:'使用【杀】无距离和次数限制且伤害+1',
				},
			},
			//潘淑
			weiyi:{
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					if(player.getStorage('weiyi').contains(event.player)||!event.player.isIn()) return false;
					return event.player.hp>=player.hp||event.player.isDamaged();
				},
				direct:true,
				content:function(){
					'step 0'
					var list=[];
					if(trigger.player.hp>=player.hp) list.push('失去体力');
					if(trigger.player.hp<=player.hp&&trigger.player.isDamaged()) list.push('回复体力');
					list.push('cancel2')
					player.chooseControl(list).set('prompt',get.prompt2('weiyi',trigger.player)).set('ai',function(){
						var player=_status.event.player,target=_status.event.getTrigger().player;
						var att=get.attitude(player,target),eff=get.recoverEffect(target,player,player);
						if(target.hp<=player.hp&&target.isDamaged()&&att>2&&eff>0){
							if(player==target){
								var storage=player.getStorage('weiyi');
								if(player.hp>=2&&game.hasPlayer(function(current){
									return current.hp==player.hp+1&&!storage.contains(current)&&get.attitude(player,current)<0;
								})) return 'cancel2';
							}
							return '回复体力';
						}
						if(target.hp>=player.hp&&att<-2&&eff<0) return '失去体力';
						return 'cancel2';
					});
					'step 1'
					if(result.control!='cancel2'){
						var target=trigger.player;
						player.logSkill('weiyi',target);
						player.markAuto('weiyi',[target]);
						target[result.control=='失去体力'?'loseHp':'recover']();
					}
				},
				onremove:true,
				intro:{
					content:'已令$对汝威服',
				},
			},
			jinzhi:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(get.type(name)=='basic'&&lib.inpile.contains(name)&&player.countMark('jinzhi2')<player.countCards('he')) return true;
				},
				filter:function(event,player){
					if(event.responded||event.jinzhi||player.countMark('jinzhi2')>=player.countCards('he')) return false;
					for(var i of lib.inpile){
						if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i of lib.inpile){
							if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)){
								list.push(['基本','',i]);
								if(i=='sha'){
									for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
								}
							}
						}
						return ui.create.dialog('锦织',[list,'vcard'],'hidden')
					},
					check:function(button){
						if(button.link[2]=='shan') return 3;
						var player=_status.event.player;
						if(button.link[2]=='jiu'){
							if(player.getUseValue({name:'jiu'})<=0) return 0;
							if(player.countCards('h','sha')) return player.getUseValue({name:'jiu'});
						}
						return player.getUseValue({name:button.link[2],nature:button.link[3]})/4;
					},
					backup:function(links,player){
						return {
							selectCard:player.countMark('jinzhi2')+1,
							filterCard:lib.filter.cardDiscardable,
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								suit:'none',
								number:null,
								isCard:true,
							},
							position:'he',
							check:function(card){
								var player=_status.event.player,color=get.color(card,player);
								if(player.countCards('he',{color:color})<=player.countMark('jinzhi2')||(ui.selected.cards.length&&get.color(ui.selected.cards[0],player)!=color)) return -1;
								if(lib.skill.jinzhi_backup.viewAs.name=='jiu'&&!player.countCards('h',function(cardx){
									return card!=cardx&&!ui.selected.cards.contains(cardx)&&get.name(cardx,player)=='sha';
								})) return 0;
								return Math.min(0.01,6-get.value(card));
							},
							precontent:function(){
								player.logSkill('jinzhi');
								player.addTempSkill('jinzhi2','roundStart');
								player.addMark('jinzhi2',1,false);
								var cards=event.result.cards;
								player.discard(cards);
								player.draw();
								event.result.card={
									name:event.result.card.name,
									nature:event.result.card.nature,
									isCard:true,
								};
								event.result.cards=[];
								delete event.result.skill;
								if(cards.length>1){
									var color=get.color(cards[0],player);
									for(var i=1;i<cards.length;i++){
										if(get.color(cards[i],player)!=color){
											var evt=event.getParent();
											evt.set('jinzhi',true);
											evt.goto(0);
											return;
										}
									}
								}
							},
						}
					},
					prompt:function(links,player){
						var name=links[0][2];
						var nature=links[0][3];
						return '弃置'+get.cnNumber(player.countMark('jinzhi2')+1)+'张牌并摸一张牌。若弃置的牌颜色均相同，则视为使用'+(get.translation(nature)||'')+get.translation(name);
					},
				},
				ai:{
					order:function(item,player){
						if(_status.event.type=='phase'&&!player.countMark('jinzhi2')&&player.getUseValue({name:'jiu'},null,true)>0&&player.countCards('h','sha')) return get.order({name:'jiu'})+1;
						return 1;
					},
					respondShan:true,
					respondSha:true,
					skillTagFilter:function(player){
						if(player.countMark('jinzhi2')>=player.countCards('he')) return false;
					},
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					}
				}
			},
			jinzhi2:{
				onremove:true,
				intro:{
					content:'本轮已发动过#次',
				},
			},
			//铜雀台
			spduanzhi:{
				trigger:{target:'useCardToTargeted'},
				logTarget:'player',
				check:function(event,player){
					var target=event.player;
					if(get.attitude(player,target)>=-2||target.countCards('he',function(card){
						return get.value(card,target)>5;
					})<2) return false;
					if(player.hp>2) return true;
					if(player.hp==1){
						if(get.tag(event.card,'respondSha')){
							if(player.countCards('h',{name:'sha'})==0){
								return true;
							}
						}
						else if(get.tag(event.card,'respondShan')){
							if(player.countCards('h',{name:'shan'})==0){
								return true;
							}
						}
						else if(get.tag(event.card,'damage')){
							if(event.card.name=='shuiyanqijunx') return player.countCards('e')==0;
							return true;
						}
					}
					return false;
				},
				filter:function(event,player){
					return player!=event.player&&event.player.countDiscardableCards(player,'he')>0;
				},
				content:function(){
					player.discardPlayerCard(trigger.player,true,'he',[1,2]);
					player.loseHp();
				},
			},
			spduyi:{
				enable:'phaseUse',
				usable:1,
				content:function(){
					'step 0'
					event.card=get.cards()[0];
					game.cardsGotoOrdering(event.card);
					player.showCards(event.card);
					'step 1'
					player.chooseTarget('令一名角色获得'+get.translation(card),true).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(_status.event.du){
							if(target.hasSkillTag('nodu')) return 0;
							return -att;
						}
						if(att>0){
							if(target==player) att*=0.6;
							return att+Math.sqrt(Math.max(0,5-target.countCards('h')));
						}
						return att;
					}).set('du',card.name=='du');
					'step 2'
					if(result&&result.bool){
						var target=result.targets[0];
						target.gain(card,'gain2');
						if(get.color(card,false)=='black') target.addTempSkill('spduyi2');
					}
				},
				ai:{
					order:0.1,
					result:{
						player:1,
					},
				},
			},
			spduyi2:{
				mod:{
					cardEnabled2:function(card){
						if(get.position(card)=='h') return false;
					},
				},
				mark:true,
				intro:{
					content:'不能使用或打出手牌',
				},
			},
			spcangni:{
				audio:'zhuikong',
				trigger:{player:'phaseDiscardBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseDrawRecover('###'+get.prompt('spcangni')+'###摸两张牌或回复1点体力，然后将武将牌翻面',2).set('ai',function(){
						return 'cancel2';
					}).logSkill='spcangni';
					'step 1'
					if(result.control!='cancel2') player.turnOver();
				},
				group:['spcangni_gain','spcangni_lose'],
				subSkill:{
					gain:{
						audio:'zhuikong',
						trigger:{player:'gainAfter'},
						usable:1,
						filter:function(event,player){
							return player.isTurnedOver()&&player!=_status.currentPhase;
						},
						check:function(event,player){
							return get.attitude(player,_status.currentPhase)>0;
						},
						logTarget:function(){
							return _status.currentPhase;
						},
						prompt2:'令该角色摸一张牌',
						content:function(){
							_status.currentPhase.draw();
						},
					},
					lose:{
						audio:'zhuikong',
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter:function(event,player){
							if(event.name=='gain'&&player==event.player) return false;
							var evt=event.getl(player);
							if(!evt||!evt.cards2||!evt.cards2.length) return false;
							return player.isTurnedOver()&&player!=_status.currentPhase&&_status.currentPhase.countCards('he')>0;
						},
						check:function(event,player){
							var target=_status.currentPhase;
							var att=get.attitude(player,target);
							if(target.countCards('e',function(card){
								return get.value(card,target)<=0;
							})) return att>0;
							return att<0;
						},
						logTarget:function(){
							return _status.currentPhase;
						},
						prompt2:'令该角色弃置一张牌',
						content:function(){
							_status.currentPhase.chooseToDiscard('he',true);
						},
					},
				},
			},
			spmixin:{
				audio:'qiuyuan',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0&&game.countPlayer()>2;
				},
				filterCard:true,
				filterTarget:lib.filter.notMe,
				position:'h',
				selectTarget:2,
				targetprompt:['拿牌打人','被打'],
				multitarget:true,
				delay:false,
				discard:false,
				lose:false,
				check:function(card){
					if(card.name=='sha') return 4;
					return 4-get.value(card);
				},
				content:function(){
					'step 0'
					targets[0].gain(cards,player,'giveAuto');
					'step 1'
					if(!targets[0].isAlive()||!targets[1].isAlive()){
						event.finish();
						return;
					}
					targets[0].chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},'密信：对'+get.translation(targets[1])+'使用一张【杀】，或令其观看并获得你的一张手牌').set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
						return lib.filter.targetEnabled.apply(this,arguments);
					}).set('sourcex',targets[1]);
					'step 2'
					if(!result.bool&&targets[0].countCards('h')) targets[1].gainPlayerCard(targets[0],'visible','h',true);
				},
				ai:{
					order:1,
					expose:0.1,
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
							if(!card) return 0;
							if(ui.selected.targets.length==0){
								if(card.name=='sha'||target.hasSha()) return 2;
								if(get.value(card,target)<0) return -2;
								return 0;
							}
							var target1=ui.selected.targets[0];
							if((card.name=='sha'||target1.hasSha())&&get.effect(target,{name:'sha'},target1,target1)>0) return get.effect(target,{name:'sha'},target1,target);
							return 1.5;
						},
					},
				},
			},
			spfengyin:{
				audio:'moukui',
				trigger:{global:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return player!=event.player&&event.player.hp>=player.hp&&player.countCards('h',function(card){
						if(_status.connectMode) return true;
						return get.name(card,player)=='sha';
					})>0;
				},
				content:function(){
					'step 0'
					player.chooseCard('h',get.prompt('spfengyin',trigger.player),'交给该角色一张【杀】并令其跳过出牌阶段和弃牌阶段',function(card,player){
						return get.name(card,player)=='sha';
					}).set('ai',function(card){
						if(_status.event.goon) return 5-get.value(card);
						return 0;
					}).set('goon',function(){
						if(get.attitude(player,trigger.player)>=0) return false;
						if(trigger.player.countCards('hs')<trigger.player.hp) return false;
						return true;
					}());
					'step 1'
					if(result.bool){
						var target=trigger.player;
						player.logSkill('spfengyin',target);
						target.gain(result.cards,player,'give');
						target.skip('phaseUse');
						target.skip('phaseDiscard');
					}
				},
			},
			spchizhong:{
				mod:{
					maxHandcardBase:function(player,num){
						return player.maxHp;
					},
				},
				trigger:{global:'dieAfter'},
				forced:true,
				content:function(){
					player.gainMaxHp();
				},
			},
			//宗预
			zyqiao:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				logTarget:'player',
				usable:2,
				preHidden:true,
				filter:function(event,player){
					var source=event.player;
					if(source==player) return false;
					if(get.mode()=='guozhan'&&source.isFriendOf(player)) return false;
					return source.countDiscardableCards(player,'he')>0;
				},
				check:function(event,player){
					var target=event.player;
					if(get.attitude(player,target)>=0) return false;
					if(!player.countCards('he',function(card){
						return lib.filter.cardDiscardable(card,player,'zyqiao');
					})) return true;
					if(player.countCards('he',(card)=>get.value(card,player)<5)) return true;
					if(target.countCards('he',(card)=>get.value(card,target)>6)&&player.countCards('he',(card)=>get.value(card,player)<7)) return true;
					return false;
				},
				content:function(){
					'step 0'
					player.discardPlayerCard(trigger.player,true,'he');
					'step 1'
					if(player.countCards('he',function(card){
						return lib.filter.cardDiscardable(card,player,'zyqiao');
					})) player.chooseToDiscard('he',true);
				},
			},
			chengshang:{
				audio:2,
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					if(!lib.suit.contains(get.suit(event.card,false))||typeof get.number(event.card)!='number') return false;
					if(player.getHistory('sourceDamage',function(evt){
						return evt.card==event.card;
					}).length) return false;
					var phsu=event.getParent('phaseUse');
					if(!phsu||phsu.player!=player) return false;
					if(player.getHistory('gain',function(evt){
						return evt.getParent().name=='chengshang';
					}).length) return false;
					for(var i of event.targets){
						if(i!=player&&(get.mode()!='guozhan'||i.isEnemyOf(player))) return true;
					}
					return false;
				},
				preHidden:true,
				content:function(){
					var suit=get.suit(trigger.card);
					var number=get.number(trigger.card);
					var card=get.cardPile2(function(card){
						return card.suit==suit&&card.number==number;
					});
					if(card) player.gain(card,'gain2');
				},
			},
			//新丁奉
			reduanbing:{
				audio:2,
				audioname:['heqi'],
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
						return !event.targets.contains(current)&&get.distance(player,current)<=1&&player.canUse(event.card,current);
					});
				},
				direct:true,
				preHidden:['reduanbing_sha'],
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('reduanbing'),'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
						return !_status.event.sourcex.contains(target)&&get.distance(player,target)<=1&&player.canUse(_status.event.card,target);
					}).set('sourcex',trigger.targets).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					}).set('card',trigger.card).setHiddenSkill(event.name);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('reduanbing',event.target);
					trigger.targets.push(event.target);
				},
				ai:{
					effect:{
						player:function(card,player,target,current,isLink){
							if(!isLink&&card.name=='sha'){
								if(player._reduanbingtmp) return;
								player._reduanbingtmp=true;
								if(get.effect(target,card,player,player)<=0){
									delete player._reduanbingtmp;
									return;
								}
								if(game.hasPlayer(function(current){
									return current!=target&&get.distance(player,current)<=1&&
									player.canUse(card,current)&&get.effect(current,card,player,player)>0;
								})){
									delete player._reduanbingtmp;
									return [1,1];
								}
								delete player._reduanbingtmp;
							}
						}
					}
				},
				group:'reduanbing_sha',
				subSkill:{
					sha:{
						audio:'duanbing',
						audioname:['heqi'],
						trigger:{player:'useCardToPlayered'},
						forced:true,
						filter:function(event,player){
							return event.card.name=='sha'&&!event.getParent().directHit.contains(event.target)&&get.distance(player,event.target)<=1;
						},
						logTarget:'target',
						content:function(){
							var id=trigger.target.playerid;
							var map=trigger.getParent().customArgs;
							if(!map[id]) map[id]={};
							if(typeof map[id].shanRequired=='number'){
								map[id].shanRequired++;
							}
							else{
								map[id].shanRequired=2;
							}
						},
						ai:{
							directHit_ai:true,
							skillTagFilter:function(player,tag,arg){
								if(arg.card.name!='sha'||arg.target.countCards('h','shan')>1||get.distance(player,arg.target)>1) return false;
							},
						},
					},
				},
			},
			refenxun:{
				audio:'fenxun',
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					player.markAuto('refenxun2',targets);
					player.addTempSkill('refenxun2');
				},
				ai:{
					order:6.5,
					result:{
						player:function(player,target){
							if(get.distance(player,target)<=1) return 0;
							var hs=player.getCards('h','shunshou');
							if(hs.length&&player.canUse(hs[0],target,false)){
								return 1;
							}
							var geteff=function(current){
								return player.canUse('sha',current,false,true)&&get.effect(current,{name:'sha'},player,player)>0;
							}
							if(player.hasSha()&&geteff(target)){
								var num=game.countPlayer(function(current){
									return current!=player&&get.distance(player,current)<=1&&geteff(current);
								});
								if(num==0){
									if(game.hasPlayer(function(current){
										return player.canUse('sha',current)&&geteff(current)&&current!=target;
									})){
										return 1;
									}
								}
								else if(num==1){
									return 1;
								}
							}
							return 0;
						}
					}
				}
			},
			refenxun2:{
				audio:'fenxun',
				trigger:{
					player:'phaseJieshuBegin',
				},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return player.getHistory('sourceDamage',function(evt){
						return player.storage.refenxun2.contains(evt.player);
					}).length==0&&player.countCards('he',function(card){
						return lib.filter.cardDiscardable(card,player,'refenxun2');
					})>0;
				},
				content:function(){
					player.chooseToDiscard('he',true);
				},
				onremove:true,
				intro:{
					content:'到$的距离视为1'
				},
				mod:{
					globalFrom:function(from,to){
						if(from.storage.refenxun2.contains(to)){
							return -Infinity;
						}
					}
				},
			},
			//蔡阳新技能
			zhuixi:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					},
				},
			},
			//新塌顿
			reluanzhan:{
				audio:'luanzhan',
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				forced:true,
				content:function(){
					player.addMark('reluanzhan',1,false);
				},
				intro:{content:'mark'},
				ai:{notemp:true},
				group:['reluanzhan_add','reluanzhan_remove'],
			},
			reluanzhan_add:{
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					if(event.card.name!='sha'&&(get.color(event.card)!='black'||get.type(event.card)!='trick')||!player.countMark('reluanzhan')) return false;
					var info=get.info(event.card);
					if(info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						if(game.hasPlayer(function(current){
							return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current);
						})){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var num=player.countMark('reluanzhan');
					var prompt2='为'+get.translation(trigger.card)+'增加至多'+get.cnNumber(num)+'个目标'
					player.chooseTarget(get.prompt('reluanzhan'),function(card,player,target){
						if(_status.event.targets.contains(target)) return false;
						var player=_status.event.player;
						return lib.filter.targetEnabled2(_status.event.card,player,target)&&lib.filter.targetInRange(_status.event.card,player,target);
					},[1,num]).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					}).set('card',trigger.card).set('targets',trigger.targets);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets){
						player.logSkill('reluanzhan',event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
			},
			reluanzhan_remove:{
				audio:'luanzhan',
				trigger:{player:'useCardToPlayered'},
				forced:true,
				filter:function(event,player){
					if(!event.isFirstTarget||(event.card.name!='sha'&&(get.color(event.card)!='black'||get.type(event.card)!='trick'))||!player.countMark('reluanzhan')) return false;
					var info=get.info(event.card);
					if(info.allowMultiple==false||info.multitarget) return false;
					return event.targets.length<player.countMark('reluanzhan');
				},
				content:function(){
					player.removeMark('reluanzhan',Math.ceil(player.countMark('reluanzhan')/2));
				},
			},
			//卧龙凤雏双头祈福
			youlong:{
				enable:'chooseToUse',
				audio:2,
				audioname:['key_sakuya'],
				zhuanhuanji:true,
				marktext:'☯',
				mark:true,
				intro:{
					content:function(storage,player){
						return storage?'每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。':'每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌。';
					},
				},
				init:function(player){
					player.storage.youlong=false;
					if(!player.storage.youlong2) player.storage.youlong2=[];
				},
				hiddenCard:function(player,name){
					if(player.storage.youlong2.contains(name)||player.countDisabled()>=5) return false;
					if(player.hasSkill('youlong_'+(player.storage.youlong||false))) return false;
					var type=get.type(name);
					if(player.storage.youlong) return type=='basic';
					return type=='trick';
				},
				filter:function(event,player){
					if(player.storage.youlong2.contains(name)||player.countDisabled()>=5) return false;
					if(player.hasSkill('youlong_'+(player.storage.youlong||false))) return false;
					var type=player.storage.youlong?'basic':'trick';
					for(var name of lib.inpile){
						if(player.storage.youlong2.contains(name)) continue;
						if(get.type(name)!=type) continue;
						if(event.filterCard({name:name,isCard:true},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('游龙','hidden');
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						for(var i=1;i<6;i++){
							if(player.isDisabled(i)) continue;
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.innerHTML='<span>'+get.translation('equip'+i)+'</span>';
							td.link=i;
							td.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
							for(var j in lib.element.button){
								td[j]=lib.element.button[j];
							}
							table.appendChild(td);
							dialog.buttons.add(td);
						}
						dialog.content.appendChild(table);
						var type=player.storage.youlong?'basic':'trick';
						var list=[];
						for(var name of lib.inpile){
							if(player.storage.youlong2.contains(name)) continue;
							if(get.type(name)!=type) continue;
							if(event.filterCard({name:name,isCard:true},player,event)){
								list.push([type,'',name]);
								if(name=='sha'){
									for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
								}
							}
						}
						dialog.add([list,'vcard']);
						return dialog;
					},
					filter:function(button){
						if(ui.selected.buttons.length&&typeof button.link==typeof ui.selected.buttons[0].link) return false;
						return true;
					},
					select:2,
					check:function(button){
						var player=_status.event.player;
						if(typeof button.link=='number'){
							var card=player.getEquip(button.link);
							if(card){
								var val=get.value(card);
								if(val>0) return 0;
								return 5-val;
							}
							switch(button.link){
								case 3:return 4.5;break;
								case 4:return 4.4;break;
								case 5:return 4.3;break;
								case 2:return (3-player.hp)*1.5;break;
								case 1:{
									if(game.hasPlayer(function(current){
										return (get.realAttitude||get.attitude)(player,current)<0&&get.distance(player,current)>1;
									})) return 0;
									return 3.2;
								}
							}
						}
						var name=button.link[2];
						var evt=_status.event.getParent();
						if(get.type(name)=='basic'){
							if(name=='shan') return 2;
							if(evt.type=='dying'){
								if(get.attitude(player,evt.dying)<2) return false;
								if(name=='jiu') return 2.1;
								return 1.9;
							}
							if(evt.type=='phase') return player.getUseValue({name:name,nature:button.link[3],isCard:true});
							return 1;
						}
						if(!['chuqibuyi','shuiyanqijunx','juedou','nanman','wanjian','shunshou','zhujinqiyuan'].contains(name)) return 0;
						var card={name:name,isCard:true};
						if(['shunshou','zhujinqiyuan'].contains(card.name)){
							if(!game.hasPlayer(function(current){
								return get.attitude(player,current)!=0&&get.distance(player,current)<=1&&player.canUse(card,current)&&get.effect(current,card,player,player)>0;
							})) return 0;
							return player.getUseValue(card)-7;
						}
						return player.getUseValue(card)-4;
					},
					backup:function(links,player){
						if(typeof links[1]=='number') links.reverse();
						var equip=links[0];
						var name=links[1][2];
						var nature=links[1][3];
						return {
							filterCard:function(){return false},
							selectCard:-1,
							equip:equip,
							viewAs:{
								name:name,
								nature:nature,
								isCard:true,
							},
							popname:true,
							precontent:function(){
								player.logSkill('youlong');
								player.disableEquip(lib.skill.youlong_backup.equip);
								delete event.result.skill;
								player.addTempSkill('youlong_'+(player.storage.youlong||false),'roundStart');
								player.changeZhuanhuanji('youlong');
								player.storage.youlong2.add(event.result.card.name);
							},
						}
					},
					prompt:function(links,player){
						if(typeof links[1]=='number') links.reverse();
						var equip='equip'+links[0];
						var name=links[1][2];
						var nature=links[1][3];
						return '废除自己的'+get.translation(equip)+'栏，视为使用'+(get.translation(nature)||'')+get.translation(name);
					},
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(arg=='respond') return false;
						if(!player.storage.youlong||player.hasSkill('youlong_true')) return false;
						var name=(tag=='respondSha'?'sha':'shan');
						return !player.storage.youlong2.contains(name);
					},
					order:1,
					result:{
						player:1,
					},
				},
			},
			youlong_true:{charlotte:true},
			youlong_false:{charlotte:true},
			luanfeng:{
				audio:2,
				audioname:['key_sakuya'],
				trigger:{global:'dying'},
				filter:function(event,player){
					return event.player.maxHp>=player.maxHp&&event.player.hp<1;
				},
				limited:true,
				skillAnimation:true,
				animationColor:'soil',
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)<4) return false;
					if(player.countCards('h',function(card){
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,event.player,'unchanged','cardSavable',player);
						if(mod!='unchanged') return mod;
						var savable=get.info(card).savable;
						if(typeof savable=='function') savable=savable(card,player,event.player);
						return savable;
					})>=1-event.player.hp) return false;
					if(event.player==player||event.player==get.zhu(player)) return true;
					return !player.hasUnknown();
				},
				content:function(){
					'step 0'
					player.awakenSkill('luanfeng');
					trigger.player.recover(3-trigger.player.hp);
					'step 1'
					var num=trigger.player.countDisabled();
					if(num){
						for(var i=1;i<6;i++){
							if(trigger.player.isDisabled(i)) trigger.player.enableEquip(i);
						}
					}
					trigger.player.drawTo(6-num);
					if(trigger.player.storage.kotarou_rewrite) trigger.player.storage.kotarou_rewrite=[];
					if(player==trigger.player) player.storage.youlong2=[];
				},
			},
			//曹爽，韩遂，何进
			xiaoxi:{
				audio:2,
				audioname:['machao','hansui','pangde'],
				trigger:{
					player:'enterGame',
					global:'phaseBefore',
				},
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				direct:true,
				content:function(){
					player.chooseUseTarget('sha',get.prompt('xiaoxi'),'视为使用一张【杀】').logSkill='xiaoxi';
				},
			},
			spmouzhu:{
				enable:'phaseUse',
				audio:'mouzhu',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer((current)=>lib.skill.spmouzhu.filterTarget(null,player,current));
				},
				filterTarget:function(card,player,target){
					return player!=target&&(target.hp==player.hp||get.distance(player,target)==1);
				},
				selectTarget:[1,Infinity],
				content:function(){
					'step 0'
					if(!target.countCards('he')) event.finish();
					else target.chooseCard('he','交给'+get.translation(player)+'一张牌',true);
					'step 1'
					player.gain(result.cards,target,'giveAuto');
					'step 2'
					if(player.countCards('h')<=target.countCards('h')){
						event.finish();
						return;
					}
					var list=[];
					if(target.canUse('sha',player,false)) list.push('sha');
					if(target.canUse('juedou',player,false)) list.push('juedou');
					if(!list.length) event.finish();
					else if(list.length==1) event._result={control:list[0]};
					else target.chooseControl(list).set('prompt','对'+get.translation(player)+'使用一张【杀】或【决斗】。').ai=function(){
						return get.effect(player,{name:'sha'},target,target)>=get.effect(player,{name:'juedou'},target,target)?'sha':'juedou';
					};
					'step 3'
					target.useCard({name:result.control,isCard:true},player,'noai');
				},
				ai:{
					order:7,
					result:{
						target:-1.2,
						player:function(player,target){
							if(ui.selected.targets.length) return 0;
							if(target.countCards('h')-player.countCards('h')>1) return 1;
							if(get.damageEffect(target,player,player,player)>0) return 1;
							if(player.hp>3||player.countCards('h','sha')&&player.countCards('h','shan')) return 0;
							if(player.hp>2) return -1.1;
							return -2;
						},
					},
				},
			},
			spyanhuo:{
				audio:'yanhuo',
				trigger:{player:'die'},
				forceDie:true,
				skillAnimation:true,
				animationColor:'soil',
				content:function(){
					player.line(game.players,'green');
					game.addGlobalSkill('spyanhuo_damage');
					if(!_status.yanhuo) _status.yanhuo=0;
					_status.yanhuo++;
				},
				subSkill:{
					damage:{
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event,player){
							return event.card.name=='sha';
						},
						content:function(){
							trigger.baseDamage+=(_status.yanhuo||0);
						},
					},
				},
			},
			spniluan:{
				enable:'phaseUse',
				audio:'niluan',
				viewAs:{name:'sha'},
				check:function(card){
					return 5.1-get.value(card);
				},
				filterCard:{color:'black'},
				position:'hes',
				audio:'niluan',
				viewAsFilter:function(player){
					return player.countCards('hes',lib.skill.spniluan.filterCard)>0;
				},
				group:'spniluan_clear',
			},
			spniluan_clear:{
				trigger:{player:'useCardAfter'},
				forced:true,
				silent:true,
				charlotte:true,
				filter:function(event,player){
					return event.skill=='spniluan'&&event.addCount!==false&&player.getHistory('sourceDamage',function(card){
						return card.card==event.card;
					}).length==0;
				},
				content:function(){
					trigger.addCount=false;
					if(player.stat[player.stat.length-1].card.sha>0){
						player.stat[player.stat.length-1].card.sha--;
					}
				},
			},
			spweiwu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				viewAs:{name:'shunshou'},
				filterCard:{color:'red'},
				position:'hes',
				check:function(card){
					return 7-get.value(card);
				},
				filterTarget:function(card,player,target){
					if(target.countCards('h')<player.countCards('h')) return false;
					return lib.filter.filterTarget.apply(this,arguments);
				},
				viewAsFilter:function(player){
					return player.countCards('hes',lib.skill.spweiwu.filterCard)>0&&game.hasPlayer(function(current){
						return current.countCards('h')>=player.countCards('h')&&player.canUse('shunshou',current);
					});
				},
			},
			tuogu:{
				audio:2,
				trigger:{global:'die'},
				filter:function(event,player){
					return event.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
						var info=get.info(skill);
						return info&&!info.juexingji&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte&&!info.limited&&!info.dutySkill;
					}).length>0;
				},
				logTarget:'player',
				skillAnimation:true,
				limited:true,
				animationColor:'thunder',
				content:function(){
					'step 0'
					player.awakenSkill('tuogu');
					var list=trigger.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
						var info=get.info(skill);
						return info&&!info.juexingji&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte&&!info.limited&&!info.dutySkill;
					});
					if(list.length==1) event._result={control:list[0]};
					else trigger.player.chooseControl(list).set('prompt','选择令'+get.translation(player)+'获得一个技能').set('forceDie',true).set('ai',function(){
						return list.randomGet();
					});
					'step 1'
					player.addSkillLog(result.control);
					game.broadcastAll(function(skill){
						var list=[skill];game.expandSkills(list);
						for(var i of list){
							var info=lib.skill[i];
							if(!info) continue;
							if(!info.audioname2) info.audioname2={};
							info.audioname2.caoshuang='tuogu';
						}
					},result.control);
				},
			},
			retuogu:{
				audio:'tuogu',
				trigger:{global:'die'},
				filter:function(event,player){
					return event.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
						var info=get.info(skill);
						return info&&!info.juexingji&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte&&!info.limited&&!info.dutySkill;
					}).length>0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					var list=trigger.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
						var info=get.info(skill);
						return info&&!info.juexingji&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte&&!info.limited&&!info.dutySkill;
					});
					if(list.length==1) event._result={control:list[0]};
					else trigger.player.chooseControl(list).set('prompt','选择令'+get.translation(player)+'获得一个技能').set('forceDie',true).set('ai',function(){
						return list.randomGet();
					});
					'step 1'
					if(player.storage.retuogu) player.removeSkill(player.storage.retuogu);
					player.storage.retuogu=result.control;
					player.markSkill('retuogu');
					player.addSkillLog(result.control);
					game.broadcastAll(function(skill){
						var list=[skill];
						game.expandSkills(list);
						for(var i of list){
							var info=lib.skill[i];
							if(!info) continue;
							if(!info.audioname2) info.audioname2={};
							info.audioname2.caoshuang='tuogu';
						}
					},result.control);
				},
				mark:true,
				intro:{content:'当前托孤技能：$'},
			},
			shanzhuan:{
				trigger:{source:'damageSource'},
				audio:2,
				direct:true,
				filter:function(event,player){
					return player!=event.player&&!event.player.storage._disableJudge&&event.player.countCards('he')&&!event.player.countCards('j');
				},
				content:function(){
					'step 0'
					player.choosePlayerCard(trigger.player,'he',get.prompt('shanzhuan',trigger.player)).set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.target)>=0) return 0;
						return get.buttonValue(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('shanzhuan',trigger.player);
						var card=result.cards[0];
						trigger.player.$throw(card);
						game.delayx();
						if(get.type(card,false)=='delay') trigger.player.addJudge(card);
						else trigger.player.addJudge({name:get.color(card,false)=='red'?'lebu':'bingliang'},result.cards);
					}
				},
				group:'shanzhuan_draw',
				subfrequent:['draw'],
				subSkill:{
					draw:{
						audio:'shanzhuan',
						trigger:{player:'phaseEnd'},
						frequent:true,
						prompt:'是否发动【擅专】摸一张牌？',
						filter:function(event,player){
							return !player.getHistory('sourceDamage').length;
						},
						content:function(){
							player.draw();
						},
					},
				},
			},
			olxingshen:{
				trigger:{player:'damageEnd'},
				frequent:true,
				audio:'xingshen',
				content:function(){
					'step 0'
					var next=player.draw();
					if(get.isLuckyStar(player)||Math.random()<0.5) next.num=2;
					var num=player.countMark('olxingshen');
					if(num<6) player.addMark('olxingshen',Math.min(6-num,player.getDamagedHp()),false)
				},
				intro:{
					content:'下一次发动〖严教〗时多展示X张牌',
				},
			},
			//张道陵
			zlhuji:{
				mod:{
					globalFrom:function(player,target,distance){
						return distance-1;
					},
				},
				trigger:{player:'damageEnd'},
				forced:true,
				filter:function(event,player){
					return player!=_status.currentPhase;
				},
				content:function(){
					'step 0'
					var func=function(result){
						if(get.color(result)=='red') return 1;
						return 0;
					};
					if(get.itemtype(trigger.source)!='player'||!player.canUse('sha',trigger.source,false)) func=function(result){
						return 0;
					};
					else if(get.effect(trigger.source,{name:'sha'},player,player)<0) func=function(result){
						if(get.color(result)=='red') return -1;
						return 0;
					};
					player.judge(func).judge2=function(result){
						return result.color=='red'?true:false;
					};
					'step 1'
					if(result.color=='red'&&get.itemtype(trigger.source)=='player'&&player.canUse('sha',trigger.source,false)){
						player.useCard({name:'sha',isCard:true},trigger.source,false,'noai');
					}
				},
			},
			zlshoufu:{
				enable:'phaseUse',
				usable:1,
				delay:false,
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					var filterTarget=function(card,player,target){
						return target!=player&&!target.hasSkill('zlshoufu2');
					};
					if(!player.countCards('h')||!game.hasPlayer(function(current){
						return filterTarget(null,player,current);
					})) event.finish();
					else player.chooseCardTarget({
						forced:true,
						prompt:'将一张手牌作为“箓”置于其他角色的武将牌上',
						filterTarget:filterTarget,
						filterCard:true,
						position:'h',
						ai1:function(card){
							if(get.type(card,false)=='equip') return 1-get.value(card);
							return 7-get.value(card);
						},
						ai2:function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							if(att>0) return -att;
							return -att/get.distance(player,target,'absolute');
						},
					});
					'step 2'
					var target=result.targets[0];
					var cards=result.cards;
					target.addToExpansion(cards,player,'give').gaintag.add('zlshoufu2');
					player.line(target,'green');
					target.addSkill('zlshoufu2');
					'step 3'
					game.delayx();
				},
				ai:{
					notemp:true,
					order:1,
					result:{
						player:function(player){
							if(game.hasPlayer(function(target){
								return target!=player&&!target.hasSkill('zlshoufu2')&&get.attitude(player,target)<0;
							})||!game.hasPlayer(function(target){
								return target!=player&&!target.hasSkill('zlshoufu2')&&get.attitude(player,target)>0;
							})) return 1;
							return 0;
						},
					},
				},
			},
			zlshoufu2:{
				marktext:'箓',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				charlotte:true,
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				mod:{
					cardEnabled:function(card,player){
						if(player.getExpansions('zlshoufu2').filter(function(magic){
							return get.type2(magic)==get.type2(card);
						}).length) return false;
					},
					cardRespondable:function(card,player){
						if(player.getExpansions('zlshoufu2').filter(function(magic){
							return get.type2(magic)==get.type2(card);
						}).length) return false;
					},
					cardSavable:function(card,player){
						if(player.getExpansions('zlshoufu2').filter(function(magic){
							return get.type2(magic)==get.type2(card);
						}).length) return false;
					},
				},
				trigger:{
					player:['damageEnd','loseAfter'],
				},
				forced:true,
				filter:function(event,player){
					var storage=player.getExpansions('zlshoufu2');
					if(!storage.length) return false;
					if(event.name=='damage') return true;
					if(event.type!='discard'||event.getParent('phaseDiscard').player!=player) return false;
					var num=0;
					for(var i of event.cards2){
						if(storage.filter(function(magic){
							return get.type2(magic)==get.type2(i,event.hs.contains(i)?player:false);
						}).length) num++;
					}
					return num>1;
				},
				content:function(){
					player.removeSkill('zlshoufu2');
				},
			},
			//蔡阳
			yinka:{
				trigger:{player:['drawBegin','judgeBegin']},
				direct:true,
				filter:function(){
					return ui.cardPile.childNodes.length>0;
				},
				content:function(){
					'step 0'
					player.chooseButton(['印卡：请选择要置于牌堆'+(trigger.bottom?'底':'顶')+'的牌（先选择的在上）',Array.from(ui.cardPile.childNodes)],[1,trigger.num||1]);
					'step 1'
					if(result.bool){
						while(result.links.length){
							if(trigger.bottom){
								var card=result.links.shift();
								ui.cardPile.removeChild(card);
								ui.cardPile.appendChild(card);
							}
							else{
								var card=result.links.pop();
								ui.cardPile.removeChild(card);
								ui.cardPile.insertBefore(card,ui.cardPile.firstChild)
							}
						}
					}
				},
				ai:{isLuckyStar:true},
			},
			//新王允
			xinlianji:{
				enable:'phaseUse',
				audio:'wylianji',
				usable:1,
				check:function(card){
					return 5-get.value(card);
				},
				filterTarget:function(card,player,target){
					if(ui.selected.targets.length) return true;
					return target!=player;
				},
				filterCard:true,
				selectTarget:2,
				multitarget:true,
				targetprompt:['打人','被打'],
				content:function(){
					'step 0'
					//player.addMark('xinlianji',1,false);
					var card=get.cardPile2(function(card){
						return get.subtype(card)=='equip1'&&targets[0].hasUseTarget(card);
					});
					if(card){
						if(card.name=='qinggang'&&!lib.inpile.contains('qibaodao')){
							card.remove();
							card=game.createCard('qibaodao',card.suit,card.number);
						}
						targets[0].chooseUseTarget(card,true,'nopopup','nothrow');
					}
					else{
						player.chat('没有装备牌了吗');
						game.log('但是牌堆里已经没有装备牌了！');
					}
					'step 1'
					game.updateRoundNumber();
					targets[0].chooseToUse('对'+get.translation(targets[1])+'使用一张杀，或将装备区里的武器牌交给一名其他角色',
							{name:'sha'}).set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set('sourcex',targets[1]).set('addCount',false);
					'step 2'
					var card=targets[0].getEquip(1);
					if(!result.bool&&card){
						event.card=card;
						player.chooseTarget(true,'将'+get.translation(card)+'交给一名其他角色').set('ai',function(target){
							var card=_status.event.getParent().card;
							return (target.hasSkillTag('nogain')?0:get.attitude(_status.event.player,target))*Math.max(0.1,target.getUseValue(card));
						});
					}
					else event.finish();
					'step 3'
					result.targets[0].gain(card,targets[0],'give');
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length){
								var pretarget=ui.selected.targets[0];
								if(pretarget.hasSha()&&pretarget.canUse({name:'sha'},target)) return get.effect(target,{name:'sha'},pretarget,target);
								return Math.random();
							}
							if(!target.getEquip(1)){
								if(game.hasPlayer(function(current){
									return current!=target&&!current.hasSkillTag('nogain')&&get.attitude(current,target)>0;
								})) return 3;
								return -3;
							}
							if(!game.hasPlayer(function(current){
								return current!=target&&!current.hasSkillTag('nogain')&&get.attitude(current,target)>0;
							})) return -6;
							return 4-get.value(target.getEquip(1));
						},
					},
				},
			},
			xinmoucheng:{
				trigger:{player:'phaseZhunbeiBegin'},
				audio:'moucheng',
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'gray',
				derivation:'xinjingong',
				unique:true,
				filter:function(event,player){
					return game.hasPlayer2(function(current){
						return current.getAllHistory('sourceDamage',function(evt){
							if(!evt.card||evt.card.name!='sha'||evt.getParent().type!='card') return false;
							var evt2=evt.getParent(4);
							return evt2&&evt2.name=='xinlianji'&&evt2.player==player;
						}).length>0;
					});
				},
				content:function(){
					player.awakenSkill('xinmoucheng');
					player.addSkill('xinjingong');
					player.removeSkill('xinlianji');
				},
			},
			xinjingong:{
				audio:'jingong',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return event.xinjingong_list&&player.countCards('hes',function(card){
						return card.name=='sha'||get.type(card)=='equip';
					});
				},
				onChooseToUse:function(event){
					if(!game.online){
						var evt=event.getParent();
						if(evt.name!='phaseUse') return;
						if(!evt.xinjingong_list){
							var list=get.inpile('trick').randomGets(2);
							if(Math.random()<0.5){
								list.push('wy_meirenji');
							}
							else{
								list.push('wy_xiaolicangdao');
							}
							evt.xinjingong_list=list;
						}
						if(!event.xinjingong_list) event.set('xinjingong_list',evt.xinjingong_list);
					}
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i of event.xinjingong_list) list.push(['锦囊','',i]);
						return ui.create.dialog('矜功',[list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						return _status.event.player.getUseValue({name:button.link[2]});
					},
					backup:function(links,player){
						return {
							audio:'jingong',
							filterCard:true,
							popname:true,
							position:'hes',
							viewAs:{name:links[0][2]},
							check:function(card){
								return 6-get.value(card);
							},
							filterCard:function(card){
								return card.name=='sha'||get.type(card)=='equip';
							},
						};
					},
					prompt:function(links,player){
						return '将一张【杀】或装备牌当做'+get.translation(links[0][2])+'使用';
					}
				},
				ai:{
					order:2,
					result:{
						player:1
					}
				}
			},
			//孙邵
			bizheng:{
				trigger:{player:'phaseDrawEnd'},
				direct:true,
				audio:2,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('bizheng'),lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						if(player.countCards('h')>player.maxHp) return 0;
						var att=get.attitude(player,target);
						if(att<=0||target.hasSkillTag('nogain')) return 0;
						if(target.maxHp-target.countCards('h')>=2) return att;
						return att/2;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('bizheng',target);
						target.draw(2);
					}
					else event.finish();
					'step 2'
					if(player.countCards('h')>player.maxHp) player.chooseToDiscard(2,'he',true);
					'step 3'
					if(target.countCards('h')>target.maxHp) target.chooseToDiscard(2,'he',true);
				},
				ai:{
					expose:0.25,
				},
			},
			yidian:{
				trigger:{player:'useCard2'},
				filter:function(event,player){
					var info=get.info(event.card);
					if(info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						for(var i=0;i<ui.discardPile.childElementCount;i++){
							if(ui.discardPile.childNodes[i].name==event.card.name) return false;
						}
						if(game.hasPlayer(function(current){
							return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current);
						})){
							return true;
						}
					}
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var prompt2='为'+get.translation(trigger.card)+'增加一个目标'
					player.chooseTarget(get.prompt('yidian'),function(card,player,target){
						var player=_status.event.player;
						if(_status.event.targets.contains(target)) return false;
						return lib.filter.targetEnabled2(_status.event.card,player,target);
					}).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					}).set('targets',trigger.targets).set('card',trigger.card);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets){
						player.logSkill('yidian',event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
				ai:{
					expose:0.25,
				},
			},
			//二袁
			neifa:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					_status.noclearcountdown=true;
					if(game.hasPlayer(function(current){
						return current.countGainableCards(player,'ej')>0;
					})){
						player.chooseControl('cancel2').set('choiceList',[
							'摸两张牌，然后弃置一张牌',
							'获得场上的一张牌，然后弃置一张牌',
						]).set('prompt',get.prompt('neifa')).set('ai',function(){
							if(game.hasPlayer(function(current){
								var att=get.attitude(player,current);
								if(att==0) return false;
								if(att<0) return current.countCards('e',function(card){
									return get.value(card,current)>5;
								})>0;
								return current.countCards('ej',function(card){
									return get.position(card)=='j'||get.value(card,current)<=0;
								})>0;
							})) return 1;
							return 0;
						});
					}
					else{
						player.chooseControl('ok','cancel2').set('prompt',get.prompt2('neifa'));
					}
					'step 1'
					if(result.control=='cancel2'){
						delete _status.noclearcountdown;
						if(!_status.noclearcountdown){
							game.stopCountChoose();
						}
						event.finish();
						return;
					}
					else if(result.index==1){
						player.chooseTarget('请选择一名角色，获得其装备区或判定区内的一张牌',true,function(card,player,target){
							return target.countGainableCards(player,'ej')>0;
						}).set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							if(att>0&&target.countCards('ej',function(card){
								return get.position(card)=='j'||get.value(card,target)<=0;
							})) return 2*att;
							else if(att<0&&target.countCards('e',function(card){
								return get.value(card,target)>5;
							})) return -att;
							return -1;
						});
					}
					else{
						delete _status.noclearcountdown;
						if(!_status.noclearcountdown){
							game.stopCountChoose();
						}
						player.logSkill('neifa');
						player.draw(2);
						event.goto(3)
					}
					'step 2'
					delete _status.noclearcountdown;
					if(!_status.noclearcountdown){
						game.stopCountChoose();
					}
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('neifa',target);
						player.gainPlayerCard(target,'ej',true);
					}
					'step 3'
					player.chooseToDiscard(true,'he').set('ai',function(cardx){
						var player=_status.event.player;
						var num=0;
						var hs=player.getCards('h');
						var muniu=player.getEquip('muniu');
						var subs=[];
						if(muniu&&muniu.cards) hs=hs.concat(muniu.cards);
						if(get.type(cardx)=='basic'){
							var shas=hs.filter(function(card){
								return card!=cardx&&get.name(card,player)=='sha'&&player.hasValueTarget(card);
							});
							var numx=player.countCards('h',function(card){
								return get.type(card,player)!='basic';
							});
							num+=Math.min(numx,Math.max(0,shas.length-player.getCardUsable('sha')))*0.7;
							num+=Math.min(player.getCardUsable('sha')+numx,shas.filter(function(card){
								return game.countPlayer(function(current){
									return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
								})>1;
							}).length)*1.1;
							var taos=Math.min(player.maxHp-player.hp,hs.filter(function(card){
								return cardx!=card&&get.name(card,player)=='tao';
							}).length);
							num+=taos*player.getDamagedHp()*1.2;
						}
						else{
							var numx=Math.sqrt(Math.min(5,player.countCards('h',function(card){
								return get.type(card,player)=='basic';
							})));
							if(numx) num+=numx*Math.min(2,hs.filter(function(card){
								if(card==cardx||get.type(card)!='equip'||!player.hasUseTarget(card)) return false;
								subs.add(get.subtype(card));
								return true;
							}).length)*(2.5+player.countCards('e'))/2.5;
							num+=hs.filter(function(card){
								return card!=cardx&&get.type2(card)=='trick'&&player.hasValueTarget(card);
							}).length*0.65;
						}
						if(get.position(cardx)=='e'&&cardx.name!='muniu'&&subs.contains(get.subtype(card))) num+=3;
						return num*1.5-get.value(cardx);
					});
					'step 4'
					if(result.bool&&result.cards&&result.cards.length){
						var name=get.type(result.cards[0])=='basic'?'neifa_basic':'neifa_nobasic';
						player.addTempSkill(name);
						var num=Math.min(5,player.countCards('h',function(cardx){
							return (name=='neifa_basic')!=(get.type(cardx,player)=='basic')
						}));
						if(num>0) player.addMark(name,num,false);
					}
				},
				ai:{
					threaten:3,
				},
			},
			neifa_basic:{
				mark:true,
				marktext:'伐',
				onremove:true,
				intro:{
					name:'内伐 - 基本牌',
					content:'本回合内不能使用锦囊牌和装备牌，且使用【杀】选择目标时可以多选择1个目标，且使用【杀】的目标次数上限+#。',
				},
				mod:{
					cardEnabled:function(card,player){
						if(['trick','equip'].contains(get.type(card,'trick'))) return false;
					},
					cardSavable:function(card,player){
						if(['trick','equip'].contains(get.type(card,'trick'))) return false;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha'){
							return num+player.countMark('neifa_basic');
						}
					},
				},
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
						return !event.targets.contains(current)&&player.canUse(event.card,current);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('neifa'),'为'+get.translation(trigger.card)+'额外指定一个目标',function(card,player,target){
						return !_status.event.sourcex.contains(target)&&player.canUse(_status.event.card,target);
					}).set('sourcex',trigger.targets).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					}).set('card',trigger.card);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('neifa',event.targets);
					trigger.targets.addArray(event.targets);
				},
			},
			neifa_nobasic:{
				trigger:{player:'useCard2'},
				direct:true,
				mark:true,
				marktext:'伐',
				onremove:true,
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card)=='basic') return false;
					},
					cardSavable:function(card,player){
						if(get.type(card)=='basic') return false;
					},
				},
				intro:{
					name:'内伐 - 非基本牌',
					content:'本回合内不能使用基本牌，且使用普通锦囊牌选择目标时可以多选择1个目标，且本回合的出牌阶段内前两次使用装备牌时摸#张牌。'
				},
				filter:function(event,player){
					if(get.type(event.card)!='trick') return false;
					if(event.targets&&event.targets.length>0) return true;
					var info=get.info(event.card);
					if(info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						if(game.hasPlayer(function(current){
							return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current);
						})){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var prompt2='为'+get.translation(trigger.card)+'增加或减少一个目标'
					player.chooseTarget(get.prompt('neifa'),function(card,player,target){
						var player=_status.event.player;
						if(_status.event.targets.contains(target)) return true;
						return lib.filter.targetEnabled2(_status.event.card,player,target)&&lib.filter.targetInRange(_status.event.card,player,target);
					}).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player)*(_status.event.targets.contains(target)?-1:1);
					}).set('targets',trigger.targets).set('card',trigger.card);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets){
						player.logSkill('neifa',event.targets);
						if(trigger.targets.contains(event.targets[0])) trigger.targets.removeArray(event.targets);
						else trigger.targets.addArray(event.targets);
					}
				},
				group:'neifa_use',
				ai:{
					reverseOrder:true,
					skillTagFilter:function(player){
						if(player.storage.counttrigger&&player.storage.counttrigger.neifa_use>=2) return false;
					},
					effect:{
						target:function(card,player,target){
							if((!player.storage.counttrigger||!player.storage.counttrigger.neifa_use||player.storage.counttrigger.neifa_use<2)&&player==target&&get.type(card)=='equip') return [1,3];
						},
					},
				},
			},
			neifa_use:{
				audio:'neifa',
				usable:2,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					return get.type(event.card)=='equip'&&player.countMark('neifa_nobasic')>0;
				},
				content:function(){
					player.draw(player.countMark('neifa_nobasic'));
				},
			},
			//许靖
			yuxu:{
				audio:2,
				trigger:{player:'useCardEnd'},
				filter:function(event,player){
					if(event!=player.getLastUsed()) return false;
					var	evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					var history=player.getHistory('useCard',function(evtt){
						return evtt.getParent('phaseUse')==evt;
					});
					var index=history.indexOf(event);
					if(index==0) return true;
					return history[index-1].yuxu!=true&&player.countCards('he')>0;
				},
				content:function(){
					trigger.yuxu=true;
					player.addTempSkill('yuxu2');
					player.draw();
				},
			},
			yuxu2:{
				trigger:{player:'useCardEnd'},
				direct:true,
				charlotte:true,
				locked:true,
				filter:function(event,player){
					if(event!=player.getLastUsed()) return false;
					var	evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					var history=player.getHistory('useCard',function(evtt){
						return evtt.getParent('phaseUse')==evt;
					});
					var index=history.indexOf(event);
					if(index<1) return false;
					return history[index-1].yuxu==true&&player.countCards('he')>0;
				},
				content:function(){
					player.chooseToDiscard('he',true);
				},
			},
			xjshijian:{
				audio:2,
				trigger:{global:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					if(event.player==player) return false;
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=event.player) return false;
					return event.player.getHistory('useCard',function(evtt){
						return evtt.getParent('phaseUse')==evt;
					}).indexOf(event)==1&&player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.chooseToDiscard('he',get.prompt('xjshijian',trigger.player),'弃置一张牌并令其获得技能〖誉虚〗至回合结束');
					next.set('logSkill',['xjshijian',trigger.player]);
					next.set('check',get.attitude(player,trigger.player)>0&&trigger.player.countCards('h')>2);
					next.ai=function(card){
						if(_status.event.check) return 5-get.value(card);
						return -1;
					};
					'step 1'
					if(result.bool) trigger.player.addTempSkill('yuxu');
				},
				ai:{
					expose:0.25,
				},
			},
			//新1v1
			yanhuo:{
				audio:2,
				trigger:{player:'die'},
				forceDie:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				direct:true,
				skillAnimation:true,
				animationColor:'thunder',
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('yanhuo'),function(card,player,target){
						return target!=player&&target.countDiscardableCards(player,'he')>0
					}).set('forceDie',true).ai=function(target){
						return -target.countCards('he')*get.attitude(player,target);
					};
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('yanhuo',target);
						event.count=player.countCards('he');
					}
					else event.finish()
					'step 2'
					if(target.countDiscardableCards(player,'he')){
						player.line(target);
						player.discardPlayerCard(target,'he',true).set('forceDie',true);
						event.count--;
						if(event.count) event.redo();
					}
				},
			},
			mouzhu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					target.chooseCard('he','交给'+get.translation(player)+'一张牌',true);
					'step 1'
					player.gain(result.cards,target,'giveAuto');
					'step 2'
					if(player.countCards('h')<=target.countCards('h')){
						event.finish();
						return;
					}
					var list=[];
					if(target.canUse('sha',player,false)) list.push('sha');
					if(target.canUse('juedou',player,false)) list.push('juedou');
					if(!list.length) event.finish();
					else if(list.length==1) event._result={control:list[0]};
					else target.chooseControl(list).set('prompt','对'+get.translation(player)+'使用一张【杀】或【决斗】。').ai=function(){
						return get.effect(player,{name:'sha'},target,target)>=get.effect(player,{name:'juedou'},target,target)?'sha':'juedou';
					};
					'step 3'
					target.useCard({name:result.control,isCard:true},player,'noai');
				},
				ai:{
					order:7,
					result:{
						target:-1.2,
						player:function(player,target){
							if(target.countCards('h')-player.countCards('h')>1) return 1;
							if(get.damageEffect(target,player,player,player)>0) return 1;
							if(player.hp>3||player.countCards('h','sha')&&player.countCards('h','shan')) return 0;
							if(player.hp>2) return -1.1;
							return -2;
						},
					},
				},
			},
			niluan:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player!=player&&(event.player.hp>player.hp||event.player.getHistory('useCard',function(card){
						return card.card.name=='sha';
					}).length>0);
				},
				direct:true,
				content:function(){
					var next=player.chooseToUse();
					next.logSkill='niluan';
					next.set('openskilldialog',get.prompt2('niluan'));
					next.set('norestore',true);
					next.set('_backupevent','niluanx');
					next.set('custom',{
						add:{},
						replace:{window:function(){}}
					});
					next.backup('niluanx');
				},
			},
			niluanx:{
				viewAs:{name:'sha'},
				filterCard:{color:'black'},
				position:'hes',
				selectCard:1,
				check:function(card){return 5-get.value(card)},
			},
			cuorui:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					return player.maxHp>0&&!get.is.single()&&(event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					player.draw(Math.min(5,player.maxHp),false);
				},
				group:'cuorui_nojudge',
				subSkill:{
					nojudge:{
						trigger:{
							player:'phaseJudgeBefore',
						},
						forced:true,
						audio:'cuorui',
						filter:function(event,player){
							return !player.storage.cuorui&&(get.is.single()||player.countCards('j'));
						},
						content:function(){
							player.storage.cuorui=true;
							trigger.cancel();
							game.log(player,'跳过了','#g判定阶段');
						},
					},
				},
			},
			liewei:{
				audio:2,
				trigger:{source:'dieAfter'},
				frequent:true,
				content:function(){
					player.draw(3);
				},
			},
			//蒋干
			weicheng:{
				audio:2,
				trigger:{global:'gainAfter'},
				//forced:true,
				frequent:true,
				filter:function(event,player){
					if(event.player!=player&&player.hp>player.countCards('h')){
						var evt=event.getl(player);
						return evt&&evt.hs&&evt.hs.length>0;
					}
					return false;
				},
				preHidden:true,
				content:function(){
					player.draw();
				},
			},
			daoshu:{
				audio:2,
				enable:'phaseUse',
				filterTarget:function(c,p,t){
					return t!=p&&t.countGainableCards(p,'h')>0;
				},
				filter:function(e,p){
					return !p.hasSkill('daoshu_used')
				},
				content:function(){
					'step 0'
					player.chooseControl(lib.suit).set('prompt','请选择一个花色').ai=function(){return lib.suit.randomGet()};
					'step 1'
					event.suit=result.control;
					player.popup(event.suit+2);
					game.log(player,'选择了',event.suit+2);
					player.gainPlayerCard(target,true,'h','visibleMove');
					'step 2'
					if(result.bool){
						var suit2=get.suit(result.cards[0]);
						if(suit2==event.suit){
							target.damage();
							event.finish();
						}
						else{
							player.addTempSkill('daoshu_used','phaseUseEnd');
							if(player.countCards('h',function(card){return get.suit(card)!=suit2})==0){
								player.showHandcards();
								event.finish();
							}
							else player.chooseCard('h',true,function(card){
								return get.suit(card)!=_status.event.suit2
							},'交给'+get.translation(target)+'一张不为'+get.translation(suit2)+'花色的牌').set('suit2',suit2);
						}
					}
					else event.finish();
					'step 3'
					player.give(result.cards,target,true);
				},
				ai:{
					order:1,
					result:{
						target:-1,
					},
				},
				subSkill:{
					used:{sub:true},
				},
			},
			//统率三军诸葛瑾和文聘
			"zhenwei_three":{
				global:"zhenwei_three_others",
				subSkill:{
					others:{
						mod:{
							globalTo:function (from,to,distance){
								if(from.side!=to.side&&game.hasPlayer(function(current){
									return current!=to&&current.side==to.side&&current.hasSkill('zhenwei_three');
								}))return distance+1;
							},
						},
						sub:true,
					},
				},
			},
			"huanshi_three":{
				audio:"huanshi",
				trigger:{
					global:"judge",
				},
				filter:function (event,player){
					return player.countCards('hes')>0&&player.side==event.player.side;
				},
				direct:true,
				content:function (){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+get.prompt('huanshi_three'),'hes',function(card){
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result-get.value(card)/2;
						}
						else{
							return -result-get.value(card)/2;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight','huanshi_three','noOrdering');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card){
								if(card.clone){
									card.clone.classList.remove('thrownhighlight');
								}
							},trigger.player.judging[0]);
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
						game.delay(2);
					}
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1,
					},
				},
			},
			//英文版特典武将凯撒
			zhengfu:{
				trigger:{
					player:"useCardToPlayered",
				},
				check:function (event,player){
					return get.attitude(player,event.target)<0;
				},
				filter:function(event,player){
					return event.card.name=='sha';
				},
				logTarget:"target",
				line:false,
				content:function (){
					'step 0'
					player.line(trigger.target,{color:[220, 90, 139]});
					player.chooseControl(['basic','trick','equip']).set('ai',function(){
						var player=_status.event.target;
						if(!player.countCards('h','sha')&&player.countCards('h','shan')) return 'trick';
						return 'basic';
					}).set('prompt','请选择一种牌的类别').set('target',trigger.target);
					'step 1'
					trigger.target.chooseCard('he','交给'+get.translation(player)+'一张'+get.translation(result.control)+'牌，否则此【杀】不可被闪避。',function(card){
						return get.type(card,'trick')==result.control;
					}).set('ai',function(card){
						var num=_status.event.num;
						if(num==0) return 0;
						if(card.name=='shan') return num>1?2:0;
						return 8-get.value(card);
					}).set('num',trigger.target.countCards('h','shan'))
					'step 2'
					if(result.bool){
						var cards=result.cards;
						player.gain(cards,trigger.target,'giveAuto');
					}
					else{
						trigger.getParent().directHit.add(trigger.target);
						game.delay();
					}
				},
			},
			//变权移植
			wanwei:{
				trigger:{target:['rewriteGainResult','rewriteDiscardResult']},
				direct:true,
				preHidden:true,
				filter:function(event,player){
					return event.player!=player;
				},
				audio:2,
				content:function(){
					'step 0'
					var prompt='即将失去'+get.translation(trigger.result.cards)+'，是否发动【挽危】？';
					var next=player.choosePlayerCard(player,prompt,trigger.position);
					next.set('ai',function(button){
						return 20-get.value(button.link);
					});
					next.filterButton=trigger.filterButton;
					next.selectButton=trigger.result.cards.length;
					next.setHiddenSkill('wanwei');
					'step 1'
					if(result.bool){
						player.logSkill('wanwei');
						trigger.result.cards=result.links.slice(0);
						trigger.result.links=result.links.slice(0);
						trigger.cards=result.links.slice(0);
						trigger.untrigger();
					}
				}
			},
			gzjili:{
				mod:{
					aiOrder:function(player,card,num){
						if(player.isPhaseUsing()&&get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts')){
							var range0=player.getAttackRange();
							var range=0;
							var info=get.info(card);
							if(info&&info.distance&&info.distance.attackFrom){
								range-=info.distance.attackFrom;
							}
							if(player.getEquip(1)){
								var num=0;
								var info=get.info(player.getEquip(1));
								if(info&&info.distance&&info.distance.attackFrom){
									num-=info.distance.attackFrom;
								}
								range0-=num;
							}
							range0+=range;
							if(range0==(player.getHistory('useCard').length+player.getHistory('respond').length+2)&&player.countCards('h',function(cardx){
								return get.subtype(cardx)!='equip1'&&player.getUseValue(cardx)>0;
							})) return num+10;
						}
					},
				},
				trigger:{player:['useCard','respond']},
				frequent:true,
				locked:false,
				preHidden:true,
				filter:function(event,player){
					return player.getHistory('useCard').length+player.getHistory('respond').length==player.getAttackRange();
				},
				audio:2,
				content:function(){
					player.draw(player.getHistory('useCard').length+player.getHistory('respond').length);
				},
				ai:{
					threaten:1.8,
					effect:{
						target:function(card,player,target,current){
							if(player!=target||!player.isPhaseUsing()) return;
							if(get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts')){
								var range0=player.getAttackRange();
								var range=0;
								var info=get.info(card);
								if(info&&info.distance&&info.distance.attackFrom){
									range-=info.distance.attackFrom;
								}
								if(player.getEquip(1)){
									var num=0;
									var info=get.info(player.getEquip(1));
									if(info&&info.distance&&info.distance.attackFrom){
										num-=info.distance.attackFrom;
									}
									range0-=num;
								}
								range0+=range;
								var delta=range0-(player.getHistory('useCard').length+player.getHistory('respond').length);
								if(delta<0) return;
								var num=player.countCards('h',function(card){
									return (get.cardtag(card,'gifts')||get.subtype(card)!='equip1')&&player.getUseValue(card)>0;
								});
								if(delta==2&&num>0) return [1,3];
								if(num>=delta) return 'zeroplayertarget';
							}
						},
					},
				}
			},
			xiongsuan:{
				audio:2,
			},
			diancai:{
				audio:2,
			},
			diaodu:{
				audio:2,
			},
			zhengbi:{
				audio:2,
			},
			fengying:{
				audio:2,
			},
			//新服曹笨
			xinshanjia:{
				group:["xinshanjia_count"],
				locked:false,
				mod:{
					aiValue:function(player,card,num){
						if((player.storage.xinshanjia||0)<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')){
							return num/player.hp;
						}
					},
				},
				subSkill:{
					count:{
						forced:true,
						silent:true,
						popup:false,
						trigger:{
							player:"loseEnd",
						},
						filter:function(event,player){
							return event.cards2&&event.cards2.length>0;
						},
						content:function (){
							lib.skill.xinshanjia.sync(player);
						},
					},
				},
				audio:"shanjia",
				trigger:{
					player:"phaseUseBegin",
				},
				intro:{
					content:"本局游戏内已失去过#张装备牌",
				},
				frequent:true,
				sync:function(player){
					var history=player.actionHistory;
					var num=0;
					for(var i=0;i<history.length;i++){
						for(var j=0;j<history[i].lose.length;j++){
							if(history[i].lose[j].parent.name=='useCard') continue;
							num+=history[i].lose[j].cards2.filter(function(card){
								return get.type(card,false)=='equip';
							}).length;
						}
					}
					player.storage.xinshanjia=num;
					if(num>0) player.markSkill('xinshanjia');
				},
				content:function (){
					'step 0'
					player.draw(3);
					'step 1'
					lib.skill.xinshanjia.sync(player);
					var num=3-player.storage.xinshanjia;
					if(num>0){
						player.chooseToDiscard('he',true,num).ai=get.disvalue;
					}
					'step 2'
					var bool=true;
					if(result.cards){
						for(var i=0;i<result.cards.length;i++){
							if(['basic','trick'].contains(get.type(result.cards[i],'trick',result.cards[i].original=='h'?player:false))){
								bool=false;break;
							}
						}
					}
					if(bool){
						player.chooseUseTarget({name:'sha'},'是否视为使用一张【杀】？',false,'nodistance');
					}
				},
				ai:{
					threaten:3,
					noe:true,
					reverseOrder:true,
					skillTagFilter:function(player){
						if(player.storage.xinshanjia>2) return false;
					},
					effect:{
						target:function(card,player,target){
							if(player.storage.xinshanjia<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						},
					},
				},
			},
			//OL马超
			ol_shichou:{
				audio:2,
				trigger:{
					player:'useCard2',
				},
				direct:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha';//&&player.isDamaged();
				},
				content:function(){
					'step 0'
					var num=Math.max(1,player.getDamagedHp());
					player.chooseTarget('是否发动【誓仇】，令至多'+num+'名其他角色也成为此【杀】的目标？',[1,num],function(card,player,target){
						var evt=_status.event.getTrigger();
						return target!=player&&!evt.targets.contains(target)&&lib.filter.targetEnabled2(evt.card,player,target)&&lib.filter.targetInRange(evt.card,player,target);
					}).ai=function(target){
						return get.effect(target,{name:'sha'},_status.event.player);
					};
					'step 1'
					if(result.bool&&result.targets&&result.targets.length){
						var targets=result.targets;
						player.logSkill('ol_shichou',targets);
						player.line(targets,trigger.card.nature);
						trigger.targets.addArray(targets);
						trigger.ol_shichou=true;
						player.addTempSkill('ol_shichou2');
					}
				},
			},
			ol_shichou2:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				onremove:true,
				filter:function(event,player){
					return event.ol_shichou==true&&player.countMark('ol_shichou2')<3&&!player.getHistory('sourceDamage',function(evt){
						return evt.card==event.card;
					}).length&&event.cards.filterInD().length>0;
				},
				content:function(){
					player.addMark('ol_shichou2',1,false);
					player.gain(trigger.cards.filterInD(),'gain2');
				},
			},
			//新大小乔
			new_xingwu:{
				audio:"xingwu",
				trigger:{
					player:"phaseDiscardBegin",
				},
				direct:true,
				intro:{
					content:"expansion",
					markcount:'expansion',
					onunmark:function(storage,player){
						player.removeAdditionalSkill('new_luoyan');
					},
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseCard('he',get.prompt('new_xingwu'),'将一张牌置于武将牌上作为“舞”').set('ai',function(card){
						if(_status.event.goon) return 20-get.value(card);
						return 7-get.value(card);
					}).set('goon',player.needsToDiscard()||player.getStorage('new_xingwu').length>1);
					'step 1'
					if(result.bool){
						player.logSkill('new_xingwu');
						var cards=result.cards;
						player.addToExpansion(cards,player,'give').gaintag.add('new_xingwu');
						if(player.hasSkill('new_luoyan')) player.addAdditionalSkill('new_luoyan',['oltianxiang','liuli']);
					}
					else event.finish();
					'step 2'
					game.delayx();
					var choices=[];
					event.addIndex=0;
					if(player.getExpansions('new_xingwu').length>2){
						choices.push('将三张“星舞”牌置入弃牌堆');
					}
					else event.addIndex++;
					if(player.countCards('h',function(card){
						return lib.filter.cardDiscardable(card,player,'new_xingwu');
					})>1) choices.push('弃置两张手牌并将武将牌翻面');
					if(choices.length){
						player.chooseControl('cancel2').set('prompt','星舞：是否发射核弹？').set('choiceList',choices).set('ai',function(){
							var player=_status.event.player;
							if(player.getExpansions('new_xingwu').length>2) return 0;
							if(player.isTurnedOver()||player.identity=='fan'||player.getEnemies().length==1) return 0;
							return 'cancel2';
						});
					}
					else event.finish();
					'step 3'
					if(result.control!='cancel2'){
						var num=result.index+event.addIndex;
						if(num==1){
							event.goto(5);
							return;
						}
						if(player.getExpansions('new_xingwu').length>3) player.chooseButton(['请选择要移去的“星舞”牌',player.getExpansions('new_xingwu')],3,true);
						else event._result={
							bool:true,
							links:player.getExpansions('new_xingwu').slice(0),
						}
					}
					else event.finish();
					'step 4'
					if(result.bool&&result.links&&result.links.length==3){
						var cards=result.links;
						player.loseToDiscardpile(cards);
						event.goto(6);
					}
					else event.finish();
					'step 5'
					player.chooseToDiscard(true,'h',2);
					player.turnOver();
					'step 6'
					player.chooseTarget('请选择【星舞】的目标','弃置其装备区内的所有牌。然后对其造成两点伤害（目标为女性角色则改为1点）',true,lib.filter.notMe).set('ai',function(target){
						return -get.attitude(_status.event.player,target)*Math.sqrt(4+target.countCards('e',function(card){
							return get.value(card,target)>0;
						}))*(target.hasSex('female')?1:2);
					});
					'step 7'
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,'green');
						var num=target.countCards('e');
						if(num) player.discardPlayerCard(target,'e',num,true);
						target.damage(target.hasSex('female')?1:2);
					}
				},
				ai:{
					threaten:1.5,
				},
			},
			new_luoyan:{
				init:function(player){
					if(player.getStorage('new_xingwu').length) player.addAdditionalSkill('new_luoyan',['oltianxiang','liuli']);
				},
				onremove:function(player){
					player.removeAdditionalSkill('new_luoyan');
				},
				derivation:['oltianxiang','liuli'],
			},
			//新孙鲁育
			"new_meibu":{
				audio:"meibu",
				trigger:{
					global:"phaseUseBegin",
				},
				filter:function (event,player){
					return event.player!=player&&event.player.isAlive()&&player.countCards('he')>0&&event.player.inRange(player);
				},
				direct:true,
				derivation:["new_zhixi"],
				checkx:function (event,player){
					if(get.attitude(player,event.player)>=0) return false;
					var e2=player.getEquip(2);
					if(e2){
						if(e2.name=='tengjia') return true;
						if(e2.name=='bagua') return true;
					}
					return event.player.countCards('h')>event.player.hp;
				},
				content:function (){
					"step 0"
					var check=lib.skill.new_meibu.checkx(trigger,player);
					player.chooseToDiscard(get.prompt2('new_meibu',trigger.player),'he').set('ai',function(card){
						if(_status.event.check) return 6-get.value(card);
						return 0;
					}).set('check',check).set('logSkill','new_meibu');
					"step 1"
					if(result.bool){
						var target=trigger.player;
						var card=result.cards[0];
						player.line(target,'green');
						target.addTempSkill('new_zhixi','phaseUseEnd');
						if(card.name!='sha'&&get.type(card)!='trick'&&get.color(card)!='black'){
							target.addTempSkill('new_meibu_range','phaseUseEnd');
							target.storage.meibu=player;
						}
						target.markSkillCharacter('new_meibu',player,'魅步','锁定技，出牌阶段，你至多可使用X张牌，你使用了锦囊牌后不能再使用牌（X为你的体力值）。');
					}
				},
				ai:{
					expose:0.2,
				},
				subSkill:{
					range:{
						mod:{
							globalFrom:function (from,to,num){
								if(to==from.storage.meibu){
									return -Infinity;
								}
							},
						},
						sub:true,
					},
				},
			},
			"new_mumu":{
				audio:"mumu",
				trigger:{
					player:"phaseUseBegin",
				},
				direct:true,
				content:function (){
					'step 0'
					player.chooseTarget(get.prompt('new_mumu'),'弃置一名角色装备区内的一张牌，或者获得一名角色装备区内的防具牌',function(card,player,target){
						if(target==player) return target.getEquip(2)!=undefined;
						return target.countCards('e')>0;
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target)
						if(target.getEquip(2)&&player.isEmpty(2)){
							return -2*att;
						}
						return -att;
					});
					'step 1'
					if(result.bool&&result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill('new_mumu',event.target);
						player.line(event.target,'green');
						var e=event.target.getEquip(2);
						event.e=e;
						if(target==player) event.choice='获得一张防具牌';
						else if(e){
							player.chooseControl('弃置一张装备牌','获得一张防具牌').set('ai',function(){
								if(_status.event.player.getEquip(2)){
									return '弃置一张装备牌';
								}
								return '获得一张防具牌';
							});
						}
						else{
							event.choice='弃置一张装备牌';
						}
					}else event.finish();
					'step 2'
					var choice=event.choice||result.control;
					if(choice=='弃置一张装备牌'){
						player.discardPlayerCard(event.target,'e',true);
					}
					else{
						if(event.e){
							player.gain(event.e,event.target,'give');
							player.addTempSkill('new_mumu2')
						}
					}
				},
			},
			"new_zhixi":{
				mod:{
					cardEnabled:function(card,player){
						if(player.storage.new_zhixi2||player.countMark('new_zhixi')>=player.hp) return false;
					},
					cardUsable:function(card,player){
						if(player.storage.new_zhixi2||player.countMark('new_zhixi')>=player.hp) return false;
					},
					cardRespondable:function(card,player){
						if(player.storage.new_zhixi2||player.countMark('new_zhixi')>=player.hp) return false;
					},
				},
				trigger:{
					player:"useCard1",
				},
				forced:true,
				popup:false,
				onremove:true,
				firstDo:true,
				onremove:function(player){
					player.unmarkSkill('new_meibu');
					delete player.storage.new_zhixi;
					delete player.storage.new_zhixi2;
				},
				content:function(){
					player.addMark('new_zhixi',1,false);
					if(get.type2(trigger.card)=='trick') player.storage.new_zhixi2=true;
				},
				ai:{presha:true,pretao:true,nokeep:true},
			},
			"new_mumu2":{
				mod:{
					cardEnabled:function(card){
						if(card.name=='sha') return false;
					},
				},
			},
			qingzhong:{
				audio:2,
			},
			qingzhongx:{
				audio:'weijing',
				trigger:{player:'phaseUseBegin'},
				check:function(event,player){
					if(game.hasPlayer(function(current){
						return current!=player&&current.isMinHandcard()&&get.attitude(player,current)>0;
					})){
						return true;
					}
					if(player.countCards('h')<=2) return true;
					// if(player.countCards('h')<=3&&!player.countCards('h','shan')) return true;
					//if(player.countCards('h',{type:'basic'})<=1) return true;
					return false;
				},
				content:function(){
					player.draw(2);
					player.addTempSkill('qingzhongx_give');
				},
				subSkill:{
					give:{
						trigger:{player:'phaseUseEnd'},
						filter:function(event,player){
							return !player.isMinHandcard(true);
						},
						audio:'weijing',
						forced:true,
						content:function(){
							'step 0'
							var list=game.filterPlayer(function(current){
								return current.isMinHandcard();
							});
							if(list.length==1){
								if(list[0]!=player){
									player.line(list[0],'green');
									player.swapHandcards(list[0]);
								}
								event.finish();
							}
							else{
								player.chooseTarget(true,'清忠：选择一名手牌最少的角色与其交换手牌',function(card,player,target){
									return target.isMinHandcard();
								}).set('ai',function(target){
									return get.attitude(_status.event.player,target);
								});
							}
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								if(target!=player){
									player.line(target,'green');
									player.swapHandcards(target);
								}
							}
						}
					}
				}
			},
			weijing:{
				audio:2,
				group:['weijing_sha','weijing_shan'],
				subSkill:{
					sha:{
						audio:'qingzhong',
						enable:'chooseToUse',
						viewAs:{name:'sha',isCard:true},
						filterCard:function(){return false},
						viewAsFilter:function(player){
							if(player.hasSkill('weijing_disable')) return false;
						},
						selectCard:-1,
						mark:false,
						precontent:function(){
							player.addTempSkill('weijing_disable','roundStart');
						},
						prompt:'视为使用一张杀',
						ai:{
							order:function(){
								var player=_status.event.player;
								if(!player.hasShan()&&!game.hasPlayer(function(current){
									return player.canUse('sha',current)&&current.hp==1&&get.effect(current,{name:'sha'},player,player)>0;
								})){
									return 0;
								}
								return 2.95;
							},
							skillTagFilter:function(player,tag,arg){
								if(player.hasSkill('weijing_disable')) return false;
								if(arg!='use') return false;
							},
							respondSha:true,
						}
					},
					shan:{
						audio:'qingzhong',
						enable:'chooseToUse',
						viewAs:{name:'shan',isCard:true},
						mark:false,
						filterCard:function(){return false},
						viewAsFilter:function(player){
							if(player.hasSkill('weijing_disable')) return false;
							return true;
						},
						onuse:function(event,player){
							player.addTempSkill('weijing_disable','roundStart');
						},
						selectCard:-1,
						prompt:'视为使用一张闪',
						ai:{
							order:function(){
								var player=_status.event.player;
								if(player.hasSkill('qingzhongx_give')) return 2.95;
								return 3.15;
							},
							skillTagFilter:function(player){
								if(player.hasSkill('weijing_disable')) return false;
							},
							respondShan:true,
						}
					},
					disable:{
						mark:true,
						intro:{
							content:'本轮已发动'
						}
					}
				}
			},
			zishu:{
				audio:2,
				locked:true,
				subSkill:{
					discard:{
						trigger:{global:'phaseEnd'},
						audio:"zishu",
						forced:true,
						filter:function(event,player){
							if(_status.currentPhase!=player){
								var he=player.getCards('h');
								var bool=false;
								player.getHistory('gain',function(evt){
									if(!bool&&evt&&evt.cards){
										for(var i=0;i<evt.cards.length;i++){
											if(he.contains(evt.cards[i])) bool=true;break;
										}
									}
								});
								return bool;
							}
							return false;
						},
						content:function(){
							var he=player.getCards('h');
							var list=[];
							player.getHistory('gain',function(evt){
								if(evt&&evt.cards){
									for(var i=0;i<evt.cards.length;i++){
										if(he.contains(evt.cards[i])) list.add(evt.cards[i]);
									}
								}
							});
							player.$throw(list,1000);
							player.lose(list,ui.discardPile,'visible');
							game.log(player,'将',list,'置入弃牌堆');
						}
					},
					mark:{
						trigger:{
							player:'gainBegin',
							global:'phaseBeginStart',
						},
						silent:true,
						filter:function(event,player){
							return event.name!='gain'||player!=_status.currentPhase;
						},
						content:function(){
							if(trigger.name=='gain') trigger.gaintag.add('zishu');
							else player.removeGaintag('zishu');
						},
					},
					draw:{
						trigger:{player:'gainAfter'},
						audio:"zishu",
						forced:true,
						filter:function(event,player){
							if(_status.currentPhase!=player) return false;
							return event.getParent(2).name!='zishu_draw';
						},
						content:function(){
							player.draw('nodelay');
						}
					}
				},
				ai:{
					threaten:1.2,
					nogain:1,
					skillTagFilter:function(player){
						return player!=_status.currentPhase;
					},
				},
				group:['zishu_draw','zishu_discard','zishu_mark']
			},
			xinyingyuan:{
				audio:'yingyuan',
				trigger:{player:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					var type=get.type(event.card,'trick');
					return player.getHistory('custom',function(evt){
						return evt.xinyingyuan_name==type;
					}).length==0;
				},
				content:function(){
					'step 0'
					event.type=get.type(trigger.card,'trick');
					player.chooseTarget(get.prompt('xinyingyuan'),'令一名其他角色从牌堆中获得一张'+get.translation(event.type)+'牌',function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(att<3) return 0;
						if(target.hasJudge('lebu')) att/=2;
						if(target.hasSkillTag('nogain')) att/=10;
						return att/(1+get.distance(player,target,'absolute'));
					});
					'step 1'
					if(result.bool){
						player.logSkill('xinyingyuan',result.targets[0]);
						var card=get.cardPile2(function(cardx){
							return get.type(cardx,'trick')==event.type;
						});
						if(card) result.targets[0].gain(card,'log','gain2');
						player.getHistory('custom').push({xinyingyuan_name:event.type});
					}
				},
			},
			yingyuan:{
				audio:2,
				trigger:{player:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					if(player.getHistory('custom',function(evt){
						return evt.yingyuan_name==event.card.name;
					}).length>0) return false;
					return event.cards.filterInD().length>0
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('yingyuan'),'将'+get.translation(trigger.cards)+'交给一名其他角色',function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						if(target.hasJudge('lebu')) return 0;
						var att=get.attitude(_status.event.player,target);
						if(att<3) return 0;
						if(target.hasSkillTag('nogain')) att/=10;
						if(target.hasSha()&&_status.event.sha){
							att/=5;
						}
						if(event.wuxie&&target.needsToDiscard(1)){
							att/=5;
						}
						return att/(1+get.distance(player,target,'absolute'));
					}).set('sha',trigger.cards[0].name=='sha').set('wuxie',trigger.cards[0].name=='wuxie');
					'step 1'
					if(result.bool){
						player.logSkill('yingyuan',result.targets[0]);
						result.targets[0].gain(trigger.cards.filterInD(),'gain2');
						player.getHistory('custom').push({yingyuan_name:trigger.card.name});
					}
				},
			},
			shuimeng:{
				audio:true,
				trigger:{player:'phaseUseAfter'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h');
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('shuimeng'),function(card,player,target){
						return player.canCompare(target);
					}).set('ai',function(target){
						if(!_status.event.goon) return 0;
						return -get.attitude(_status.event.player,target);
					}).set('goon',player.needsToDiscard()||player.hasCard(function(card){
						var val=get.value(card);
						if(val<0) return true;
						if(val<=5){
							return card.number>=11;
						}
						if(val<=6){
							return card.number>=12;
						}
						return false;
					}));
					'step 1'
					if(result.bool){
						player.logSkill('shuimeng',result.targets);
						event.target=result.targets[0];
						player.chooseToCompare(event.target);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.chooseUseTarget({name:'wuzhong',isCard:true},true);
					}
					else{
						event.target.useCard({name:'guohe',isCard:true},player);
					}
				}
			},
			qianya:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				direct:true,
				filter:function(event,player){
					return get.type(event.card,'trick')=='trick'&&player.countCards('h');
				},
				content:function(){
					'step 0'
					var nh=player.countCards('h');
					player.chooseCardTarget({
						filterCard:true,
						filterTarget:function(card,player,target){
							return target!=player;
						},
						selectCard:[1,nh],
						ai1:function(card){
							var player=_status.event.player;
							var cardname=_status.event.cardname;
							if(_status.event.du) return -get.value(card,player,'raw');
							else if(_status.event.shuimeng){
								if(cardname=='wuzhong'){
									if(player.needsToDiscard(2-ui.selected.cards.length)){
										return 10-get.value(card,player,'raw');
									}
								}
								else if(cardname=='guohe'){
									if(player.needsToDiscard(-1-ui.selected.cards.length)){
										return 10-get.value(card,player,'raw');
									}
								}
								return 0;
							}
							else if(cardname=='lebu'){
								if(player.needsToDiscard(1-ui.selected.cards.length)){
									return 8-get.value(card,player,'raw');
								}
								else{
									if(!ui.selected.cards.length){
										return 6-get.value(card,player,'raw');
									}
									return 0;
								}
							}
							else if(cardname=='shunshou'){
								if(_status.event.nh<=2) return get.value(card,player,'raw');
							}
							else if(cardname=='huogong'){
								if(player.hp==1) return get.value(card,player,'raw');
							}
							if(ui.selected.cards.length) return 0;
							return 7-get.value(card,player,'raw');
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							var nh2=target.countCards('h');
							var num=Math.sqrt(1+nh2);
							var cardname=_status.event.cardname;
							if(_status.event.du) return 0.5-att;
							else if(_status.event.shuimeng){
								return att/num;
							}
							else if(cardname=='lebu'){
								return att/num;
							}
							else if(cardname=='shunshou'){
								if(_status.event.nh<=2) return att/num;
							}
							else if(cardname=='huogong'){
								if(_status.event.player.hp==1) return att/num;
							}
							if(_status.event.nh>nh2+1){
								return att/num;
							}
							return 0;
						},
						du:player.hasCard(function(card){
							return get.value(card,player,'raw')<0;
						}),
						shuimeng:trigger.getParent(2).name=='shuimeng',
						nh:nh,
						cardname:trigger.card.name,
						prompt:get.prompt2('qianya')
					});
					'step 1'
					if(result.bool){
						player.logSkill('qianya',result.targets);
						player.give(result.cards,result.targets[0]);
					}
				}
			},
			xianfu:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event){
					return game.players.length>1&&(event.name!='phase'||game.phaseNumber==0);
				},
				audio:6,
				content:function(){
					'step 0'
					player.chooseTarget('请选择【先辅】的目标',lib.translate.xianfu_info,true,function(card,player,target){
						return target!=player&&(!player.storage.xianfu2||!player.storage.xianfu2.contains(target));
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(att>0) return att+1;
						if(att==0) return Math.random();
						return att;
					}).animate=false;
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						if(!player.storage.xianfu2) player.storage.xianfu2=[];
						player.storage.xianfu2.push(target);
						player.addSkill('xianfu2');
					}
				}
			},
			xianfu_mark:{
				marktext:'辅',
				intro:{
					name:'先辅',
					content:'当你受到伤害后，$受到等量的伤害，当你回复体力后，$回复等量的体力'
				},
			},
			xianfu2:{
				audio:'xianfu',
				charlotte:true,
				trigger:{global:['damageEnd','recoverEnd']},
				forced:true,
				filter:function(event,player){
					if(event.player.isDead()||!player.storage.xianfu2||!player.storage.xianfu2.contains(event.player)||event.num<=0) return false;
					if(event.name=='damage') return true;
					return player.isDamaged();
				},
				logTarget:'player',
				content:function(){
					'step 0'
					var target=trigger.player;
					if(!target.storage.xianfu_mark) target.storage.xianfu_mark=[];
					target.storage.xianfu_mark.add(player);
					target.storage.xianfu_mark.sortBySeat();
					target.markSkill('xianfu_mark');
					game.delayx();
					'step 1'
					player[trigger.name](trigger.num,'nosource');
				},
				onremove:function(player){
					if(!player.storage.xianfu2) return;
					game.countPlayer(function(current){
						if(player.storage.xianfu2.contains(current)&&current.storage.xianfu_mark){
							current.storage.xianfu_mark.remove(player);
							if(!current.storage.xianfu_mark.length) current.unmarkSkill('xianfu_mark');
							else current.markSkill('xianfu_mark');
						}
					});
					delete player.storage.xianfu2;
				},
				group:'xianfu3',
			},
			xianfu3:{
				trigger:{global:'dieBegin'},
				silent:true,
				filter:function(event,player){
					return event.player==player||player.storage.xianfu2&&player.storage.xianfu2.contains(player);
				},
				content:function(){
					if(player==trigger.player) lib.skill.xianfu2.onremove(player);
					else player.storage.xianfu2.remove(event.player);
				}
			},
			chouce:{
				trigger:{player:'damageEnd'},
				content:function(){
					'step 0'
					event.num=trigger.num;
					'step 1'
					player.judge();
					'step 2'
					event.color=result.color;
					if(event.color=='black'){
						player.chooseTarget('弃置一名角色区域内的一张牌',function(card,player,target){
							return target.countCards('hej');
						}).set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							if(att<0){
								att=-Math.sqrt(-att);
							}
							else{
								att=Math.sqrt(att);
							}
							return att*lib.card.guohe.ai.result.target(player,target);
						})
					}
					else{
						var next=player.chooseTarget('令一名角色摸一张牌');
						if(player.storage.xianfu2&&player.storage.xianfu2.length){
							next.set('prompt2','（若目标为'+get.translation(player.storage.xianfu2)+'则改为摸两张牌）');
						}
						next.set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
							if(target.hasSkillTag('nogain')) att/=10;
							if(player.storage.xianfu2&&player.storage.xianfu2.contains(target)) return att*2;
							return att;
						})
					}
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						if(event.color=='black'){
							player.discardPlayerCard(target,'hej',true);
						}
						else{
							if(player.storage.xianfu2&&player.storage.xianfu2.contains(target)){
								if(!target.storage.xianfu_mark) target.storage.xianfu_mark=[];
								target.storage.xianfu_mark.add(player);
								target.storage.xianfu_mark.sortBySeat();
								target.markSkill('xianfu_mark');
								target.draw(2);
							}
							else{
								target.draw();
							}
						}
					}
					'step 4'
					if(--event.num>0){
						player.chooseBool(get.prompt2('chouce'));
					}
					else{
						event.finish();
					}
					'step 5'
					if(result.bool){
						player.logSkill('chouce');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [1,get.tag(card,'damage')*1.5];
								if(target.hp==3) return [1,get.tag(card,'damage')*1];
								if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
							}
						}
					}
				}
			},
			fuqi:{
				audio:2,
				forced:true,
				trigger:{
					player:"useCard",
				},
				filter:function(event,player){
					return event.card&&(get.type(event.card)=='trick'||get.type(event.card)=='basic'&&!['shan','tao','jiu','du'].contains(event.card.name))&&game.hasPlayer(function(current){
						return current!=player&&get.distance(current,player)<=1;
					});
				},
				content:function(){
					trigger.directHit.addArray(game.filterPlayer(function(current){
						return current!=player&&get.distance(current,player)<=1;
					}));
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return get.distance(arg.target,player)<=1;
					},
				},
			},
			wylianji:{
				enable:'phaseUse',
				audio:2,
				usable:1,
				filter:function(event,player){
					return player.hasCard(lib.skill.wylianji.filterCard);
				},
				check:function(card){
					if(card.name=='sha') return 1;
					else{
						if(get.tag(card,'damage')){
							if(get.tag(card,'multineg')) return 5;
							return 2;
						}
					}
					return 0;
				},
				filterCard:function(card){
					return get.name(card)=='sha'||(get.type(card,'trick')=='trick'&&get.color(card)=='black'&&!get.info(card).multitarget)&&get.info(card).enable;
				},
				filterTarget:function(card,player,target){
					return target!=player&&!target.isMin()&&
					(player.canUse(card,target,false)||game.hasPlayer(function(current){
						return current!=player&&target.canUse(card,current);
					}));
				},
				discard:false,
				lose:true,
				delay:false,
				content:function(){
					'step 0'
					player.showCards(get.translation(player)+'对'+get.translation(target)+'发动了【连计】',cards);
					'step 1'
					var equip1=get.cardPile2(function(card){
						return get.subtype(card)=='equip1';
					});
					if(!equip1){
						player.popup('连计失败');
						game.log('牌堆中无装备');
						event.finish();
						return;
					}
					if(equip1.name=='qinggang'&&!lib.inpile.contains('qibaodao')){
						equip1.remove();
						equip1=game.createCard2('qibaodao',equip1.suit,equip1.number);
					}
					target.$draw(equip1);
					target.chooseUseTarget(true,equip1,'nothrow','nopopup');
					game.delay();
					'step 2'
					game.updateRoundNumber();
					var card=cards[0];
					var bool1=game.hasPlayer(function(current){
						return current!=player&&target.canUse(card,current);
					});
					var bool2=player.canUse(card,target,false);
					if(bool1&&bool2){
						target.chooseControl(function(){
							return 0;
						}).set('choiceList',[
							'对除'+get.translation(player)+'以外的角色使用'+get.translation(cards)+'，并将装备区里的武器牌交给该牌的一个目标角色',
							'视为'+get.translation(player)+'对你使用'+get.translation(cards)+'，并将装备区内的武器牌交给'+get.translation(player)
						]);
					}
					else if(bool1){
						event.directindex=0;
					}
					else if(bool2){
						event.directindex=1;
					}
					else{
						event.finish();
					}
					'step 3'
					var card=cards[0];
					if(result&&typeof event.directindex!='number'){
						event.directindex=result.index;
					}
					if(event.directindex==1){
						event.insert(lib.skill.wylianji.content_use,{
							player:player,
							target:target,
							card:card
						})
					}
					else{
						event.insert(lib.skill.wylianji.content_give,{
							player:target,
							card:card,
							targets:game.filterPlayer(function(current){
								return current!=player;
							})
						});
					}
				},
				content_use:function(){
					'step 0'
					player.useCard(card,target);
					'step 1'
					if(!get.owner(card)){
						target.gain(card,'gain2');
					}
					'step 2'
					var equip1=target.getEquip(1);
					if(equip1){
						game.delay();
						target.give(equip1,player);
						target.line(player);
					}
				},
				content_give:function(){
					'step 0'
					var select=get.select(get.info(card).selectTarget);
					if(select[1]==-1){
						for(var i=0;i<targets.length;i++){
							if(!player.canUse(card,targets[i])){
								targets.splice(i--,1);
							}
						}
						if(targets.length){
							player.useCard(card,targets);
						}
						event.list=targets.slice(0);
						event.goto(2);
					}
					else{
						player.chooseTarget(select,'选择'+get.translation(card)+'的目标',true,function(cardx,player,target){
							var card=_status.event.card;
							return _status.event.targets.contains(target)&&player.canUse(card,target);
						}).set('ai',function(target){
							var card=_status.event.card;
							var player=_status.event.player;
							return get.effect(target,card,player,player);
						}).set('targets',targets).set('card',card);
					}
					'step 1'
					if(result.bool){
						player.useCard(card,result.targets);
						event.list=result.targets.slice(0);
					}
					'step 2'
					var equip1=player.getEquip(1);
					if(equip1){
						for(var i=0;i<event.list.length;i++){
							if(event.list[i].isDead()) event.list.splice(i--,1);
						}
						if(event.list.length>1){
							player.chooseTarget(true,'将'+get.translation(equip1)+'交给一名角色',function(card,player,target){
								return _status.event.list.contains(target);
							}).set('ai',function(target){
								return get.attitude(player,target);
							}).set('list',_status.event.list);
							event.equip1=equip1;
						}
						else{
							if(event.list.length==1){
								player.give(equip1,event.list[0]);
								player.line(event.list);
							}
							event.finish();
						}
					}
					else{
						event.finish();
					}
					'step 3'
					if(result.bool&&result.targets.length&&event.equip1){
						player.give(event.equip1,result.targets[0]);
						player.line(result.targets);
					}
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							if(ui.selected.cards.length){
								var card=ui.selected.cards[0];
								var bool=(card.name!='sha');
								if(game.hasPlayer(function(current){
									return target.canUse(card,current,bool)&&get.effect(current,card,target,player)>0;
								})){
									var num=1;
									if(target.getEquip(1)){
										num=0.6;
									}
									if(target.hasSkillTag('noe')) 2*num;
									return num;
								}
							}
							return 0;
						}
					}
				}
			},
			moucheng:{
				audio:2,
				derivation:['jingong','wy_meirenji','wy_xiaolicangdao'],
				trigger:{global:'damageEnd'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.source!=player&&event.getParent(2).name=='useCard'&&event.getParent(3).name=='wylianjiInserted';
				},
				init:function(player){
					player.storage.moucheng=0;
				},
				intro:{
					content:'已造成#点伤害'
				},
				unique:true,
				juexingji:true,
				content:function(){
					player.storage.moucheng+=trigger.num;
					if(player.hasSkill('moucheng')){
						player.markSkill('moucheng');
						player.syncStorage('moucheng');
					}
					if(player.storage.moucheng>=3){
						event.trigger('mouchengAwaken');
					}
				},
				group:'moucheng_awaken',
				subSkill:{
					awaken:{
						trigger:{player:'mouchengAwaken'},
						forced:true,
						skillAnimation:true,
						animationColor:'gray',
						content:function(){
							player.awakenSkill('moucheng');
							player.removeSkill('wylianji');
							player.addSkill('jingong');
						}
					}
				}
			},
			jingong:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return event.xinjingong_list&&player.countCards('hes',function(card){
						return card.name=='sha'||get.type(card)=='equip';
					});
				},
				onChooseToUse:function(event){
					if(!game.online){
						var evt=event.getParent();
						if(evt.name!='phaseUse') return;
						if(!evt.xinjingong_list){
							var list=get.inpile('trick').randomGets(2);
							if(Math.random()<0.5){
								list.push('wy_meirenji');
							}
							else{
								list.push('wy_xiaolicangdao');
							}
							evt.xinjingong_list=list;
						}
						if(!event.xinjingong_list) event.set('xinjingong_list',evt.xinjingong_list);
					}
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i of event.xinjingong_list) list.push(['锦囊','',i]);
						return ui.create.dialog('矜功',[list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						return _status.event.player.getUseValue({name:button.link[2]});
					},
					backup:function(links,player){
						return {
							audio:'jingong',
							filterCard:true,
							popname:true,
							position:'hes',
							viewAs:{name:links[0][2]},
							check:function(card){
								return 6-get.value(card);
							},
							filterCard:function(card){
								return card.name=='sha'||get.type(card)=='equip';
							},
							precontent:function(){
								player.addTempSkill('jingong2');
							},
						};
					},
					prompt:function(links,player){
						return '将一张【杀】或装备牌当做'+get.translation(links[0][2])+'使用';
					}
				},
				ai:{
					order:2,
					result:{
						player:function(player){
							if((player.hp<=2||player.needsToDiscard())&&!player.getStat('damage')) return 0;
							return 1;
						}
					}
				}
			},
			jingong2:{
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				filter:function(event,player){
					return !player.getStat('damage');
				},
				content:function(){
					player.loseHp();
				}
			},
			jingong3:{charlotte:true},
			weikui:{
				audio:'kuiwei',
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				content:function(){
					'step 0'
					player.loseHp();
					'step 1'
					if(target.countCards('h','shan')){
						player.viewHandcards(target);
						if(player.canUse({name:'sha',isCard:true},target,false)) player.useCard({name:'sha',isCard:true},target,false);
						player.storage.weikui2=target;
						player.addTempSkill('weikui2');
					}
					else{
						player.discardPlayerCard(target,'visible',true,'h').set('ai',function(button){
							return get.value(button.link,_status.event.target);
						});
					}
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(player.hp<=2) return 0;
							if(player.hp==3) return target.hp<=2?-1:0;
							return -1;
						}
					}
				}
			},
			weikui2:{
				onremove:true,
				mod:{
					globalFrom:function(from,to){
						if(to==from.storage.weikui2) return -Infinity;
					}
				},
				mark:'character',
				intro:{
					content:'与$的距离视为1直到回合结束'
				},
			},
			lizhan:{
				audio:'yanzheng',
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].isDamaged()){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('lizhan'),'令任意名已受伤的角色各摸一张牌',[1,Infinity],function(card,player,target){
						return target.isDamaged();
					}).set('ai',function(target){
						return get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						player.logSkill('lizhan',result.targets);
						game.asyncDraw(result.targets);
					}
				},
				ai:{
					expose:0.3,
					threaten:1.3
				}
			},
			xinfenyue:{
				enable:'phaseUse',
				audio:'fenyue',
				filter:function(event,player){
					var num=game.players.length-player.getFriends(true).length;
					if((player.getStat().skill.xinfenyue||0)>=num) return false;
					return player.countCards('h')>0;
				},
				filterTarget:function(event,player,target){
					return player.canCompare(target);
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(!result.bool) event.finish();
					event.num=result.num1;
					'step 2'
					if(num<=5&&target.countGainableCards(player,'he')>0) player.gainPlayerCard(target,'he',true);
					'step 3'
					if(num<=9){
						var card=get.cardPile2(function(x){
							return x.name=='sha';
						});
						if(card) player.gain(card,'gain2');
					}
					'step 4'
					if(num<=13){
						var card={name:'sha',nature:'thunder'};
						if(player.canUse(card,target,false)) player.useCard(card,target,false);
					}
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							var sort=function(a,b){
								return b.number-a.number;
							};
							var ps=player.getCards('h').sort(sort);
							var ts=target.getCards('h').sort(sort);
							if(ps[0].number>ts[0].number){
								var effect=get.effect(target,{name:'sha',nature:'thunder'},player,player)
								if(ps[0].number<6&&target.countCards('he')>1) effect-=2;
								if(ps[0].number<10) effect-=1;
								return effect;
							}
							return ps.length>=ts.length?-0.5:0;
						},
					},
				},
			},
			fenyue:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if(!player.countCards('h')) return false;
					var num;
					if(get.mode()=='identity'){
						num=game.countPlayer(function(current){
							return current.identity=='zhong'||current.identity=='mingzhong';
						});
					}
					else{
						num=1;
					}
					if(player.getStat().skill.fenyue>=num) return false;
					return true;
				},
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				ai:{
					order:2.8,
					result:{
						target:function(player,target){
							if(get.attitude(player,target)<0&&player.hasCard(function(card){
								return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
							})){
								return get.effect(target,{name:'sha'},player,target);
							}
							else{
								return 0;
							}
						}
					}
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool){
						player.chooseControl(function(){
							return 1;
						}).set('choiceList',[
							'令'+get.translation(target)+'不能使用或打出手牌直到回合结束',
							'视为对'+get.translation(target)+'使用一张杀（不计入次数限制）'
						]);
					}
					else{
						var evt=_status.event.getParent('phaseUse');
						if(evt&&evt.name=='phaseUse'){
							evt.skipped=true;
						}
						event.finish();
					}
					'step 2'
					if(result.control=='选项一'){
						target.addTempSkill('fenyue2');
					}
					else{
						player.useCard({name:'sha',isCard:true},target,false);
					}
				}
			},
			fenyue2:{
				mark:true,
				mod:{
					cardEnabled2:function (card){
						if(get.position(card)=='h') return false;
					},
				},
				intro:{
					content:'不能使用或打出手牌'
				}
			},
			
			zfengshi:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.countCards('e');
				},
				logTarget:'target',
				check:function(event,player){
					if(event.target.hasSkillTag('noe')) return false;
					return get.attitude(player,event.target)<0;
				},
				content:function(){
					trigger.target.chooseToDiscard('e',true);
				}
			},
			chuanxin:{
				audio:2,
				trigger:{source:'damageBegin2'},
				preHidden:true,
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					if(!_status.event.getParent('phaseUse')) return false;
					if(event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.getParent().name==event.card.name){
						if(get.mode()=='guozhan'){
							return (event.player.identity!='qun'||player.identity=='ye')&&
							!event.player.isUnseen()&&event.player.hasViceCharacter();
						}
						else{
							var info=lib.character[event.player.name];
							if(!info) return false;
							var skills=event.player.getSkills();
							for(var i=0;i<info[3].length;i++){
								if(lib.skill[info[3][i]].fixed) continue;
								if(skills.contains(info[3][i])) return true;
							}
						}
					}
					return false;
				},
				logTarget:'player',
				check:function(event,player){
					if(get.mode()=='guozhan'){
						if(!event.player.isUnseen(1)&&get.guozhanRank(event.player.name2,event.player)<4) return false;
					}
					if(event.player.hasSkill('subplayer')) return false;
					if(get.attitude(player,event.player)<0){
						if(event.player.hp==1&&event.player.countCards('e')<2&&event.player.name2!='gz_pangtong') return false;
						return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					trigger.cancel();
					if(trigger.player.countCards('e')){
						trigger.player.chooseControl(function(event,player){
							if(get.mode()=='guozhan'&&get.guozhanRank(player.name2,player)<4) return 1;
							if(player.hp==1) return 1;
							if(player.hp==2&&player.countCards('e')>=2) return 1;
							return 0;
						}).set('choiceList',['弃置装备区内的所有牌并失去一点体力',get.mode()=='guozhan'?'移除副将牌':'随机移除武将牌上的一个技能']);
					}
					else{
						event._result={index:1};
					}
					'step 1'
					if(result.index==1){
						if(get.mode()!='guozhan'){
							var info=lib.character[trigger.player.name];
							var skills=trigger.player.getSkills();
							var list=[];
							for(var i=0;i<info[3].length;i++){
								if(lib.skill[info[3][i]].fixed) continue;
								if(skills.contains(info[3][i])){
									list.push(info[3][i]);
								}
							}
							if(list.length){
								var skill=list.randomGet();
								trigger.player.popup(skill);
								trigger.player.disableSkill('chuanxin_disable',skill,true);
							}
						}
						else{
							trigger.player.removeCharacter(1);
						}
					}
					else{
						trigger.player.discard(trigger.player.getCards('e'));
						trigger.player.loseHp();
					}
				}
			},
			hengjiang:{
				audio:2,
				trigger:{player:'damageEnd'},
				preHidden:true,
				check:function(event,player){
					return get.attitude(player,_status.currentPhase)<0||!_status.currentPhase.needsToDiscard(2);
				},
				filter:function(event){
					return _status.currentPhase&&_status.currentPhase.isIn()&&event.num>0;
				},
				logTarget:function(){
					return _status.currentPhase;
				},
				content:function(){
					var source=_status.currentPhase;
					if(source.hasSkill('hengjiang2')){
						source.storage.hengjiang2+=trigger.num;
						source.storage.hengjiang3.add(player);
						source.updateMarks();
					}
					else{
						source.storage.hengjiang3=[player];
						source.storage.hengjiang2=trigger.num;
						source.addTempSkill('hengjiang2');
					}
				},
				ai:{
					maixie_defend:true,
				}
			},
			hengjiang2:{
				mark:true,
				charlotte:true,
				intro:{
					content:'手牌上限-#'
				},
				mod:{
					maxHandcard:function(player,num){
						return num-player.storage.hengjiang2;
					}
				},
				onremove:function(player){
					delete player.storage.hengjiang2;
					delete player.storage.hengjiang3;
				},
				trigger:{player:'phaseDiscardEnd'},
				filter:function(event,player){
					if(event.cards&&event.cards.length) return false;
					var players=player.storage.hengjiang3;
					for(var i=0;i<players.length;i++){
						if(players[i].isIn()) return true;
					}
					return false;
				},
				forced:true,
				popup:false,
				content:function(){
					var players=player.storage.hengjiang3;
					for(var i=0;i<players.length;i++){
						if(players[i].isIn()){
							players[i].logSkill('hengjiang');
							players[i].line(player,'green');
						}
					}
					game.asyncDraw(player.storage.hengjiang3);
				}
			},
			rehengjiang:{
				audio:'hengjiang',
				trigger:{player:'damageEnd'},
				check:function(event,player){
					return get.attitude(player,_status.currentPhase)<0||!_status.currentPhase.needsToDiscard(2);
				},
				filter:function(event){
					return _status.currentPhase&&_status.currentPhase.isIn()&&event.num>0;
				},
				logTarget:function(){
					return _status.currentPhase;
				},
				content:function(){
					"step 0"
					event.count=trigger.num;
					"step 1"
					event.count--;
					var source=_status.currentPhase;
					if(source.hasSkill('rehengjiang2')){
						source.storage.rehengjiang2++;
						source.storage.rehengjiang3.push(player);
						source.storage.rehengjiang3.sortBySeat(source);
						source.updateMarks();
					}
					else{
						source.storage.rehengjiang3=[player];
						source.storage.rehengjiang2=1;
						source.addTempSkill('rehengjiang2');
					}
					"step 2"
					if(event.count){
						player.chooseBool(get.prompt2('rehengjiang',_status.currentPhase)).set('ai',function(){
							return lib.skill.rehengjiang.check(_status.event.getTrigger(),_status.event.player);
						})
					}
					else event.finish();
					"step 3"
					if(result.bool){
						player.logSkill('rehengjiang',_status.currentPhase);
						event.goto(1);
					}
				},
				ai:{
					maixie_defend:true,
					notemp:true,
				}
			},
			rehengjiang2:{
				mark:true,
				charlotte:true,
				intro:{
					content:'手牌上限-#'
				},
				mod:{
					maxHandcard:function(player,num){
						return num-player.storage.rehengjiang2;
					}
				},
				onremove:function(player){
					delete player.storage.rehengjiang2;
					delete player.storage.rehengjiang3;
				},
				trigger:{player:'phaseDiscardEnd'},
				filter:function(event,player){
					if(event.cards&&event.cards.length) return false;
					var players=player.storage.rehengjiang3;
					for(var i=0;i<players.length;i++){
						if(players[i].isIn()) return true;
					}
					return false;
				},
				forced:true,
				popup:false,
				content:function(){
					var players=player.storage.rehengjiang3;
					var list=[];
					for(var i=0;i<players.length;i++){
						if(!list.contains(players[i])&&players[i].isIn()){
							list.push(players[i])
							players[i].logSkill('rehengjiang',player);
						}
					}
					game.asyncDraw(list,function(target){
						return players.numOf(target);
					});
				}
			},
			shuangren:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				preHidden:true,
				content:function(){
					'step 0'
					var goon;
					if(player.needsToDiscard()>1){
						goon=player.hasCard(function(card){
							return card.number>10&&get.value(card)<=5;
						});
					}
					else{
						goon=player.hasCard(function(card){
							return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
						});
					}
					player.chooseTarget(get.prompt2('shuangren'),function(card,player,target){
						return player.canCompare(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						if(_status.event.goon&&get.attitude(player,target)<0){
							return get.effect(target,{name:'sha'},player,player);
						}
						return 0;
					}).set('goon',goon).setHiddenSkill(event.name);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('shuangren',target);
						player.chooseToCompare(target);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var target=event.target;
						if(game.hasPlayer(function(current){
							if(target==current) return false;
							if(!player.canUse('sha',current,false)) return false;
							if(get.mode()=='guozhan'){
								return target.isFriendOf(current);
							}
							return true;
						})){
							var str='对一名';
							if(get.mode()=='guozhan'){
								str+=('与'+get.translation(target)+'势力相同的');
							}
							player.chooseTarget(str+'角色使用一张杀',true,function(card,player,target){
								if(!player.canUse('sha',target,false)) return false;
								if(get.mode()=='guozhan'){
									return target.isFriendOf(_status.event.identity);
								}
								return true;
							}).set('ai',function(target){
								var player=_status.event.player;
								return get.effect(target,{name:'sha'},player,player);
							}).set('identity',target);
						}
						else{
							player.useCard({name:'sha',isCard:true},target,false);
							event.finish();
						}
					}
					else{
						player.addTempSkill('zishou2');
						event.finish();
					}
					'step 3'
					if(result.bool&&result.targets&&result.targets.length){
						player.useCard({name:'sha',isCard:true},result.targets[0],false);
					}
				}
			},
			kuanshi:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('kuanshi')).set('ai',function(target){
						if(get.attitude(_status.event.player,target)>0){
							return 1/Math.sqrt(target.hp+1);
						}
						return 0;
					}).animate=false;
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('kuanshi');
						target.storage.kuanshi2=player;
						target.addSkill('kuanshi2');
					}
				}
			},
			kuanshi2:{
				/*mark:'character',
				intro:{
					content:'下一次受到超过1点的伤害时，防止此伤害，然后$跳过下个回合的摸牌阶段'
				},*/
				trigger:{player:'damageBegin4'},
				forced:true,
				filter:function(event,player){
					return event.num>1;
				},
				//priority:-11,
				content:function(){
					trigger.cancel();
					player.storage.kuanshi2.skip('phaseDraw');
					player.removeSkill('kuanshi2');
				},
				group:'kuanshi2_remove',
				onremove:true,
				subSkill:{
					remove:{
						trigger:{global:['phaseZhunbeiBegin','dieAfter']},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.player==player.storage.kuanshi2;
						},
						content:function(){
							player.removeSkill('kuanshi2');
						}
					}
				}
			},
			xiashu:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var maxval=0;
					var hs=player.getCards('h');
					for(var i=0;i<hs.length;i++){
						maxval=Math.max(maxval,get.value(hs[i]));
					}
					player.chooseTarget(get.prompt2('xiashu'),lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						var maxval=_status.event.maxval;
						var dh=target.countCards('h')-player.countCards('h');
						var att=get.attitude(player,target);
						if(target.hasSkill('qingjian')) return false;
						if(dh<=0) return 0;
						if(att>0) return 0.1;
						if(maxval>=8) return 0;
						if(att==0) return 0.2;
						if(dh>=3) return dh;
						if(dh==2){
							if(maxval<=7) return dh;
						}
						if(maxval<=6) return dh;
						return 0;

					}).set('maxval',maxval);
					'step 1'
					if(result.bool){
						player.logSkill('xiashu',result.targets);
						event.target=result.targets[0];
						var hs=player.getCards('h');
						event.target.gain(hs,player,'giveAuto');
					}
					else{
						event.finish();
					}
					'step 2'
					var hs=event.target.getCards('h');
					if(!hs.length){
						event.finish();
						return;
					}
					hs.sort(function(a,b){
						return get.value(b,player,'raw')-get.value(a,player,'raw');
					});
					event.target.chooseCard([1,hs.length],'展示至少一张手牌',true).set('ai',function(card){
						var rand=_status.event.rand;
						var list=_status.event.list;
						if(_status.event.att){
							if(ui.selected.cards.length>=Math.ceil(list.length/2)) return 0;
							var value=get.value(card);
							if(_status.event.getParent().player.isHealthy()){
								value+=(get.tag(card,'damage')?1.5:0)+(get.tag(card,'draw')?2:0);
							}
							return value;
						}
						if(ui.selected.cards.length>=Math.floor(list.length/2)) return 0;
						return (list.indexOf(card)%2==rand)?1:0;
					}).set('rand',(Math.random()<0.6)?1:0).set('list',hs).set('att',get.attitude(event.target,player)>0);
					'step 3'
					event.target.showCards(result.cards);
					event.cards1=result.cards;
					event.cards2=event.target.getCards('h',function(card){
						return !event.cards1.contains(card);
					});
					'step 4'
					var choice;
					var num1=event.cards1.length;
					var num2=event.cards2.length;
					if(get.attitude(event.target,player)>0&&num1>=num2){
						choice=0;
					}
					else if(num1==num2){
						choice=(Math.random()<0.45)?0:1;
					}
					else if(num1>num2){
						if(num1-num2==1){
							choice=(Math.random()<0.6)?0:1;
						}
						else{
							choice=0;
						}
					}
					else{
						if(num2-num1==1){
							choice=(Math.random()<0.6)?1:0;
						}
						else{
							choice=1;
						}
					}
					player.chooseControl(function(event,player){
						return _status.event.choice;
					}).set('choiceList',['获得'+get.translation(event.target)+'展示的牌',
					'获得'+get.translation(event.target)+'未展示的牌']).set('choice',choice);
					'step 5'
					if(result.index==0){
						player.gain(event.cards1,target,'give');
					}
					else{
						player.gain(event.cards2,target,'giveAuto');
					}
				},
				ai:{
					expose:0.1
				}
			},
			sheyan:{
				audio:2,
				trigger:{target:'useCardToTarget'},
				filter:function(event,player){
					if(!event.targets||!event.targets.contains(player)) return false;
					var info=get.info(event.card);
					if(info.type!='trick') return false;
					if(info.multitarget) return false;
					if(event.targets.length>1) return true;
					return game.hasPlayer(function(current){
						return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var bool1=(trigger.targets.length>1);
					var bool2=game.hasPlayer(function(current){
						return !trigger.targets.contains(current)&&lib.filter.targetEnabled2(trigger.card,trigger.player,current);
					});
					if(bool1&&bool2){
						player.chooseControlList(get.prompt('sheyan'),['为'+get.translation(trigger.card)+'增加一个目标','为'+get.translation(trigger.card)+'减少一个目标'],function(event,player){
							if(_status.event.add) return 0;
							return 1;
						}).set('add',get.effect(player,trigger.card,trigger.player,player)>=0);
					}
					else if(bool2){
						event.type='add';
						event.goto(2);
						event.unchosen=true;
					}
					else{
						event.type='remove';
						event.goto(2);
						event.unchosen=true;
					}
					'step 1'
					if(result.control=='cancel2'){
						event.finish();
					}
					else if(result.index==1){
						event.type='remove';
					}
					else{
						event.type='add';
					}
					'step 2'
					if(event.type=='add'){
						player.chooseTarget(event.unchosen?get.prompt('sheyan'):null,'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
							var trigger=_status.event.getTrigger();
							return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,trigger.player,target);
						}).set('ai',function(target){
							var trigger=_status.event.getTrigger();
							return get.effect(target,trigger.card,trigger.player,_status.event.player);
						});
					}
					else{
						player.chooseTarget(event.unchosen?get.prompt('sheyan'):null,'为'+get.translation(trigger.card)+'减少一个目标',function(card,player,target){
							return _status.event.targets.contains(target);
						}).set('ai',function(target){
							var trigger=_status.event.getTrigger();
							return -get.effect(target,trigger.card,trigger.player,_status.event.player);
						}).set('targets',trigger.targets);
					}
					'step 3'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 4'
					player.logSkill('sheyan',event.target);
					if(event.type=='add'){
						trigger.targets.push(event.target);
					}
					else{
						trigger.getParent().excluded.add(event.target);
					}
				},
				ai:{
					expose:0.2
				}
			},
			bingzheng:{
				audio:2,
				trigger:{player:'phaseUseEnd'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('bingzheng'),function(card,player,target){
						return target.countCards('h')!=target.hp;
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						var nh=target.countCards('h');
						if(att>0){
							if(nh==target.hp-1){
								if(player==target) return att+1;
								return att+2;
							}
							if(player==target&&player.needsToDiscard()) return att/3;
							return att;
						}
						else{
							if(nh==target.hp+1) return -att;
							if(nh==0) return 0;
							return -att/2;
						}
					});
					'step 1'
					if(result.bool){
						player.logSkill('bingzheng',result.targets);
						event.target=result.targets[0];
						if(event.target.countCards('h')){
							player.chooseControl(function(event,player){
								var target=event.target;
								if(get.attitude(player,target)<0) return 1;
								return 0;
							}).set('choiceList',['令'+get.translation(event.target)+'摸一张牌',
							'令'+get.translation(event.target)+'弃置一张手牌']);
						}
						else{
							event.directfalse=true;
						}
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.directfalse||result.index==0){
						event.target.draw();
					}
					else{
						event.target.chooseToDiscard('h',true);
					}
					'step 3'
					if(event.target.countCards('h')==event.target.hp){
						player.draw();
						if(event.target==player){
							event.finish();
							return;
						}
						var next=player.chooseCard('是否交给'+get.translation(event.target)+'一张牌？','he');
						next.set('ai',function(card){
							if(get.position(card)!='h') return 0;
							if(_status.event.shan&&card.name=='shan'){
								return 11;
							}
							if(_status.event.goon){
								return 10-get.value(card);
							}
							return -get.value(card,_status.event.player,'raw');
						});
						if(get.attitude(player,event.target)>1&&
							player.countCards('h','shan')>1&&player.countCards('h')>event.target.countCards('h')){
							next.set('shan',true);
						}
						if(get.attitude(player,event.target)>0&&player.needsToDiscard()){
							next.set('goon',true);
						}
					}
					else{
						event.finish();
					}
					'step 4'
					if(result.bool){
						event.target.gain(result.cards,player,'giveAuto');
					}
				},
				ai:{
					expose:0.2,
					threaten:1.4
				}
			},
			fuman:{
				audio:2,
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					if(target==player) return false;
					var stat=player.getStat('skill').fuman_targets;
					return !stat||!stat.contains(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer((current)=>lib.skill.fuman.filterTarget(null,player,current));
				},
				discard:false,
				lose:false,
				delay:false,
				filterCard:true,
				content:function(){
					target.gain(cards,player,'giveAuto').gaintag.add('fuman');
					target.addSkill('fuman2');
					player.addSkill('fuman_draw');
					var stat=player.getStat('skill');
					if(!stat.fuman_targets) stat.fuman_targets=[];
					stat.fuman_targets.push(target);
				},
				check:function(card){
					return 6-get.value(card);
				},
				ai:{
					order:2,
					result:{
						target:function(player,target){
							if(!target.hasSha()) return 1.2;
							return 1;
						}
					}
				},
				subSkill:{
					draw:{
						trigger:{global:'useCardAfter'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return event.player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('fuman')) return true;
								}
								return false;
							});
						},
						logTarget:'player',
						content:function(){
							player.draw(trigger.player.hasHistory('sourceDamage',function(evt){
								return evt.card==trigger.card;
							})?2:1);
						},
					},
				},
			},
			fuman2:{
				mod:{
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('fuman')) return num+1;
					},
					cardname:function(card,player){
						if(get.itemtype(card)=='card'&&card.hasGaintag('fuman')) return 'sha';
					},
				},
			},
			qizhou:{
				trigger:{player:['phaseBefore','equipEnd','loseEnd']},
				forced:true,
				popup:false,
				derivation:['mashu','reyingzi','reduanbing','fenwei'],
				filter:function(event,player){
					if(player.equiping) return false;
					var suits=[];
					var es=player.getCards('e');
					for(var i=0;i<es.length;i++){
						suits.add(get.suit(es[i]));
					}
					if(player.additionalSkills.qizhou){
						return player.additionalSkills.qizhou.length!=suits.length;
					}
					else{
						return suits.length>0;
					}
				},
				content:function(){
					var suits=[];
					var es=player.getCards('e');
					for(var i=0;i<es.length;i++){
						suits.add(get.suit(es[i]));
					}
					player.removeAdditionalSkill('qizhou');
					switch(suits.length){
						case 1:player.addAdditionalSkill('qizhou',['mashu']);break;
						case 2:player.addAdditionalSkill('qizhou',['mashu','reyingzi']);break;
						case 3:player.addAdditionalSkill('qizhou',['mashu','reyingzi','reduanbing']);break;
						case 4:player.addAdditionalSkill('qizhou',['mashu','reyingzi','reduanbing','fenwei']);break;
					}
				},
				ai:{
					threaten:1.2
				}
			},
			shanxi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:{color:'red',type:'basic'},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')&&player.inRange(target);
				},
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					player.discardPlayerCard(target,true);
					'step 1'
					if(result.bool){
						if(get.name(result.cards[0],result.cards[0].original=='h'?player:false)=='shan'){
							player.viewHandcards(target);
						}
						else{
							target.viewHandcards(player);
						}
					}
				},
				ai:{
					order:8,
					result:{
						target:-1
					}
				}
			},
			fenxun:{
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					player.storage.fenxun2=target;
					player.addTempSkill('fenxun2');
				},
				check:function(card){
					if(card.name=='sha'&&_status.event.player.countCards('h','sha')<=1) return 0;
					return 6-get.value(card);
				},
				filterCard:true,
				ai:{
					order:4,
					result:{
						player:function(player,target){
							if(get.distance(player,target)<=1) return 0;
							var hs=player.getCards('h','shunshou');
							if(hs.length&&player.canUse(hs[0],target,false)){
								return 1;
							}
							var geteff=function(current){
								return player.canUse('sha',current,false,true)&&get.effect(current,{name:'sha'},player,player)>0;
							}
							if(player.hasSha()&&geteff(target)){
								var num=game.countPlayer(function(current){
									return current!=player&&get.distance(player,current)<=1&&geteff(current);
								});
								if(num==0){
									if(game.hasPlayer(function(current){
										return player.canUse('sha',current)&&geteff(current)&&current!=target;
									})){
										return 1;
									}
								}
								else if(num==1){
									return 1;
								}
							}
							return 0;
						}
					}
				}
			},
			fenxun2:{
				mark:'character',
				onremove:true,
				intro:{
					content:'到$的距离视为1'
				},
				mod:{
					globalFrom:function(from,to){
						if(to==from.storage.fenxun2){
							return -Infinity;
						}
					}
				}
			},
			duanbing:{
				audio:2,
				audioname:['heqi'],
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
						return !event.targets.contains(current)&&get.distance(player,current)<=1&&player.canUse(event.card,current);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('duanbing'),'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
						return !_status.event.sourcex.contains(target)&&get.distance(player,target)<=1&&player.canUse(_status.event.card,target);
					}).set('sourcex',trigger.targets).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					}).set('card',trigger.card);
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('duanbing',event.target);
					trigger.targets.push(event.target);
				},
				ai:{
					effect:{
						player:function(card,player,target,current,isLink){
							if(!isLink&&card.name=='sha'){
								if(player._duanbingtmp) return;
								player._duanbingtmp=true;
								if(get.effect(target,card,player,player)<=0){
									delete player._duanbingtmp;
									return;
								}
								if(game.hasPlayer(function(current){
									return current!=target&&get.distance(player,current)<=1&&
									player.canUse(card,current)&&get.effect(current,card,player,player)>0;
								})){
									delete player._duanbingtmp;
									return [1,1];
								}
								delete player._duanbingtmp;
							}
						}
					}
				}
			},
			fuhan:{
				audio:2,
				trigger:{player:'phaseBegin'},
				unique:true,
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				forceunique:true,
				//filter:function(event,player){
				//	return player.storage.fanghun2>0;
				//},
				prompt:function(event,player){
					var num=Math.max(2,player.storage.fanghun2||0);
					num=Math.min(num,8);
					return get.prompt('fuhan')+'（体力上限：'+num+'）';
				},
				check:function(event,player){
					var num=Math.max(2,player.storage.fanghun2||0);
					if(num==1) return false;
					if(player.hp<=1) return true;
					if(num==2) return false;
					if(num==3) return player.hp<3&&player.isMinHp();
					return true;
				},
				content:function(){
					'step 0'
					if(player.storage.fanghun) player.draw(player.storage.fanghun);
					player.removeMark('fanghun',player.storage.fanghun);
					event.num=Math.max(2,player.storage.fanghun2||0);
					var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][1]=='shu') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][1]!='shu';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[1]=='shu';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}
					list.remove('zhaoyun');
					list.remove('re_zhaoyun');
					list.remove('ol_zhaoyun');
					// var dialog=ui.create.dialog();
					// dialog.add([list.randomGets(5),'character']);
					player.chooseButton(true).set('ai',function(button){
						return get.rank(button.link,true)-lib.character[button.link][2];
					}).set('createDialog',['将武将牌替换为一名角色',[list.randomGets(5),'character']]);
					player.awakenSkill('fuhan');
					'step 1'
					event.num=Math.min(event.num,8);
					player.reinit('zhaoxiang',result.links[0],false);
					if(_status.characterlist){
						_status.characterlist.add('zhaoxiang');
						_status.characterlist.remove(result.links[0]);
					}
					'step 2'
					var num=event.num-player.maxHp;
					if(num>0) player.gainMaxHp(num);
					else player.loseMaxHp(-num);
					player.recover();
				}
			},
			refuhan:{
				audio:'fuhan',
				trigger:{player:'phaseZhunbeiBegin'},
				unique:true,
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				forceunique:true,
				filter:function(event,player){
					return player.countMark('fanghun')>0;
				},
				content:function(){
					'step 0'
					if(player.storage.fanghun) player.draw(player.storage.fanghun);
					player.removeMark('fanghun',player.storage.fanghun);
					player.awakenSkill('refuhan');
					'step 1'
					var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][1]=='shu') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][1]!='shu';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[1]=='shu';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}
					list.remove('zhaoyun');
					list.remove('re_zhaoyun');
					list.remove('ol_zhaoyun');
					list=list.randomGets(Math.max(4,game.countPlayer()));
					var skills=[];
					for(var i of list){
						skills.addArray((lib.character[i][3]||[]).filter(function(skill){
							var info=get.info(skill);
							return info&&!info.zhuSkill&&!info.limited&&!info.juexingji&&!info.hiddenSkill&&!info.charlotte&&!info.dutySkill;
						}));
					}
					if(!list.length||!skills.length){event.finish();return;}
					if(player.isUnderControl()){
						game.swapPlayerAuto(player);
					}
					var switchToAuto=function(){
						_status.imchoosing=false;
						event._result={
							bool:true,
							skills:skills.randomGets(2),
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					};
					var chooseButton=function(list,skills){
						var event=_status.event;
						if(!event._result) event._result={};
						event._result.skills=[];
						var rSkill=event._result.skills;
						var dialog=ui.create.dialog('请选择获得至多两个技能',[list,'character'],'hidden');
						event.dialog=dialog;
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						for(var i=0;i<skills.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link=skills[i];
							table.appendChild(td);
							td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								_status.tempNoButton=true;
								setTimeout(function(){
									_status.tempNoButton=false;
								},500);
								var link=this.link;
								if(!this.classList.contains('bluebg')){
									if(rSkill.length>=2) return;
									rSkill.add(link);
									this.classList.add('bluebg');
								}
								else{
									this.classList.remove('bluebg');
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add('　　');
						dialog.open();
						
						event.switchToAuto=function(){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						};
						event.control=ui.create.control('ok',function(link){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						});
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('selectable');
						}
						game.pause();
						game.countChoose();
					};
					if(event.isMine()){
						chooseButton(list,skills);
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,list,skills);
						event.player.wait();
						game.pause();
					}
					else{
						switchToAuto();
					}
					'step 2'
					var map=event.result||result;
					if(map&&map.skills&&map.skills.length){
						for(var i of map.skills) player.addSkillLog(i);
					}
					game.broadcastAll(function(list){
						game.expandSkills(list);
						for(var i of list){
							var info=lib.skill[i];
							if(!info) continue;
							if(!info.audioname2) info.audioname2={};
							info.audioname2.old_yuanshu='weidi';
						}
					},map.skills);
					'step 3'
					if(player.isMinHp()) player.recover();
				},
			},
			refanghun:{
				mod:{
					aiValue:function(player,card,num){
						if(card.name!='sha'&&card.name!='shan') return;
						var geti=function(){
							var cards=player.getCards('hs',function(card){
								return card.name=='sha'||card.name=='shan';
							});
							if(cards.contains(card)){
								return cards.indexOf(card);
							}
							return cards.length;
						};
						return Math.max(num,[7,5,5,3][Math.min(geti(),3)]);
					},
				},
				locked:false,
				audio:'fanghun',
				inherit:'fanghun',
				trigger:{
					player:'useCard',
					target:'useCardToTargeted',
				},
			},
			fanghun:{
				hiddenCard:function(player,name){
					if(!player.storage.fanghun||player.storage.fanghun<=0) return false;
					if(name=='tao') return player.countCards('hs','jiu')>0;
					if(name=='jiu') return player.countCards('hs','tao')>0;
					return false;
				},
				audio:2,
				marktext:'影',
				intro:{
					content:'mark',
					name:'梅影',
				},
				trigger:{
					source:'damageSource',
					player:'damageEnd',
				},
				forced:true,
				locked:false,
				filter:function(event){
					return event.card&&event.card.name=='sha';
				},
				content:function(){
					player.addMark('fanghun',trigger.num||1);
					player.addMark('fanghun2',trigger.num||1,false);
				},
				group:['fanghun_sha','fanghun_draw'],
				subSkill:{
					draw:{
						trigger:{player:['useCardAfter','respondAfter']},
						forced:true,
						popup:false,
						filter:function(event){
							return event.skill=='fanghun_sha'||event.skill=='fanghun_shan';
						},
						content:function(){
							player.draw();
						}
					},
					sha:{
						audio:'fanghun',
						enable:['chooseToUse','chooseToRespond'],
						prompt:'弃置一枚【梅影】标记，将杀当做闪，或将闪当做杀，或将桃当做酒，或将酒当做桃使用或打出',
						viewAs:function(cards,player){
							var name=false;
							switch(get.name(cards[0],player)){
								case 'sha':name='shan';break;
								case 'shan':name='sha';break;
								case 'tao':name='jiu';break;
								case 'jiu':name='tao';break;
							}
							if(name) return {name:name};
							return null;
						},
						position:'hs',
						check:function(card){
							var player=_status.event.player;
							if(_status.event.type=='phase'){
								var max=0;
								var name2;
								var list=['sha','tao','jiu'];
								var map={sha:'shan',tao:'jiu',jiu:'tao'}
								for(var i=0;i<list.length;i++){
									var name=list[i];
				 				if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
				 					var temp=get.order({name:name});
				 					if(temp>max){
				 						max=temp;
				 						name2=map[name];
				 					}
				 				}
				 			}
				 			if(name2==get.name(card,player)) return 1;
				 			return 0;
							}
							return 1;
						},
						filterCard:function(card,player,event){
							event=event||_status.event;
							var filter=event._backup.filterCard;
							var name=get.name(card,player);
							if(name=='sha'&&filter({name:'shan',cards:[card]},player,event)) return true;
							if(name=='shan'&&filter({name:'sha',cards:[card]},player,event)) return true;
							if(name=='tao'&&filter({name:'jiu',cards:[card]},player,event)) return true;
							if(name=='jiu'&&filter({name:'tao',cards:[card]},player,event)) return true;
							return false;
						},
						filter:function(event,player){
							if(!player.storage.fanghun||player.storage.fanghun<=0) return false;
							var filter=event.filterCard;
							if(filter({name:'sha'},player,event)&&player.countCards('hs','shan')) return true;
							if(filter({name:'shan'},player,event)&&player.countCards('hs','sha')) return true;
							if(filter({name:'tao'},player,event)&&player.countCards('hs','jiu')) return true;
							if(filter({name:'jiu'},player, event)&&player.countCards('hs','tao')) return true;
							return false;
						},
						onrespond:function(){return this.onuse.apply(this,arguments)},
						onuse:function(result,player){
			 			player.removeMark('fanghun',1);
						},
						ai:{
							respondSha:true,
							respondShan:true,
							skillTagFilter:function(player,tag){
								if(!player.storage.fanghun||player.storage.fanghun<0) return false;
								var name;
								switch(tag){
									case 'respondSha':name='shan';break;
									case 'respondShan':name='sha';break;
								}
								if(!player.countCards('hs',name)) return false;
							},
							order:function(item,player){
								if(player&&_status.event.type=='phase'){
									var max=0;
									var list=['sha','tao','jiu'];
									var map={sha:'shan',tao:'jiu',jiu:'tao'}
									for(var i=0;i<list.length;i++){
										var name=list[i];
					 				if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
					 					var temp=get.order({name:name});
					 					if(temp>max) max=temp;
					 				}
					 			}
					 			if(max>0) max+=((player.storage.refuhan||player.storage.twfuhan)?0.3:-0.3);
					 			return max;
								}
								if(!player) player=_status.event.player;
								return (player.storage.refuhan||player.storage.twfuhan)?4:1;
							},
						},
					},
				}
			},
			yjixi:{
				derivation:'rewangzun',
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				filter:function(event,player){
					return player.countMark('yjixi')>=3;
				},
				skillAnimation:true,
				animationColor:'gray',
				unique:true,
				juexingji:true,
				content:function(){
					'step 0'
					player.awakenSkill('yjixi');
					player.gainMaxHp();
					player.recover();
					'step 1'
					var str='摸两张牌';
					var mode=get.mode();
					var choice='选项一';
					if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
						var list=[];
						var zhu=get.zhu(player);
						if(zhu&&zhu!=player&&zhu.skills){
							for(var i=0;i<zhu.skills.length;i++){
								if(lib.skill[zhu.skills[i]]&&lib.skill[zhu.skills[i]].zhuSkill){
									list.push(zhu.skills[i]);
								}
							}
						}
						if(list.length){
							str+='并获得技能'+get.translation(list);
							event.list=list;
							choice='选项二';
						}
					}
					player.chooseControl(function(event,player){
						return _status.event.choice;
					}).set('choiceList',['获得技能〖妄尊〗',str]).set('choice',choice);
					'step 2'
					if(result.control=='选项一'){
						player.addSkill('rewangzun');
						player.popup('rewangzun');
					}
					else{
						player.draw(2);
						if(event.list){
							player.addSkill(event.list);
							player.popup(event.list[0]);
							player.storage.zhuSkill_yjixi=event.list;
							game.broadcastAll(function(list){
								game.expandSkills(list);
								for(var i of list){
									var info=lib.skill[i];
									if(!info) continue;
									if(!info.audioname2) info.audioname2={};
									info.audioname2.old_yuanshu='weidi';
								}
							},event.list);
						}
					}
				},
			},
			xinyongsi:{
				group:['xinyongsi1','xinyongsi2'],
			},
			xinyongsi1:{
				audio:'yongsi1',
				trigger:{player:'phaseDrawBegin1'},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					player.draw(game.countGroup());
					trigger.changeToZero();
				}
			},
			xinyongsi2:{
				audio:'yongsi2',
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				check:function(){
					return false;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he','庸肆').set('prompt2','弃置一张牌，或取消并失去一点体力').ai=function(card){
						return 8-get.value(card);
					};
					'step 1'
					if(!result.bool){
						player.loseHp();
						var num=player.countMark('yjixi');
						if(num) player.removeMark('yjixi',num,false);
					}
					else player.addMark('yjixi',1,false);
				}
			},
			lianzhu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				check:function(card){
					var num=get.value(card);
					if(get.color(card)=='black'){
						if(num>=6) return 0;
						return 20-num;
					}
					else{
						if(_status.event.player.needsToDiscard()){
							return 7-num;
						}
					}
					return 0;
				},
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					'step 0'
					target.gain(cards,player,'giveAuto');
					if(get.color(cards[0])=='black'){
						target.chooseToDiscard(2,'he','弃置两张牌，或令'+get.translation(player)+'摸两张牌').set('ai',function(card){
							if(_status.event.goon) return 7-get.value(card);
							return 0;
						}).set('goon',get.attitude(target,player)<0);
					}
					else{
						event.finish();
					}
					'step 1'
					if(!result.bool){
						player.draw(2);
					}
				},
				ai:{
					order:8,
					expose:0.2,
					result:{
						target:function(player,target){
							if(ui.selected.cards.length&&get.color(ui.selected.cards[0])=='red'){
								if(target.countCards('h')<player.countCards('h')) return 1;
								return 0.5;
							}
							return -1;
						}
					}
				}
			},
			xiehui:{
				mod:{
					ignoredHandcard:function(card,player){
						if(get.color(card)=='black'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.color(card)=='black') return false;
					}
				},
				trigger:{global:'gainAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(event.player!=player){
						var hs=event.player.getCards('h');
						var evt=event.getl(player);
						return evt&&evt.cards2&&evt.cards2.filter(function(card){
							return hs.contains(card)&&get.color(card,event.player)=='black';
						}).length>0;
					}
					return false;
				},
				content:function(){
					trigger.player.addSkill('xiehui2');
					var hs=trigger.player.getCards('h');
					var cards=trigger.getl(player).cards2.filter(function(card){
						return hs.contains(card)&&get.color(card,trigger.player)=='black';
					});
					trigger.player.addGaintag(cards,'xiehui');
				}
			},
			xiehui2:{
				mark:true,
				intro:{
					content:'不能使用、打出或弃置获得的黑色牌',
				},
				mod:{
					cardDiscardable:function(card,player){
						if(card.hasGaintag('xiehui')) return false;
					},
					cardEnabled2:function(card,player){
						if(get.itemtype(card)=='card'&&card.hasGaintag('xiehui')) return false;
					},
				},
				trigger:{player:'changeHp'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event){
					return event.num<0;
				},
				content:function(){
					player.removeSkill('xiehui2');
				},
				onremove:function(player){
					player.removeGaintag('xiehui');
				},
			},
			shanjia:{
				sync:function(player){
					if(game.online) return;
					var history=player.actionHistory;
					var num=0;
					for(var i=0;i<history.length;i++){
						for(var j=0;j<history[i].useCard.length;j++){
							if(get.type(history[i].useCard[j].card)=='equip') num++;
						}
					}
					player.storage.shanjia=num;
					if(num>0) player.markSkill('shanjia');
				},
				audio:2,
				intro:{
					content:function(storage){
						if(storage==0) return '未使用过装备牌';
						return '已使用过'+storage+'张装备牌';
					}
				},
				group:'shanjia2',
				trigger:{player:'phaseUseBegin'},
				frequent:true,
				filter:function(event,player){
					lib.skill.shanjia.sync(player);
					return player.storage.shanjia>0;
				},
				content:function(){
					'step 0'
					lib.skill.shanjia.sync(player);
					player.draw(Math.min(7,player.storage.shanjia));
					'step 1'
					player.chooseToDiscard('he',Math.min(7,player.storage.shanjia),true);
					'step 2'
					var useCard=false;
					if(result.bool&&result.cards){
						for(var i=0;i<result.cards.length;i++){
							if(result.cards[i].original=='e'){
								useCard=true;break;
							}
						}
					}
					if(useCard){
						player.chooseUseTarget({name:'sha'},false,'是否视为使用一张【杀】？','nodistance');
					}
				},
				ai:{
					threaten:function(player,target){
						if(typeof target.storage.shanjia=='number'){
							return Math.min(2,Math.sqrt(1+target.storage.shanjia));
						}
					}
				}
			},
			shanjia2:{
				trigger:{player:'useCard'},
				silent:true,
				filter:function(event,player){
					return get.type(event.card)=='equip';
				},
				content:function(){
					lib.skill.shanjia.sync(player);
				}
			},
			zhanyi:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filterCard:true,
				position:'he',
				check:function(card){
					var player=_status.event.player;
					if(player.hp<3) return 0;
					var type=get.type(card,'trick');
					if(type=='trick'){
						return 6-get.value(card);
					}
					else if(type=='equip'){
						if(player.hasSha()&&game.hasPlayer(function(current){
							return (player.canUse('sha',current)&&
								get.attitude(player,current)<0&&
								get.effect(current,{name:'sha'},player,player)>0)
						})){
							return 6-get.value(card);
						}
					}
					return 0;
				},
				content:function(){
					player.loseHp();
					switch(get.type(cards[0],'trick')){
						case 'basic':player.addTempSkill('zhanyi_basic');break;
						case 'equip':player.addTempSkill('zhanyi_equip');break;
						case 'trick':player.addTempSkill('zhanyi_trick');player.draw(2);break;
					}
				},
				ai:{
					order:9.1,
					result:{
						player:1
					}
				}
			},
			zhanyi_basic:{
				group:['zhanyi_basic_sha','zhanyi_basic_jiu','zhanyi_basic_tao']
			},
			zhanyi_basic_tao:{
				enable:'chooseToUse',
				filterCard:{type:'basic'},
				viewAs:{name:'tao'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{type:'basic'})) return false;
				},
				prompt:'将一张基本牌当桃使用',
				check:function(card){
					return 8-get.value(card);
				},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h',{type:'basic'})) return false;
					},
					save:true,
				}
			},
			zhanyi_basic_sha:{
				enable:'chooseToUse',
				filterCard:{type:'basic'},
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{type:'basic'})) return false;
				},
				prompt:'将一张基本牌当杀使用',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h',{type:'basic'})) return false;
					},
					respondSha:true,
				}
			},
			zhanyi_basic_jiu:{
				enable:'chooseToUse',
				filterCard:{type:'basic'},
				viewAs:{name:'jiu'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{type:'basic'})) return false;
				},
				prompt:'将一张基本牌当酒使用',
				check:function(card){
					if(_status.event.type=='dying') return 1;
					return 4-get.value(card);
				},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('h',{type:'basic'})>0&&player.hp<=0;
					},
					save:true,
				}
			},
			zhanyi_equip:{
				trigger:{player:'shaBegin'},
				forced:true,
				filter:function(event,player){
					return event.target.countCards('he')>0;
				},
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				content:function(){
					trigger.target.chooseToDiscard('he',true,2);
				}
			},
			zhanyi_trick:{
				mod:{
					targetInRange:function(){
						return true;
					}
				}
			},
			dingpan:{
				enable:'phaseUse',
				filter:function(event,player){
					var num;
					var mode=get.mode();
					if(mode=='identity'){
						if(_status.mode=='purple') num=player.getEnemies().length;
						else num=get.population('fan');
					}
					else if(mode=='versus'){
						num=player.getEnemies().length;
					}
					else{
						num=1;
					}
					if((player.getStat().skill.dingpan||0)>=num) return false;
					return true;
				},
				filterTarget:function(card,player,target){
					return target.countCards('e')>0;
				},
				content:function(){
					'step 0'
					target.draw();
					'step 1'
					var goon=get.damageEffect(target,player,target)>=0;
					if(!goon&&target.hp>=4&&get.attitude(player,target)<0){
						var es=target.getCards('e');
						for(var i=0;i<es.length;i++){
							if(get.equipValue(es[i],target)>=8){
								goon=true;break;
							}
						}
					}
					target.chooseControl(function(){
						if(_status.event.goon) return '选项二';
						return '选项一';
					}).set('goon',goon).set('prompt','定叛').set('choiceList',['令'+get.translation(player)+'弃置你装备区里的一张牌','获得你装备区内的所有牌并受到一点伤害']);
					'step 2'
					if(result.control=='选项一'){
						player.discardPlayerCard(target,true,'e');
						event.finish();
					}
					else{
						target.gain(target.getCards('e'),'gain2');
					}
					'step 3'
					game.delay(0.5);
					target.damage();
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							if(get.damageEffect(target,player,target)>=0) return 2;
							var att=get.attitude(player,target);
							if(att==0) return 0;
							var es=target.getCards('e');
							if(att>0&&(target.countCards('h')>2||target.needsToDiscard(1))) return 0;
							if(es.length==1&&att>0) return 0;
							for(var i=0;i<es.length;i++){
								var val=get.equipValue(es[i],target);
								if(val<=4){
									if(att>0){
										return 1;
									}
								}
								else if(val>=7){
									if(att<0){
										return -1;
									}
								}
							}
							return 0;
						}
					}
				}
			},
			hongde:{
				audio:2,
				trigger:{
					player:['loseAfter','gainAfter'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				filter:function(event,player){
					if(event.name=='gain'&&event.player==player) return event.cards&&event.cards.length>1;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>1;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('hongde'),'令一名其他角色摸一张牌',function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						return get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						player.logSkill('hongde',result.targets);
						result.targets[0].draw();
					}
				}
			},
			ziyuan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:function(card){
					var num=0;
					for(var i=0;i<ui.selected.cards.length;i++){
						num+=get.number(ui.selected.cards[i]);
					}
					return get.number(card)+num<=13;
				},
				complexCard:true,
				selectCard:function(){
					var num=0;
					for(var i=0;i<ui.selected.cards.length;i++){
						num+=get.number(ui.selected.cards[i]);
					}
					if(num==13) return ui.selected.cards.length;
					return ui.selected.cards.length+2;
				},
				discard:false,
				lose:false,
				delay:false,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				check:function(card){
					var num=0;
					for(var i=0;i<ui.selected.cards.length;i++){
						num+=get.number(ui.selected.cards[i]);
					}
					if(num+get.number(card)==13) return 9-get.value(card);
					if(ui.selected.cards.length==0){
						var cards=_status.event.player.getCards('h');
						for(var i=0;i<cards.length;i++){
							for(var j=i+1;j<cards.length;j++){
								if(cards[i].number+cards[j].number==13){
									if(cards[i]==card||cards[j]==card) return 8.5-get.value(card);
								}
							}
						}
					}
					return 0;
				},
				content:function(){
					target.gain(cards,player,'giveAuto');
					target.recover();
				},
				ai:{
					order:function(skill,player){
						if(game.hasPlayer(function(current){
							return (current.hp<current.maxHp&&current!=player&&
								get.recoverEffect(current,player,player)>0);
						})){
							return 10;
						}
						return 1;
					},
					result:{
						player:function(player,target){
							if(get.attitude(player,target)<0) return -1;
							var eff=get.recoverEffect(target,player,player);
							if(eff<0) return 0;
							if(eff>0){
								if(target.hp==1) return 3;
								return 2;
							}
							if(player.needsToDiscard()) return 1;
							return 0;
						}
					},
					threaten:1.3
				}
			},
			jugu:{
				audio:2,
				mod:{
					maxHandcard:function(player,num){
						return num+player.maxHp;
					}
				},
				trigger:{global:'phaseBefore',player:'enterGame'},
				forced:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					player.draw(player.maxHp);
				}
			},
			tuifeng:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				notemp:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseCard(get.prompt2('tuifeng'),'he',[1,trigger.num]).set('ai',function(card){
						if(card.name=='du') return 20;
						return 7-get.useful(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('tuifeng');
						player.addToExpansion(result.cards,player,'give').gaintag.add('tuifeng');
					}
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				marktext:'锋',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				group:'tuifeng2',
				ai:{
					threaten:0.8,
					maixie:true,
					maixie_hp:true
				}
			},
			tuifeng2:{
				audio:'tuifeng',
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return player.getExpansions('tuifeng').length>0;
				},
				content:function(){
					var cards=player.getExpansions('tuifeng');
					player.draw(2*cards.length);
					player.addTempSkill('tuifeng3');
					player.addMark('tuifeng3',cards.length,false);
					player.loseToDiscardpile(cards);
				}
			},
			tuifeng3:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+player.countMark('tuifeng3');
					}
				},
				onremove:true,
				charlotte:true,
			},
			weidi:{
				trigger:{global:['gameStart','zhuUpdate']},
				forced:true,
				audio:2,
				filter:function(event,player){
					var mode=get.mode();
					return (mode=='identity'||(mode=='versus'&&_status.mode=='four'));
				},
				content:function(){
					var list=[];
					var zhu=get.zhu(player);
					if(zhu&&zhu!=player&&zhu.skills){
						for(var i=0;i<zhu.skills.length;i++){
							if(lib.skill[zhu.skills[i]]&&lib.skill[zhu.skills[i]].zhuSkill){
								list.push(zhu.skills[i]);
							}
						}
					}
					player.addAdditionalSkill('weidi',list);
					player.storage.zhuSkill_weidi=list;
					game.broadcastAll(function(list){
						game.expandSkills(list);
						for(var i of list){
							var info=lib.skill[i];
							if(!info) continue;
							if(!info.audioname2) info.audioname2={};
							info.audioname2.yuanshu='weidi';
						}
					},list);
				}
			},
			zhenlue:{
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event){
					return get.type(event.card)=='trick';
				},
				content:function(){
					trigger.nowuxie=true;
				},
				mod:{
					targetEnabled:function(card,player,target){
						if(get.type(card)=='delay'){
							return false;
						}
					},
				}
			},
			jianshu:{
				audio:2,
				unique:true,
				limited:true,
				enable:'phaseUse',
				animationColor:'thunder',
				skillAnimation:'epic',
				filter:function(event,player){
					return !player.storage.jianshu&&player.countCards('h',{color:'black'})>0;
				},
				init:function(player){
					player.storage.jianshu=false;
				},
				filterTarget:function(card,player,target){
					if(target==player) return false;
					if(ui.selected.targets.length){
						return ui.selected.targets[0]!=target&&!ui.selected.targets[0].hasSkillTag('noCompareSource')&&target.countCards('h')
						&&!target.hasSkillTag('noCompareTarget');
					}
					return true;
				},
				filterCard:{color:'black'},
				mark:true,
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					if(_status.event.player.hp==1) return 8-get.value(card);
					return 6-get.value(card);
				},
				selectTarget:2,
				multitarget:true,
				content:function(){
					'step 0'
					player.awakenSkill('jianshu');
					player.storage.jianshu=true;
					targets[0].gain(cards,player,'give');
					'step 1'
					targets[0].chooseToCompare(targets[1]);
					'step 2'
					if(result.bool){
						targets[0].chooseToDiscard('he',2,true);
						targets[1].loseHp();
					}
					else if(result.tie){
						targets[0].loseHp()
						targets[1].loseHp()
					}
					else{
						targets[1].chooseToDiscard('he',2,true);
						targets[0].loseHp();
					}
				},
				intro:{
					content:'limited'
				},
				ai:{
					expose:0.4,
					order:4,
					result:{
						target:function(player,target){
							if(player.hasUnknown()) return 0;
							if(ui.selected.targets.length) return -1;
							return -0.5;
						}
					}
				}
			},
			yongdi:{
				audio:2,
				audioname:['xinping'],
				unique:true,
				limited:true,
				trigger:{player:'phaseZhunbeiBegin'},
				animationColor:'thunder',
				skillAnimation:'legend',
				filter:function(event,player){
					return !player.storage.yongdi;
				},
				init:function(player){
					player.storage.yongdi=false;
				},
				mark:true,
				intro:{
					content:'limited'
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('yongdi'),function(card,player,target){
						return (target.hasSex('male')||target.name=='key_yuri')&&target!=player;
					}).set('ai',function(target){
						if(!_status.event.goon) return 0;
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<=1) return 0;
						var mode=get.mode();
						if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
							if(target.name&&lib.character[target.name]){
								for(var i=0;i<lib.character[target.name][3].length;i++){
									if(lib.skill[lib.character[target.name][3][i]].zhuSkill){
										return att*2;
									}
								}
							}
						}
						return att;
					}).set('goon',!player.hasUnknown());
					'step 1'
					if(result.bool){
						player.awakenSkill('yongdi');
						player.storage.yongdi=true;
						player.logSkill('yongdi',result.targets);
						var target=result.targets[0];
						target.gainMaxHp(true);
						target.recover();
						var mode=get.mode();
						if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
							if(target.name&&lib.character[target.name]){
								var skills=lib.character[target.name][3];
								target.storage.zhuSkill_yongdi=[];
								for(var i=0;i<skills.length;i++){
									var info=lib.skill[skills[i]];
									if(info.zhuSkill){
										target.storage.zhuSkill_yongdi.push(skills[i]);
										if(info.init){
											info.init(target);
										}
										if(info.init2){
											info.init2(target);
										}
									}
								}
							}
						}
					}
				},
				ai:{
					expose:0.2
				}
			},
			regushe:{
				audio:'gushe',
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				selectTarget:[1,3],
				filter:function(event,player){
					return (player.countMark('regushe')+player.countMark('regushe2')<7)&&player.countCards('h')>0;
				},
				multitarget:true,
				multiline:true,
				content:function(){
					player.addTempSkill('regushe2');
					player.chooseToCompare(targets).callback=lib.skill.regushe.callback;
				},
				intro:{
					name:'饶舌',
					content:'mark'
				},
				callback:function(){
					'step 0'
					if(event.num1<=event.num2){
						target.chat(lib.skill.gushe.chat[player.countMark('regushe')]);
						game.delay();
						player.addMark('regushe',1);
						if(player.countMark('regushe')>=7){
							player.die();
						}
					}
					else player.addMark('regushe2',1,false);
					'step 1'
					if(event.num1>=event.num2){
						target.chooseToDiscard('he','弃置一张牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
							if(_status.event.goon) return 6-get.value(card);
							return 0;
						}).set('goon',get.attitude(target,player)<0);
					}
					else event.goto(3);
					'step 2'
					if(!result.bool){
						player.draw();
					}
					'step 3'
					if(event.num1<=event.num2){
						player.chooseToDiscard('he','弃置一张牌，或摸一张牌').set('ai',function(){return -1;});
					}
					else event.finish();
					'step 4'
					if(!result.bool) player.draw();
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							var num=ui.selected.targets.length+1;
							if(num+player.countMark('regushe')<=6) return -1;
							var hs=player.getCards('h');
							for(var i=0;i<hs.length;i++){
								if(get.value(hs[i])<=6){
									switch(hs[i].number){
										case 13:return -1;
										case 12:if(player.countMark('regushe')+num<=8) return -1;break;
										case 11:if(player.countMark('regushe')+num<=7) return -1;break;
										default:if(hs[i].number>5&&player.countMark('regushe')+num<=6) return -1;
									}
								}
							}
							return 0;
						},
					}
				},
				marktext:'饶',
			},
			regushe2:{
				charlotte:true,
				onremove:true,
			},
			rejici:{
				audio:'jici',
				trigger:{
					player:'compare',
					target:'compare',
				},
				forced:true,
				filter:function(event,player){
					if(player!=event.target&&event.iwhile) return false;
					return (player==event.player?event.num1:event.num2)<=player.countMark('regushe');
				},
				content:function(){
					trigger[player==trigger.player?'num1':'num2']+=player.countMark('regushe');
					game.log(player,'的拼点牌点数+'+player.countMark('regushe'));
					game.delayx();
					var cards=[trigger.card1];
					if(trigger.cardlist) cards.addArray(trigger.cardlist);
					else cards.push(trigger.card2);
					cards.sort(function(a,b){
						return get.number(b)-get.number(a);
					});
					var num=get.number(cards[0]);
					for(var i=1;i<cards.length;i++){
						if(get.number(cards[i])<num){
							cards.splice(i);
							break;
						}
					}
					cards=cards.filterInD();
					if(cards.length) player.gain(cards,'gain2');
				},
				group:'rejici2',
			},
			rejici2:{
				audio:'jici',
				trigger:{player:'die'},
				forced:true,
				forceDie:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return event.source&&event.source.isIn();
				},
				logTarget:'source',
				content:function(){
					var num=7-player.countMark('regushe');
					if(num>0) trigger.source.chooseToDiscard(num,true,'he');
					trigger.source.loseHp();
				},
			},
			gushe:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				selectTarget:[1,3],
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				multitarget:true,
				multiline:true,
				content:function(){
					player.chooseToCompare(targets).callback=lib.skill.gushe.callback;
				},
				intro:{
					name:'饶舌',
					content:'mark'
				},
				chat:['粗鄙之语','天地不容','谄谀之臣','皓首匹夫，苍髯老贼','二臣贼子','断脊之犬','我从未见过有如此厚颜无耻之人！'],
				callback:function(){
					'step 0'
					if(event.num1<=event.num2){
						target.chat(lib.skill.gushe.chat[player.countMark('gushe')]);
						game.delay();
						player.addMark('gushe',1);
						if(player.countMark('gushe')>=7){
							player.die();
						}
					}
					'step 1'
					if(event.num1>=event.num2){
						target.chooseToDiscard('he','弃置一张牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
							if(_status.event.goon) return 6-get.value(card);
							return 0;
						}).set('goon',get.attitude(target,player)<0);
					}
					else event.goto(3);
					'step 2'
					if(!result.bool){
						player.draw();
					}
					'step 3'
					if(event.num1<=event.num2){
						player.chooseToDiscard('he','弃置一张牌，或摸一张牌').set('ai',function(){return -1;});
					}
					else event.finish();
					'step 4'
					if(!result.bool) player.draw();
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							var num=ui.selected.targets.length+1;
							if(num>3) num=3;
							var hs=player.getCards('h');
							for(var i=0;i<hs.length;i++){
								if(get.value(hs[i])<=6){
									switch(hs[i].number){
										case 13:return -1;
										case 12:if(player.countMark('gushe')+num<=8) return -1;break;
										case 11:if(player.countMark('gushe')+num<=7) return -1;break;
										default:if(hs[i].number>5&&player.countMark('gushe')+num<=6) return -1;
									}
								}
							}
							return 0;
						},
					}
				}
			},
			jici:{
				audio:2,
				trigger:{player:'compare'},
				filter:function(event,player){
					return event.getParent().name=='gushe'&&!event.iwhile&&event.num1<=player.countMark('gushe');
				},
				content:function(){
					if(trigger.num1<player.countMark('gushe')){
						trigger.num1+=player.countMark('gushe');
					}
					else{
						player.getStat().skill.gushe--;
					}
				}
			},
			juesi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('h','sha')>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')>0&&player.inRange(target);
				},
				filterCard:{name:'sha'},
				content:function(){
					'step 0'
					target.chooseToDiscard('he',true);
					'step 1'
					if(target.hp>=player.hp&&result.bool&&result.cards[0].name!='sha'){
						player.useCard({name:'juedou',isCard:true},target);
					}
				},
				ai:{
					order:2,
					result:{
						target:function(player,target){
							if(get.effect(target,{name:'juedou'},player,player)<=0){
								return 0;
							}
							if(target.hp<player.hp){
								if(player.countCards('h')>player.hp) return -0.1;
								return 0;
							}
							var hs1=target.getCards('h','sha');
							var hs2=player.getCards('h','sha');
							if(hs1.length>hs2.length){
								return 0;
							}
							var hsx=target.getCards('h');
							if(hsx.length>2&&hs2.length<=1&&hsx[0].number<6){
								return 0;
							}
							if(hsx.length>3&&hs2.length<=1){
								return 0;
							}
							if(hs1.length>hs2.length-1&&hs1.length>0&&(hs2.length<=1||hs1[0].number>hs2[0].number)){
								return 0;
							}
							return -1;
						}
					}
				}
			},
			shefu:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				audio:2,
				init:function(player){
					if(!player.storage.shefu) player.storage.shefu=[];
					if(!player.storage.shefu2) player.storage.shefu2=[];
				},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						player.storage.shefu=[];
						player.storage.shefu2=[];
					},
					mark:function(dialog,content,player){
						if(content&&content.length){
							dialog.addAuto(content);
							if(player.isUnderControl(true)){
								var str='';
								for(var i=0;i<player.storage.shefu2.length;i++){
									str+=get.translation(player.storage.shefu2[i]);
									if(i<player.storage.shefu2.length-1){
										str+='、';
									}
								}
								dialog.add('<div class="text center">'+str+'</div>')
							}
						}
					},
				},
				content:function(){
					'step 0'
					var list1=[],list2=[],list3=[];
					for(var i=0;i<lib.inpile.length;i++){
						var type=get.type(lib.inpile[i]);
						if(type=='basic'){
							list1.push(['基本','',lib.inpile[i]]);
						}
						else if(type=='trick'){
							list2.push(['锦囊','',lib.inpile[i]]);
						}
						else if(type=='delay'){
							list3.push(['锦囊','',lib.inpile[i]]);
						}
					}
					player.chooseButton([get.prompt('shefu'),[list1.concat(list2).concat(list3),'vcard']]).set('filterButton',function(button){
						var player=_status.event.player;
						if(player.storage.shefu2&&player.storage.shefu2.contains(button.link[2])) return false;
						return true;
					}).set('ai',function(button){
						var rand=_status.event.rand;
						switch(button.link[2]){
							case 'sha':return 5+rand[1];
							case 'tao':return 4+rand[2];
							case 'lebu':return 3+rand[3];
							case 'shan':return 4.5+rand[4];
							case 'wuzhong':return 4+rand[5];
							case 'shunshou':return 3+rand[6];
							case 'nanman':return 2+rand[7];
							case 'wanjian':return 2+rand[8];
							default:return rand[0];
						}
					}).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),
					Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]);
					'step 1'
					if(result.bool){
						event.cardname=result.links[0][2];
						player.logSkill('shefu');
						player.chooseCard('he','选择一张牌作为“伏兵”',true);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						event.card=card;
						player.addToExpansion(card,player,'give').gaintag.add('shefu');
					}
					'step 3'
					if(player.getExpansions('shefu').contains(event.card)){
						player.storage.shefu.push(card);
						player.storage.shefu2.push(event.cardname);
						if(player.isOnline2()){
							player.send(function(storage){
								game.me.storage.shefu2=storage;
							},player.storage.shefu2);
						}
						player.syncStorage('shefu');
						player.markSkill('shefu');
					}
				},
				group:['shefu2']
			},
			shefu2:{
				trigger:{global:['useCard']},
				//priority:15,
				audio:'shefu',
				filter:function(event,player){
					if(_status.currentPhase==player||event.player==player) return false;
					return player.storage.shefu2&&player.storage.shefu2.contains(event.card.name)&&event.player.getHistory('lose',function(evt){
						return evt.getParent()==event&&evt.hs&&evt.hs.length==event.cards.length;
					}).length;
				},
				direct:true,
				content:function(){
					"step 0"
					var effect=0;
					if(trigger.card.name=='wuxie'||trigger.card.name=='shan'){
						if(get.attitude(player,trigger.player)<-1){
							effect=-1;
						}
					}
					else if(trigger.targets&&trigger.targets.length){
						for(var i=0;i<trigger.targets.length;i++){
							effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
						}
					}
					var str='设伏：是否令'+get.translation(trigger.player);
					if(trigger.targets&&trigger.targets.length){
						str+='对'+get.translation(trigger.targets);
					}
					str+='使用的'+get.translation(trigger.card)+'失效？'
					var next=player.chooseBool(str,function(){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(_status.event.effect<0){
							if(trigger.card.name=='sha'){
								var target=trigger.targets[0];
								if(target==player){
									return !player.countCards('h','shan');
								}
								else{
									return target.hp==1||(target.countCards('h')<=2&&target.hp<=2);
								}
							}
							else{
								return true;
							}
						}
						return false;
					});
					next.set('effect',effect);
					"step 1"
					if(result.bool){
						player.logSkill('shefu',trigger.player);
						var index=player.storage.shefu2.indexOf(trigger.card.name);
						if(index!=-1){
							var card=player.storage.shefu[index];
							player.loseToDiscardpile(card);
							player.storage.shefu.splice(index,1);
							player.storage.shefu2.splice(index,1);
							if(player.storage.shefu.length==0){
								player.unmarkSkill('shefu');
							}
							else{
								player.syncStorage('shefu');
								player.markSkill('shefu');
								if(player.isOnline2()){
									player.send(function(storage){
										game.me.storage.shefu2=storage;
									},player.storage.shefu2);
								}
							}
						}
						trigger.targets.length=0;
						trigger.all_excluded=true;
						if(trigger.player==_status.currentPhase) trigger.player.addTempSkill('baiban');
					}
				},
				ai:{
					threaten:1.8,
					expose:0.3
				}
			},
			benyu:{
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					if(!event.source) return false;
					var nh1=player.countCards('h');
					var nh2=event.source.countCards('h');
					var eh=player.countCards('e');
					if((nh1+eh)>nh2&&event.source.isAlive()) return true;
					if(nh1<Math.min(5,nh2)) return true;
				},
				direct:true,
				content:function(){
					"step 0"
					var num1=player.countCards('h');
					var num2=trigger.source.countCards('h');
					var eh=player.countCards('he',function(card){
						return lib.filter.cardDiscardable(card,player,'benyu');
					});
					var bool1=false,bool2=false;
					if(num1<Math.min(num2,5)) bool1=true;
					if(eh>num2&&trigger.source.isAlive()) bool2=true;
					if(bool1&&bool2){
						event.chosen=true;
						player.chooseControl('cancel2').set('prompt',get.prompt('benyu',trigger.source)).set('choiceList',[
							'将手牌摸至'+get.cnNumber(Math.min(num2,5))+'张',
							'弃置至少'+get.cnNumber(num2+1)+'张牌并对其造成1点伤害',
						])
					}
					else if(bool2) event.goto(3);
					"step 1"
					if(event.chosen){
						if(result.control=='cancel2') event.finish();
						else if(result.index==1) event.goto(3);
						else event._result={bool:true};
					}
					else player.chooseBool(get.prompt('benyu',trigger.source),'将手牌摸至'+get.cnNumber(Math.min(trigger.source.countCards('h'),5))+'张');
					"step 2"
					if(result.bool){
						player.logSkill('benyu',trigger.source);
						player.drawTo(Math.min(trigger.source.countCards('h'),5));
					}
					event.finish();
					"step 3"
					var num=trigger.source.countCards('h')+1;
					var args=[[num,player.countCards('he')],'he'];
					if(event.chosen){
						player.logSkill('benyu',trigger.source);
						args.push(true);
					}
					else{
						args.push(get.prompt('benyu',trigger.source));
						args.push('弃置'+get.cnNumber(num)+'张牌并对其造成1点伤害');
					}
					var next=player.chooseToDiscard.apply(player,args);
					if(!event.chosen) next.logSkill=['benyu',trigger.source];
					next.set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						if(ui.selected.cards.length>=_status.event.num){
							return -1;
						}
						if(get.damageEffect(trigger.source,player,player)>0&&(get.value(card,player)<0||_status.event.num<=2)){
							return 8-get.value(card);
						}
						return -1;
					});
					next.set('num',num);
					"step 4"
					if(result.bool) trigger.source.damage();
				},
			},
			jili:{
				audio:2,
				trigger:{
					global:'useCardToTarget'
				},
				forced:true,
				check:function(event,player){
					return get.effect(player,event.card,event.player,player)>0;
				},
				filter:function(event,player){
					if(get.color(event.card)!='red') return false;
					if(!event.targets) return false;
					if(event.player==player) return false;
					if(event.targets.contains(player)) return false;
					if(get.info(event.card).multitarget) return false;
					var type=get.type(event.card);
					if(type!='basic'&&type!='trick') return false;
					if(lib.filter.targetEnabled2(event.card,event.player,player)){
						for(var i=0;i<event.targets.length;i++){
							if(get.distance(event.targets[i],player)<=1) return true;
						}
					}
					return false;
				},
				autodelay:true,
				content:function(){
					trigger.getParent().targets.add(player);
					trigger.player.line(player,'green');
				}
			},
			zhidao:{
				audio:2,
				trigger:{source:'damageSource'},
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					return _status.currentPhase==player&&event.player.isAlive()&&
					event.player.countCards('hej')>0&&event.player!=player&&!player.hasSkill('zhidao2');
				},
				forced:true,
				content:function(){
					var num=0;
					if(trigger.player.countCards('h')) num++;
					if(trigger.player.countCards('e')) num++;
					if(trigger.player.countCards('j')) num++;
					if(num){
						player.gainPlayerCard(trigger.player,num,'hej',true).set('filterButton',function(button){
							for(var i=0;i<ui.selected.buttons.length;i++){
								if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
							}
							return true;
						});
					}
					player.addTempSkill('zhidao2');
				}
			},
			zhidao2:{
				mod:{
					playerEnabled:function(card,player,target){
						if(player!=target) return false;
					}
				}
			},
			luanzhan:{
				mod:{
					selectTarget:function(card,player,range){
						if(!player.storage.luanzhan) return;
						if(range[1]==-1) return;
						if(card.name=='sha') range[1]+=player.storage.luanzhan;
						if(get.color(card)=='black'&&get.type(card)=='trick'){
							var info=get.info(card);
							if(info.multitarget) return false;
							range[1]+=player.storage.luanzhan;
						}
					},
				},
				trigger:{source:'damageSource'},
				audio:2,
				forced:true,
				mark:true,
				intro:{
					content:function(storage){
						return '可以额外指定'+storage+'个目标';
					}
				},
				init:function(player){
					player.storage.luanzhan=0;
				},
				init2:function(player){
					player.markSkill('luanzhan');
				},
				content:function(){
					if(typeof player.storage.luanzhan=='number'){
						player.storage.luanzhan+=trigger.num;
					}
					else{
						player.storage.luanzhan=trigger.num;
					}
					if(player.hasSkill('luanzhan')){
						player.markSkill('luanzhan');
					}
				},
				group:'luanzhan_cancel',
				subSkill:{
					cancel:{
						audio:'luanzhan',
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event,player){
							if(!player.storage.luanzhan) return false;
							var check=false;
							var card=event.card;
							if(card.name=='sha'){
								check=true;
							}
							else if(get.color(card)=='black'&&get.type(card)=='trick'){
								var info=get.info(card);
								if(!info.multitarget){
									check=true;
									if(info.selectTarget==-1){
										check=false;
									}
									else if(Array.isArray(info.selectTarget)&&info.selectTarget[1]==-1){
										check=false;
									}
								}
							}
							if(check&&event.targets&&event.targets.length<player.storage.luanzhan){
								return true;
							}
							return false;
						},
						content:function(){
							player.storage.luanzhan=0;
							player.markSkill('luanzhan');
						}
					}
				}
			},
			xinzhengnan:{
				audio:'zhengnan',
				trigger:{global:'dying'},
				frequent:true,
				filter:function(event,player){
					return !player.storage.xinzhengnan||!player.storage.xinzhengnan.contains(event.player);
				},
				content:function(){
					'step 0'
					if(!player.storage.xinzhengnan) player.storage.xinzhengnan=[];
					player.storage.xinzhengnan.add(trigger.player);
					player.storage.xinzhengnan.sortBySeat();
					player.markSkill('xinzhengnan');
					player.recover();
					var list=[];
					if(!player.hasSkill('new_rewusheng')){
						list.push('new_rewusheng');
					}
					if(!player.hasSkill('xindangxian')){
						list.push('xindangxian');
					}
					if(!player.hasSkill('rezhiman')){
						list.push('rezhiman');
					}
					if(list.length){
						player.draw();
						event.list=list;
					}
					else{
						player.draw(3);
						event.finish();
					}
					'step 1'
					if(event.list.length==1) event._result={control:event.list[0]};
					else player.chooseControl(event.list).set('prompt','征南：选择获得下列技能中的一个').set('ai',function(){
						if(event.list.contains('xindangxian')) return 'xindangxian';
						return 0;
					});
					'step 2'
					if(result.control=='xindangxian') player.storage.xinfuli=true;
					player.addSkill(result.control);
					player.popup(result.control);
					game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
				},
				ai:{
					threaten:1.3
				},
				intro:{
					content:'已因$发动过技能',
				},
				derivation:['new_rewusheng','xindangxian','rezhiman'],
			},
			zhengnan:{
				audio:1,
				trigger:{global:'dieAfter'},
				frequent:true,
				content:function(){
					'step 0'
					player.draw(3);
					var list=[];
					if(!player.hasSkill('new_rewusheng')){
						list.push('new_rewusheng');
					}
					if(!player.hasSkill('dangxian')){
						list.push('dangxian');
					}
					if(!player.hasSkill('zhiman')){
						list.push('zhiman');
					}
					if(list.length){
						player.chooseControl(list).set('prompt','选择获得一项技能');
					}
					'step 1'
					player.addSkill(result.control);
					player.popup(result.control);
					game.log(player,'获得技能','【'+get.translation(result.control)+'】');
				},
				ai:{
					threaten:2.4
				},
				derivation:['wusheng','dangxian','zhiman'],
			},
			xiefang:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-game.countPlayer(function(current){
							return current.hasSex('female');
						});
					}
				}
			},
			qizhi:{
				audio:2,
				trigger:{
					player:'useCardToPlayered'
				},
				direct:true,
				filter:function(event,player){
					if(!event.targets) return false;
					if(!event.isFirstTarget) return false;
					if(_status.currentPhase!=player) return false;
					var type=get.type(event.card,'trick');
					if(type!='basic'&&type!='trick') return false;
					if(event.noai) return false;
					return game.hasPlayer(function(target){
						return !event.targets.contains(target)&&target.countCards('he')>0;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('qizhi'),'弃置一名角色的一张牌，然后其摸一张牌',function(card,player,target){
						return !_status.event.targets.contains(target)&&target.countCards('he')>0;
					}).set('ai',function(target){
						var player=_status.event.player;
						if(target==player) return 2;
						if(get.attitude(player,target)<=0){
							return 1
						}
						return 0.5;
					}).set('targets',trigger.targets);
					'step 1'
					if(result.bool){
						player.getHistory('custom').push({qizhi:true});
						player.logSkill('qizhi',result.targets);
						player.discardPlayerCard(result.targets[0],true,'he');
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					event.target.draw();
				},
			},
			jinqu:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				check:function(event,player){
					return player.getHistory('custom',function(evt){
						return evt.qizhi==true;
					}).length>=player.countCards('h');
				},
				prompt:function(event,player){
					var num=player.getHistory('custom',function(evt){
						return evt.qizhi==true;
					}).length;
					return '进趋：是否摸两张牌并将手牌弃置至'+get.cnNumber(num)+'张？';
				},
				content:function(){
					'step 0'
					player.draw(2);
					'step 1'
					var dh=player.countCards('h')-player.getHistory('custom',function(evt){
						return evt.qizhi==true;
					}).length;
					if(dh>0){
						player.chooseToDiscard(dh,true);
					}
				},
				ai:{combo:'qizhi'},
			},
			jiaozi:{
				audio:2,
				trigger:{player:'damageBegin3',source:'damageBegin1'},
				forced:true,
				filter:function(event,player){
					return player.isMaxHandcard(true);
				},
				content:function(){
					trigger.num++;
				},
				ai:{presha:true},
			},
			jiqiao:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt2('jiqiao'),[1,player.countCards('he',{type:'equip'})],'he',function(card){
						return get.type(card)=='equip';
					}).set('ai',function(card){
						if(card.name=='bagua') return 10;
						return 7-get.value(card);
					}).logSkill='jiqiao';
					'step 1'
					if(result.bool){
						event.cards=get.cards(2*result.cards.length);
						player.showCards(event.cards);
					}
					else{
						event.finish();
					}
					'step 2'
					var gained=[];
					var tothrow=[];
					for(var i=0;i<event.cards.length;i++){
						if(get.type(event.cards[i])!='equip'){
							gained.push(event.cards[i]);
						}
						else{
							tothrow.push(event.cards[i]);
						}
					}
					player.gain(gained,'gain2');
					game.cardsDiscard(tothrow);
				},
				ai:{
					threaten:1.5
				}
			},
			linglong:{
				audio:2,
				group:'linglong_bagua',
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'&&!player.getEquip(1)) return num+1;
					},
					maxHandcard:function(player,num){
						if(player.getEquip(3)||player.getEquip(4)||player.getEquip(6)) return;
						return num+1;
					},
					targetInRange:function(card,player,target,now){
						if(player.getEquip(5)) return;
						var type=get.type(card);
						if(type=='trick'||type=='delay') return true;
					},
					canBeDiscarded:function (card,source,player){
						if(player.getEquip(5)) return;
						if(get.position(card)=='e'&&['equip2','equip5'].contains(get.subtype(card))) return false;
					},
					/*cardDiscardable:function (card,player){
						if(player.getEquip(5)) return;
						if(get.position(card)=='e') return false;
					},*/
				}
			},
			linglong_bagua:{
				audio:'linglong',
				inherit:'bagua_skill',
				filter:function(event,player){
					if(!lib.skill.bagua_skill.filter(event,player)) return false;
					if(!player.isEmpty(2)) return false;
					return true;
				},
				ai:{
					respondShan:true,
					effect:{
						target:function(card,player,target){
							if(player==target&&get.subtype(card)=='equip2'){
								if(get.equipValue(card)<=7.5) return 0;
							}
							if(target.getEquip(2)) return;
							return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
						}
					}
				},
			},
			zhenwei:{
				audio:2,
				trigger:{
					global:'useCardToTarget'
				},
				direct:true,
				filter:function(event,player){
					if(player==event.target||player==event.player) return false;
					if(!player.countCards('he')) return false;
					if(event.targets.length>1) return false;
					if(!event.target) return false;
					if(event.target.hp>=player.hp) return false;

					var card=event.card;
					if(card.name=='sha') return true;
					if(get.color(card)=='black'&&get.type(card,'trick')=='trick') return true;
					return false;
				},
				content:function(){
					"step 0"
					var save=false;
					if(get.attitude(player,trigger.target)>2){
						if(trigger.card.name=='sha'){
							if(player.countCards('h','shan')||player.getEquip(2)||
							trigger.target.hp==1||player.hp>trigger.target.hp+1){
								if(!trigger.target.countCards('h','shan')||trigger.target.countCards('h')<player.countCards('h')){
									save=true;
								}
							}
						}
						else if(trigger.card.name=='juedou'&&trigger.target.hp==1){
							save=true;
						}
						else if(trigger.card.name=='shunshou'&&
							get.attitude(player,trigger.player)<0&&
							get.attitude(trigger.player,trigger.target)<0){
							save=true;
						}
					}
					var next=player.chooseToDiscard('he',get.prompt('zhenwei',trigger.target),'弃置一张牌，将'+get.translation(trigger.card)+'转移给自己，或令此牌对其无效');
					next.logSkill=['zhenwei',trigger.target];
					next.set('ai',function(card){
						if(_status.event.aisave){
							return 7-get.value(card);
						}
						return 0;
					});
					next.set('aisave',save);
					"step 1"
					if(result.bool){
						player.chooseControl('转移','失效',function(){
							var trigger=_status.event.getTrigger();
							var player=_status.event.player;
							if(trigger.card.name=='sha'){
								if(player.countCards('h','shan')) return '转移';
							}
							else if(trigger.card.name=='juedou'){
								if(player.countCards('h','sha')) return '转移';
							}
							return '失效';
						}).set('prompt','将'+get.translation(trigger.card)+'转移给你，或令其失效');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.control=='转移'){
						player.draw();
						trigger.getParent().targets.remove(trigger.target);
						trigger.getParent().triggeredTargets2.remove(trigger.target);
						trigger.getParent().targets.push(player);
						trigger.untrigger();
						trigger.player.line(player);
						game.delayx();
					}
					else{
						var cards=trigger.cards.filterInD();
						if(cards.length>0){
							trigger.player.addSkill('zhenwei2');
							trigger.player.addToExpansion(cards,'gain2').gaintag.add('zhenwei2');
						}
						trigger.targets.length=0;
						trigger.getParent().triggeredTargets2.length=0;
					}
				},
				ai:{
					threaten:1.1
				}
			},
			zhenwei2:{
				audio:false,
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				trigger:{global:'phaseEnd'},
				forced:true,
				charlotte:true,
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				content:function(){
					'step 0'
					var cards=player.getExpansions('zhenwei2');
					if(cards.length) player.gain(cards,'gain2');
					'step 1'
					player.removeSkill('zhenwei2');
				}
			},
			xunzhi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				init:function(player){
					player.storage.xunzhi=0;
				},
				filter:function(event,player){
					var previous=player.getPrevious();
					var next=player.getNext();
					if(previous&&next){
						return player.hp!=previous.hp&&player.hp!=next.hp;
					}
					return false;
				},
				check:function(event,player){
					return player.hp>=3&&player.countCards('h')>player.hp+1+player.storage.xunzhi;
				},
				content:function(){
					player.loseHp();
					player.storage.xunzhi+=2;
				},
				mark:true,
				intro:{
					content:function(storage,player){
						return '手牌上限+'+player.storage.xunzhi;
					}
				},
				mod:{
					maxHandcard:function(player,num){
						if(typeof player.storage.xunzhi=='number'){
							return num+player.storage.xunzhi;
						}
					}
				}
			},
			yawang:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				check:function(event,player){
					var num=game.countPlayer(function(target){
						return target.hp==player.hp;
					});
					if(!player.hasSkill('xunzhi2')){
						var nh=player.countCards('h');
						if(nh>5) return false;
						if(num==3&&nh>3) return false;
					}
					return num>=3;
				},
				content:function(){
					trigger.changeToZero();
					var num=game.countPlayer(function(target){
						return target.hp==player.hp;
					});
					if(num){
						player.draw(num);
					}
					player.storage.yawang=num;
					player.addTempSkill('yawang2');
				}
			},
			yawang2:{
				mod:{
					cardEnabled:function(card,player){
						if(_status.currentPhase!=player) return;
						if(player.countUsed()>=player.storage.yawang) return false;
					}
				}
			},
			luoyan_tianxiang:{
				inherit:'tianxiang',
				filter:function(event,player){
					if(!player.storage.xingwu||!player.storage.xingwu.length) return false;
					if(player.hasSkill('tianxiang')) return false;
					return lib.skill.tianxiang.filter(event,player);
				},
			},
			luoyan_liuli:{
				inherit:'liuli',
				filter:function(event,player){
					if(!player.storage.xingwu||!player.storage.xingwu.length) return false;
					if(player.hasSkill('liuli')) return false;
					return lib.skill.liuli.filter(event,player);
				},
			},
			luoyan:{
				group:['luoyan_tianxiang','luoyan_liuli'],
			},
			xingwu:{
				audio:2,
				group:['xingwu_color','xingwu_color2'],
				subSkill:{
					color:{
						trigger:{player:'phaseZhunbeiBegin'},
						silent:true,
						content:function(){
							player.storage.xingwu_color=['black','red'];
						}
					},
					color2:{
						trigger:{player:'useCard'},
						silent:true,
						filter:function(event,player){
							return Array.isArray(player.storage.xingwu_color)&&_status.currentPhase==player;
						},
						content:function(){
							player.storage.xingwu_color.remove(get.color(trigger.card));
						}
					}
				},
				trigger:{player:'phaseDiscardBegin'},
				direct:true,
				filter:function(event,player){
					if(!player.storage.xingwu_color) return false;
					var length=player.storage.xingwu_color.length;
					if(length==0) return false;
					var hs=player.getCards('h');
					if(hs.length==0) return false;
					if(length==2) return true;
					var color=player.storage.xingwu_color[0];
					for(var i=0;i<hs.length;i++){
						if(get.color(hs[i])==color) return true;
					}
					return false;
				},
				intro:{
					content:'cards'
				},
				init:function(player){
					player.storage.xingwu=[];
				},
				content:function(){
					'step 0'
					player.chooseCard(get.prompt('xingwu'),function(card){
						return _status.event.player.storage.xingwu_color.contains(get.color(card));
					}).set('ai',function(card){
						var player=_status.event.player;
						if(player.storage.xingwu.length==2){
							if(!game.hasPlayer(function(current){
								return (current!=player&&current.hasSex('male')&&
									get.damageEffect(current,player,player)>0&&
									get.attitude(player,current)<0)
							})) return 0;
						}
						return 7-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('xingwu');
						if(player.storage.xingwu.length<2){
							player.$give(result.cards,player);
						}
						player.lose(result.cards,ui.special);
						player.storage.xingwu=player.storage.xingwu.concat(result.cards);
						player.markSkill('xingwu');
						player.syncStorage('xingwu');
					}
					else{
						event.finish();
					}
					'step 2'
					if(player.storage.xingwu.length==3){
						player.$throw(player.storage.xingwu);
						while(player.storage.xingwu.length){
							player.storage.xingwu.shift().discard();
						}
						player.unmarkSkill('xingwu');
						player.chooseTarget(function(card,player,target){
							return target!=player&&target.hasSex('male');
						},'对一名男性角色造成两点伤害并弃置其装备区内的牌').set('ai',function(target){
							var player=_status.event.player;
							if(get.attitude(player,target)>0) return -1;
							return get.damageEffect(target,player,player)+target.countCards('e')/2;
						});
					}
					else{
						event.finish();
					}
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						target.damage(2);
						event.target=target;
						player.line(target,'green');
					}
					else{
						event.finish();
					}
					'step 4'
					if(event.target&&event.target.isAlive()){
						var es=event.target.getCards('e');
						if(es.length){
							event.target.discard(es);
						}
					}
				},
				ai:{
					threaten:1.5
				}
			},
			yinbing:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				audio:2,
				preHidden:true,
				filter:function(event,player){
					return player.countCards('he',{type:'basic'})<player.countCards('he');
				},
				marktext:'兵',
				content:function(){
					"step 0"
					player.chooseCard([1,player.countCards('he')-player.countCards('he',{type:'basic'})],'he',get.prompt('yinbing'),function(card){
						return get.type(card)!='basic';
					}).set('ai',function(card){
						return 6-get.value(card);
					}).setHiddenSkill('yinbing');
					"step 1"
					if(result.bool){
						player.logSkill('yinbing');
						player.addToExpansion(result.cards,player,'give').gaintag.add('yinbing');
					}
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'||card.name=='juedou'){
								if(current<0) return 1.2;
							}
						}
					},
					threaten:function(player,target){
						if(target.getExpansions('yinbing').length) return 2;
						return 1;
					}
				},
				subSkill:{
					discard:{
						trigger:{player:'damageEnd'},
						forced:true,
						filter:function(event,player){
							return event.card&&player.getExpansions('yinbing').length>0&&
							(event.card.name=='sha'||event.card.name=='juedou');
						},
						content:function(){
							'step 0'
							player.chooseCardButton('移去一张引兵牌',true,player.getExpansions('yinbing'));
							'step 1'
							if(result.bool) player.loseToDiscardpile(result.links);
						}
					}
				},
				group:'yinbing_discard'
			},
			juedi:{
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return player.getExpansions('yinbing').length>0;
				},
				forced:true,
				audio:2,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('juedi'),true,function(card,player,target){
						return player.hp>=target.hp;
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<2) return att-10;
						var num=att/10;
						if(target==player){
							num+=player.maxHp-player.countCards('h')+0.5;
						}
						else{
							num+=_status.event.n2*2;
							if(target.isDamaged()){
								if(target.hp==1){
									num+=3;
								}
								else if(target.hp==2){
									num+=2;
								}
								else{
									num+=0.5;
								}
							}
						}
						if(target.hasJudge('lebu')){
							num/=2;
						}
						return num;
					}).set('n2',player.getExpansions('yinbing').length);
					'step 1'
					if(result.bool){
						player.line(result.targets[0],'green');
						var cards=player.getExpansions('yinbing');
						if(result.targets[0]==player){
							player.loseToDiscardpile(cards);
							var num=player.maxHp-player.countCards('h');
							if(num>0) player.draw(num);
						}
						else{
							var target=result.targets[0];
							target.recover();
							target.gain(cards,player,'give');
							target.draw(cards.length);
						}
					}
				}
			},
			meibu:{
				trigger:{global:'phaseUseBegin'},
				filter:function(event,player){
					return event.player!=player&&get.distance(event.player,player,'attack')>1;
				},
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)>=0) return false;
					var e2=player.getEquip(2);
					if(e2){
						if(e2.name=='tengjia') return true;
						if(e2.name=='bagua') return	true;
					}
					return player.countCards('h','shan')>0;
				},
				content:function(){
					var target=trigger.player;
					target.addTempSkill('meibu_viewas');
					target.addTempSkill('meibu_range');
					target.storage.meibu=player;
					target.markSkillCharacter('meibu',player,'魅步','锦囊牌均视为杀且'+get.translation(player)+'视为在攻击范围内');
				},
				ai:{
					expose:0.2
				},
				subSkill:{
					range:{
						mod:{
							targetInRange:function(card,player,target){
								if(card.name=='sha'&&target==player.storage.meibu){
									return true;
								}
							}
						},
						onremove:function(player){
							game.broadcast(function(player){
								if(player.marks.meibu){
									player.marks.meibu.delete();
									delete player.marks.meibu;
								}
							},player);
							if(player.marks.meibu){
								player.marks.meibu.delete();
								delete player.marks.meibu;
								game.addVideo('unmark',player,'meibu');
							}
						},
						trigger:{player:'useCard'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.skill=='meibu_viewas'
						},
						content:function(){
							player.removeSkill('meibu_viewas');
							game.broadcastAll(function(player){
								if(player.marks.meibu&&player.marks.meibu.info){
									player.marks.meibu.info.content=player.marks.meibu.info.content.slice(8);
								}
							},player);
						}
					},
					viewas:{
						mod:{
							cardEnabled:function(card,player){
								if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
							},
							cardUsable:function(card,player){
								if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
							},
							cardRespondable:function(card,player){
								if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
							},
							cardSavable:function(card,player){
								if(card.name!='sha'&&get.type(card,'trick')=='trick') return false;
							},
						},
						enable:['chooseToUse','chooseToRespond'],
						filterCard:function(card){
							return get.type(card,'trick')=='trick';
						},
						viewAs:{name:'sha'},
						check:function(){return 1},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondSha')&&current<0) return 0.8
								}
							},
							respondSha:true,
							order:4,
							useful:-1,
							value:-1
						}
					}
				}
			},
			mumu:{
				enable:'phaseUse',
				usable:1,
				filterCard:function(card,player,target){
					return card.name=='sha'||(get.type(card,'trick')=='trick'&&get.color(card)=='black');
				},
				check:function(card){
					return 7-get.value(card);
				},
				filterTarget:function(card,player,target){
					if(target==player) return false;
					return target.getEquip(1)||target.getEquip(2);
				},
				content:function(){
					'step 0'
					var e1=target.getEquip(1);
					var e2=target.getEquip(2);
					event.e1=e1;
					event.e2=e2;
					if(e1&&e2){
						player.chooseControl('武器牌','防具牌').set('ai',function(){
							if(_status.event.player.getEquip(2)){
								return '武器牌';
							}
							return '防具牌';
						});
					}
					else if(e1){
						event.choice='武器牌';
					}
					else{
						event.choice='防具牌';
					}
					'step 1'
					var choice=event.choice||result.control;
					if(choice=='武器牌'){
						if(event.e1){
							target.discard(event.e1);
						}
						player.draw();
					}
					else{
						if(event.e2){
							player.equip(event.e2);
							target.$give(event.e2,player);
						}
					}
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(target.getEquip(2)&&!player.getEquip(2)){
								return -2;
							}
							return -1;
						}
					}
				}
			},
			fentian:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					if(player.countCards('h')>=player.hp) return false;
					return game.hasPlayer(function(current){
						return player!=current&&player.inRange(current)&&current.countCards('he');
					});
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				content:function(){
					'step 0'
					player.chooseTarget('焚天：选择一名攻击范围内的角色，将其一张牌置于你的武将牌上',true,function(card,player,target){
						return player!=target&&player.inRange(target)&&target.countCards('he')>0;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target)
					});
					'step 1'
					if(result.bool){
						player.logSkill('fentian',result.targets);
						event.target=result.targets[0];
						player.choosePlayerCard(result.targets[0],'he',true);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.addToExpansion(result.links,target,'give').gaintag.add('fentian');
					}
				},
				mod:{
					attackRange:function(from,distance){
						return distance+from.getExpansions('fentian').length;
					}
				}
			},
			zhiri:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				unique:true,
				juexingji:true,
				audio:2,
				skillAnimation:true,
				animationColor:'fire',
				derivation:'xintan',
				filter:function(event,player){
					return player.getExpansions('fentian').length>=3;
				},
				content:function(){
					player.loseMaxHp();
					player.addSkill('xintan');
					player.storage.zhiri=true;
					player.awakenSkill('zhiri');
				}
			},
			xintan:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				unique:true,
				filter:function(event,player){
					return player.getExpansions('fentian').length>=2;
				},
				filterTarget:true,
				prompt:'移去两张“焚”并令一名角色失去一点体力',
				content:function(){
					'step 0'
					player.chooseCardButton(2,'移去两张“焚”并令'+get.translation(target)+'失去一点体力',player.getExpansions('fentian'),true);
					'step 1'
					if(result.bool){
						player.loseToDiscardpile(result.links);
						target.loseHp();
					}
				},
				ai:{
					order:8,
					result:{
						target:-1
					}
				}
			},
			danji:{
				skillAnimation:true,
				animationColor:'water',
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				unique:true,
				juexingji:true,
				filter:function(event,player){
					var zhu=get.zhu(player);
					if(zhu&&zhu.isZhu){
						var name=zhu.name
						while(name.indexOf('_')!=-1){
							name=name.slice(name.indexOf('_')+1);
						}
						if(name.indexOf('liubei')==0) return false;
					}
					return !player.storage.danji&&player.countCards('h')>player.hp;
				},
				content:function(){
					player.storage.danji=true;
					player.loseMaxHp();
					player.addSkill('mashu');
					player.addSkill('nuzhan');
					player.awakenSkill('danji');
				}
			},
			nuzhan:{
				audio:2,
				popup:false,
				silent:true,
				firstDo:true,
				trigger:{player:'useCard1'},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.addCount!==false&&event.cards&&
						event.cards.length==1&&get.type(event.cards[0],'trick')=='trick';
				},
				forced:true,
				content:function(){
					trigger.addCount=false;
					if(player.stat[player.stat.length-1].card.sha>0){
						player.stat[player.stat.length-1].card.sha--;
					}
				},
				group:'nuzhan2'
			},
			nuzhan2:{
				audio:'nuzhan',
				trigger:{player:'useCard1'},
				forced:true,
				popup:false,
				silent:true,
				firstDo:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.cards&&
						event.cards.length==1&&get.type(event.cards[0])=='equip';
				},
				content:function(){
					trigger.baseDamage++;
				}
			},
			jieyuan:{
				group:['jieyuan_more','jieyuan_less'],
				subSkill:{
					more:{
						audio:true,
						trigger:{source:'damageBegin1'},
						direct:true,
						filter:function(event,player){
							if(!player.countCards(player.hasSkill('fenxin_nei')?'he':'h',function(card){
								if(player.hasSkill('fenxin_nei')||(_status.connectMode&&get.position(card)=='h')) return true;
								return get.color(card)=='black';
							})) return false;
							return (event.player.hp>=player.hp||player.hasSkill('fenxin_fan'))&&player!=event.player;
						},
						content:function(){
							'step 0'
							var goon=(get.attitude(player,trigger.player)<0);
							var next=player.chooseToDiscard(get.prompt('jieyuan',trigger.player),player.hasSkill('fenxin_nei')?'he':'h');
							if(!player.hasSkill('fenxin_nei')){
								next.set('filterCard',function(card){
									return get.color(card)=='black';
								});
								next.set('prompt2','弃置一张黑色手牌令伤害+1');
							}
							else{
								next.set('prompt2','弃置一张手牌令伤害+1');
							}
							next.set('ai',function(card){
								if(_status.event.goon){
									return 8-get.value(card);
								}
								return 0;
							});
							next.set('goon',goon);
							next.logSkill=['jieyuan_more',trigger.player];
							'step 1'
							if(result.bool){
								trigger.num++;
							}
						}
					},
					less:{
						audio:true,
						trigger:{player:'damageBegin2'},
						filter:function(event,player){
							if(!player.countCards(player.hasSkill('fenxin_nei')?'he':'h',function(card){
								if(player.hasSkill('fenxin_nei')||(_status.connectMode&&get.position(card)=='h')) return true;
								return get.color(card)=='red';
							})) return false;
							return event.source&&(event.source.hp>=player.hp||player.hasSkill('fenxin_zhong'))&&player!=event.source;
						},
						direct:true,
						content:function(){
							"step 0"
							var next=player.chooseToDiscard(get.prompt('jieyuan'),player.hasSkill('fenxin_nei')?'he':'h');
							if(!player.hasSkill('fenxin_nei')){
								next.set('filterCard',function(card){
									return get.color(card)=='red';
								});
								next.set('prompt2','弃置一张红色手牌令伤害-1');
							}
							else{
								next.set('prompt2','弃置一张手牌令伤害-1');
							}
							next.set('ai',function(card){
								var player=_status.event.player;
								if(player.hp==1||_status.event.getTrigger().num>1){
									return 9-get.value(card);
								}
								if(player.hp==2){
									return 8-get.value(card);
								}
								return 7-get.value(card);
							});
							next.logSkill='jieyuan_less';
							"step 1"
							if(result.bool){
								trigger.num--;
							}
						}
					}
				},
				ai:{
					expose:0.2,
					threaten:1.5
				}
			},
			fenxin:{
				mode:['identity'],
				available:function(mode){
					if(mode=='identity'&&_status.mode=='purple') return false;
				},
				trigger:{global:'dieAfter'},
				filter:function(event,player){
					return ['fan','zhong','nei'].contains(event.player.identity)&&!player.hasSkill('fenxin_'+event.player.identity);
				},
				forced:true,
				content:function(){
					player.addSkill('fenxin_'+trigger.player.identity);
					player.markSkill('fenxin');
				},
				intro:{
					mark:function(dialog,content,player){
						if(player.hasSkill('fenxin_zhong')){
							dialog.addText('你发动“竭缘”减少伤害无体力值限制');
						}
						if(player.hasSkill('fenxin_fan')){
							dialog.addText('你发动“竭缘”增加伤害无体力值限制');
						}
						if(player.hasSkill('fenxin_nei')){
							dialog.addText('将“竭缘”中的黑色手牌和红色手牌改为一张牌');
						}
					}
				},
				subSkill:{
					fan:{charlotte:true},
					zhong:{charlotte:true},
					nei:{charlotte:true}
				},
				ai:{
					combo:'jieyuan'
				}
			},
			fenxin_old:{
				mode:['identity'],
				trigger:{source:'dieBegin'},
				init:function(player){
					player.storage.fenxin=false;
				},
				intro:{
					content:'limited'
				},
				skillAnimation:'epic',
				animationColor:'fire',
				unique:true,
				limited:true,
				audio:2,
				mark:true,
				filter:function(event,player){
					if(player.storage.fenxin) return false;
					return event.player.identity!='zhu'&&player.identity!='zhu'&&
						player.identity!='mingzhong'&&event.player.identity!='mingzhong';
				},
				check:function(event,player){
					if(player.identity==event.player.identity) return Math.random()<0.5;
					var stat=get.situation();
					switch(player.identity){
						case 'fan':
							if(stat<0) return false;
							if(stat==0) return Math.random()<0.6;
							return true;
						case 'zhong':
							if(stat>0) return false;
							if(stat==0) return Math.random()<0.6;
							return true;
						case 'nei':
							if(event.player.identity=='fan'&&stat<0) return true;
							if(event.player.identity=='zhong'&&stat>0) return true;
							if(stat==0) return Math.random()<0.7;
							return false;
					}
				},
				prompt:function(event,player){
					return '焚心：是否与'+get.translation(event.player)+'交换身份？';
				},
				content:function(){
					game.broadcastAll(function(player,target,shown){
						var identity=player.identity;
						player.identity=target.identity;
						if(shown||player==game.me){
							player.setIdentity();
						}
						target.identity=identity;
					},player,trigger.player,trigger.player.identityShown);
					player.line(trigger.player,'green');
					player.storage.fenxin=true;
					player.awakenSkill('fenxin_old');
				}
			},
			xisheng:{
				enable:'chooseToUse',
				usable:1,
				viewAs:{name:'tao'},
				viewAsFilter:function(player){
					return player!=_status.currentPhase&&player.countCards('hes')>1;
				},
				selectCard:2,
				filterCard:true,
				position:'hes',
			},
			shulv:{
				inherit:'zhiheng',
				prompt:'弃置一张牌并摸一张牌',
				selectCard:1,
				filter:function(event,player){
					return player.countCards('hs')>player.hp;
				},
			},
			xiandeng:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					},
					targetInRange:function(card,player){
						if(card.name=='sha'&&player.countUsed('sha',true)==0) return true;
					},
				},
			},
			qingyi:{
				audio:2,
				trigger:{player:'phaseJudgeBefore'},
				direct:true,
				content:function(){
					"step 0"
					var check= player.countCards('h')>2;
					player.chooseTarget(get.prompt("qingyi"),"跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】",function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'sha'},target,false);
					}).set('check',check).set('ai',function(target){
						if(!_status.event.check) return 0;
						return get.effect(target,{name:'sha'},_status.event.player);
					});
					"step 1"
					if(result.bool){
						player.logSkill('qingyi',result.targets);
						player.useCard({name:'sha',isCard:true},result.targets[0],false);
						trigger.cancel();
						player.skip('phaseDraw');
					}
				},
			},
			qingyi1:{
				audio:true,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				content:function(){
					"step 0"
					player.addSkill('qingyi3');
					var check= player.countCards('h')>2;
					player.chooseTarget(get.prompt2('qingyi'),function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'sha'},target);
					}).ai=function(target){
						if(!check) return 0;
						return get.effect(target,{name:'sha'},_status.event.player);
					}
					"step 1"
					if(result.bool){
						player.logSkill('qingyi1',result.targets);
						player.useCard({name:'sha',isCard:true},result.targets[0],false);
						player.skip('phaseJudge');
						player.skip('phaseDraw');
					}
					player.removeSkill('qingyi3');
				}
			},
			qingyi2:{
				audio:true,
				trigger:{player:'phaseUseBefore'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
				content:function(){
					"step 0"
					player.addSkill('qingyi3');
					var check=player.countCards('h')<=player.hp;
					player.chooseCardTarget({
						prompt:get.prompt2('qingyi'),
						filterCard:function(card,player){
							return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player);
						},
						position:'he',
						filterTarget:function(card,player,target){
							if(player==target) return false;
							return player.canUse({name:'sha'},target);
						},
						ai1:function(card){
							if(!_status.event.check) return 0;
							return 6-get.value(card);
						},
						ai2:function(target){
							if(!_status.event.check) return 0;
							return get.effect(target,{name:'sha'},_status.event.player);
						},
						check:check
					});
					"step 1"
					if(result.bool){
						player.logSkill('qingyi2',result.targets);
						player.discard(result.cards[0]);
						player.useCard({name:'sha',isCard:true},result.targets[0]);
						trigger.cancel();
					}
					player.removeSkill('qingyi3');
				}
			},
			qingyi3:{
				mod:{
					targetInRange:function(card,player,target,now){
						return true;
					}
				},
			},
			qirang:{
				audio:2,
				trigger:{player:'equipEnd'},
				frequent:true,
				content:function(){
					var card=get.cardPile(function(card){
						return get.type(card,'trick')=='trick';
					});
					if(card){
						var next=player.gain(card,'gain2');
						if(get.type(card)=='trick') next.gaintag.add('qirang');
						else{
							player.addMark('qirang_mark',1,false);
							player.addTempSkill('qirang_mark',{player:'phaseBegin'});
						}
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					},
					threaten:1.3
				},
				group:'qirang_use',
				subSkill:{
					mark:{
						charlotte:true,
						onremove:function(player){
							var evt=_status.event;
							if(evt.name!='phase') evt=evt.getParent('phase');
							if(evt&&evt.player==player){
								if(!evt.qirang_num) evt.qirang_num=0;
								evt.qirang_num+=player.storage.qirang_mark;
							}
							delete player.storage.qirang_mark;
						},
						intro:{
							content:'下回合发动〖羽化〗时卜算量+#',
						},
					},
					use:{
						audio:'qirang',
						trigger:{player:'useCard2'},
  				direct:true,
  				filter:function(event,player){
  					if(get.type(event.card)!='trick') return false;
  					if(!event.targets||event.targets.length!=1) return false;
  					var info=get.info(event.card);
  					if(info.allowMultiple==false) return false;
  					if(!player.hasHistory('lose',function(evt){
  						if(evt.getParent()!=event) return false;
  						for(var i in evt.gaintag_map){
  							if(evt.gaintag_map[i].contains('qirang')) return true;
  						}
  						return false;
  					})) return false;
  					if(!info.multitarget){
  						if(game.hasPlayer(function(current){
  							return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current);
  						})){
  							return true;
  						}
  					}
  					return false;
  				},
  				content:function(){
  					'step 0'
  					var prompt2='为'+get.translation(trigger.card)+'增加一个目标'
  					player.chooseTarget(get.prompt('qirang'),function(card,player,target){
  						var player=_status.event.player;
  						if(_status.event.targets.contains(target)) return false;
  						return lib.filter.targetEnabled2(_status.event.card,player,target)&&lib.filter.targetInRange(_status.event.card,player,target);
  					}).set('prompt2',prompt2).set('ai',function(target){
  						var trigger=_status.event.getTrigger();
  						var player=_status.event.player;
  						return get.effect(target,trigger.card,player,player)*(_status.event.targets.contains(target)?-1:1);
  					}).set('targets',trigger.targets).set('card',trigger.card);
  					'step 1'
  					if(result.bool){
  						if(!event.isMine()&&!event.isOnline()) game.delayx();
  						event.targets=result.targets;
  					}
  					else{
  						event.finish();
  					}
  					'step 2'
  					if(event.targets){
  						player.logSkill('qirang_use',event.targets);
  						trigger.targets.addArray(event.targets);
  					}
  				},
					},
				},
			},
			yuhua:{
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				forced:true,
				locked:false,
				audio:2,
				content:function(){
					"step 0"
					var num=1,evt=trigger.getParent();
					if(evt.qirang_num) num+=evt.qirang_num;
					var cards=get.cards(Math.min(5,num));
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','羽化：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=function(list){
						var cards=list[0][1],player=_status.event.player;
						var target=(_status.event.getTrigger().name=='phaseZhunbei')?player:player.next;
						var att=get.sgn(get.attitude(player,target));
						var top=[];
						var judges=target.getCards('j');
						var stopped=false;
						if(player!=target||!target.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return (judge(b)-judge(a))*att;
								});
								if(judge(cards[0])*att<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return (get.value(b,player)-get.value(a,player))*att;
							});
							while(cards.length){
								if((get.value(cards[0],player)<=5)==(att>0)) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					"step 1"
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					if(event.triggername=='phaseZhunbeiBegin'&&top.length==0){
						player.addTempSkill('reguanxing_on');
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
				},
				mod:{
					ignoredHandcard:function(card,player){
						if(get.type(card)!='basic'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.type(card)!='basic') return false;
					}
				},
			},
			chenqing:{
				audio:2,
				trigger:{global:'dying'},
				//priority:6,
				filter:function(event,player){
					return event.player.hp<=0&&!player.hasSkill('chenqing2');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('chenqing'),function(card,player,target){
						return target!=player&&target!=_status.event.getTrigger().player;
					}).set('ai',function(target){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(get.attitude(player,trigger.player)>0){
							var att1=get.attitude(target,player);
							var att2=get.attitude(target,trigger.player);
							var att3=get.attitude(player,target);
							if(att3<0) return 0;
							return att1/2+att2+att3;
						}
						else{
							return 0;
							// return get.attitude(player,target);
						}
					});
					'step 1'
					if(result.bool){
						player.addTempSkill('chenqing2','roundStart');
						event.target=result.targets[0];
						event.target.draw(4);
						player.logSkill('chenqing',event.target);
					}
					else{
						event.finish();
					}
					'step 2'
					var target=event.target;
					var tosave=trigger.player;
					var att=get.attitude(target,tosave);
					var hastao=target.countCards('h','tao');
					target.chooseToDiscard(4,true,'he').set('ai',function(card){
						var hastao=_status.event.hastao;
						var att=_status.event.att;
						if(!hastao&&att>0){
							var suit=get.suit(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(ui.selected.cards[i])==suit){
									return -4-get.value(card);
								}
							}
						}
						if(att<0&&ui.selected.cards.length==3){
							var suit=get.suit(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(ui.selected.cards[i])==suit){
									return -get.value(card);
								}
							}
							return -10-get.value(card);
						}
						return -get.value(card);
					}).set('hastao',hastao).set('att',att);
					'step 3'
					if(result.cards&&result.cards.length==4){
						var suits=[];
						for(var i=0;i<result.cards.length;i++){
							suits.add(get.suit(result.cards[i]));
						}
						if(suits.length==4&&game.checkMod({name:'tao',isCard:true},player,trigger.player,'unchanged','cardSavable',player)){
							event.target.useCard({name:'tao',isCard:true},trigger.player);
						}
					}
				},
				ai:{
					expose:0.2,
					threaten:1.5,
				}
			},
			mozhi:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.getHistory('useCard',function(evt){
						return evt.isPhaseUsing()&&['basic','trick'].contains(get.type(evt.card));
					}).length>0&&player.countCards('hs')>0;
				},
				content:function(){
					"step 0"
					event.count=2;
					event.history=player.getHistory('useCard',function(evt){
						return evt.isPhaseUsing()&&['basic','trick'].contains(get.type(evt.card));
					})
					"step 1"
					event._result={};
					if(event.count&&event.history.length&&player.countCards('hs')){
						event.count--;
						var card=event.history.shift().card;
						card={name:card.name,nature:card.nature};
						if(card.name!='jiu'&&lib.filter.cardEnabled(card)){
							if(game.hasPlayer(function(current){
								return player.canUse(card,current);
							})){
								lib.skill.mozhix.viewAs=card;
								var next=player.chooseToUse();
								if(next.isOnline()){
									player.send(function(card){
										lib.skill.mozhix.viewAs=card;
									},card)
								}
								next.logSkill='mozhi';
								next.set('openskilldialog','默识：将一张手牌当'+get.translation(card)+'使用');
								next.set('norestore',true);
								next.set('_backupevent','mozhix');
								next.set('custom',{
									add:{},
									replace:{window:function(){}}
								});
								next.backup('mozhix');
							}
						}
					}
					"step 2"
					if(result&&result.bool) event.goto(1);
				},
			},
			mozhix:{
				filterCard:function(card){
					return get.itemtype(card)=='card';
				},
				selectCard:1,
				position:'hs',
				popname:true,
			},
			chenqing2:{charlotte:true},
			ranshang:{
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return event.nature=='fire';
				},
				forced:true,
				check:function(){
					return false;
				},
				content:function(){
					player.addMark('ranshang',trigger.num);
				},
				intro:{
					name2:'燃',
					content:'mark'
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'){
								if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
							}
							if(get.tag(card,'fireDamage')&&current<0) return 2;
						}
					}
				},
				group:'ranshang2'
			},
			ranshang2:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				filter:function(event,player){
					return player.countMark('ranshang')>0;
				},
				content:function(){
					player.loseHp(player.countMark('ranshang'));
					if(player.countMark('ranshang')>2){
						player.loseMaxHp(2);
						player.draw(2);
					}
				}
			},
			hanyong:{
				trigger:{player:'useCard'},
				filter:function(event,player){
					return event.card&&(event.card.name=='nanman'||event.card.name=='wanjian'||(event.card.name=='sha'&&!event.card.nature&&get.suit(event.card)=='spade'))&&player.isDamaged();
				},
				content:function(){
					trigger.baseDamage++;
					if(game.roundNumber<=player.hp) player.addMark('ranshang',1);
				},
			},
			hanyong3:{
				audio:false,
				trigger:{source:'damageBegin1'},
				forced:true,
				onremove:true,
				filter:function(event,player){
					return event.card==player.storage.hanyong3;
				},
				content:function(){
					trigger.num++;
				}
			},
			yishe:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return !player.getExpansions('yishe').length;
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				content:function(){
					'step 0'
					player.draw(2);
					'step 1'
					var cards=player.getCards('he');
					if(!cards.length) event.finish();
					else if(cards.length<=2) event._result={bool:true,cards:cards};
					else player.chooseCard(2,'he',true,'选择两张牌作为“米”');
					'step 2'
					if(result.bool) player.addToExpansion(result.cards,player,'give').gaintag.add('yishe');
				},
				group:'yishe_recover',
				subSkill:{
					recover:{
						audio:'yishe',
						trigger:{
							player:['loseAfter'],
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter:function(event,player){
							if(player.isHealthy()) return false;
							var evt=event.getl(player);
							if(!evt||!evt.xs||!evt.xs.length||player.getExpansions('yishe').length>0) return false;
							if(event.name=='lose'){
								for(var i in event.gaintag_map){
									if(event.gaintag_map[i].contains('yishe')) return true;
								}
								return false;
							}
							return player.hasHistory('lose',function(evt){
								if(event!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('yishe')) return true;
								}
								return false;
							});
						},
						forced:true,
						content:function(){
							player.recover();
						},
					},
				},
			},
			bushi:{
				audio:2,
				trigger:{player:'damageEnd',source:'damageEnd'},
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					return event.player.isAlive()&&player.getExpansions('yishe').length>0;
				},
				direct:true,
				content:function(){
					'step 0'
					event.count=trigger.num;
					'step 1'
					trigger.player.chooseCardButton('选择获得一张“米”',player.getExpansions('yishe'));
					'step 2'
					if(result.bool){
						event.count--;
						player.logSkill('bushi',trigger.player);
						trigger.player.gain(result.links[0],'give',player);
					}
					else event.finish();
					'step 3'
					if(event.count>0&&player.getExpansions('yishe').length) event.goto(1);
				}
			},
			midao:{
				audio:2,
				trigger:{global:'judge'},
				direct:true,
				filter:function(event,player){
					return player.getExpansions('yishe').length&&event.player.isAlive();
				},
				content:function(){
					"step 0"
					var list=player.getExpansions('yishe');
					player.chooseButton([get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+
						'，'+get.prompt('midao'),list,'hidden'],function(button){
						var card=button.link;
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						return result*attitude;
					}).set('judging',trigger.player.judging[0]).set('filterButton',function(button){
						var player=_status.event.player;
						var card=button.link;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					});
					"step 1"
					if(result.bool){
						event.forceDie=true;
						player.respond(result.links,'midao','highlight','noOrdering');
						result.cards=result.links;
						var card=result.cards[0];
						event.card=card;
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card){
								if(card.clone){
									card.clone.classList.remove('thrownhighlight');
								}
							},trigger.player.judging[0]);
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',card);
						game.delay(2);
					}
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:0.6
					}
				}
			},
			fengpo:{
				shaRelated:true,
				audio:2,
				trigger:{
					player:'useCardToPlayered',
				},
				filter:function(event,player){
					if(event.targets.length!=1||!['sha','juedou'].contains(event.card.name)) return false;
					var evt2=event.getParent('phaseUse');
					if(evt2.player!=player) return false;
					return player.getHistory('useCard',function(evt){
						return evt.card.name==event.card.name&&evt.getParent('phaseUse')==evt2;
					}).indexOf(event.getParent())==0;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseControl('draw_card','加伤害','cancel2').set('prompt',get.prompt2('fengpo'));
					'step 1'
					if(result.control&&result.control!='cancel2'){
						player.logSkill('fengpo',trigger.target);
						var nd=trigger.target.countCards('h',{suit:'diamond'});
						if(result.control=='draw_card'){
							player.draw(nd);
						}
						else{
							var trigger2=trigger.getParent();
							if(typeof trigger2.baseDamage!='number'){
							trigger2.baseDamage=1;
						}
						trigger2.baseDamage+=nd;
						}
					}
				}
			},
			fengpo2:{
				trigger:{source:'damageBegin1'},
				filter:function(event){
					return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
				},
				forced:true,
				audio:false,
				content:function(){
					if(typeof player.storage.fengpo=='number'){
						trigger.num+=player.storage.fengpo;
					}
				}
			},
			fengpo3:{charlotte:true},
			biluan:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				mark:true,
				//unique:true,
				intro:{
					content:function(storage){
						if(storage>0){
							return '其他角色计算与你的距离时+'+storage;
						}
						else if(storage<0){
							return '其他角色计算与你的距离时'+storage;
						}
						else{
							return '无距离变化';
						}
					}
				},
				init:function(player){
					if(typeof player.storage.biluan!='number') player.storage.biluan=0;
				},
				check:function(event,player){
					if(player.countCards('h')>player.hp) return true;
					if(player.hasJudge('lebu')) return true;
					var ng=[];
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].group!='unknown'){
							ng.add(players[i].group);
						}
					}
					ng=ng.length;
					if(ng<2) return false;
					var nai=0;
					for(var i=0;i<players.length;i++){
						if(players[i]!=player){
							var dist=get.distance(players[i],player,'attack');
							if(dist<=1&&dist+ng>1){
								nai++;
							}
						}
					}
					return nai>=2;
				},
				filter:function(event,player){
					return !event.numFixed&&game.hasPlayer(function(current){
						return current!=player&&get.distance(current,player)<=1;
					});
				},
				content:function(){
					var ng=[];
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].group!='unknown'){
							ng.add(players[i].group);
						}
					}
					player.$damagepop(ng.length,'unknownx');
					player.storage.biluan+=ng.length;
					player.markSkill('biluan');
					game.addVideo('storage',player,['biluan',player.storage.biluan]);
					trigger.changeToZero();
				},
				mod:{
					globalTo:function(from,to,distance){
						if(typeof to.storage.biluan=='number'){
							return distance+to.storage.biluan;
						}
					}
				}
			},
			lixia:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player.isAlive()&&event.player!=player&&get.distance(event.player,player,'attack')>1;
				},
				forced:true,
				content:function(){
					'step 0'
					player.chooseTarget(function(card,player,target){
						return target==player||target==_status.event.source;
					},true,'礼下：选择一个目标摸一张牌').set('ai',function(target){
						return player==target?1:0;
					}).set('source',trigger.player);
					'step 1'
					if(result.targets.length){
						result.targets[0].draw();
						player.line(result.targets[0],'green');
					}
					player.storage.biluan--;
					player.markSkill('biluan');
					game.addVideo('storage',player,['biluan',player.storage.biluan]);
				}
			},
			rebiluan2:{
				mark:true,
				charlotte:true,
				intro:{
					content:function(storage){
						if(storage>0){
							return '其他角色计算与你的距离时+'+storage;
						}
						else if(storage<0){
							return '其他角色计算与你的距离时'+storage;
						}
						else{
							return '无距离变化';
						}
					}
				},
				init:function(player){
					if(typeof player.storage.rebiluan2!='number') player.storage.rebiluan2=0;
				},
				mod:{
					globalTo:function(from,to,distance){
						if(typeof to.storage.rebiluan2=='number'){
							return distance+to.storage.rebiluan2;
						}
					}
				}
			},
			rebiluan:{
				audio:'biluan',
				trigger:{player:'phaseJieshuBegin'},
				checkx:function(player){
					var ng=Math.min(4,game.countPlayer());
					var nai=0;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player){
							var dist=get.distance(game.players[i],player,'attack');
							if(dist<=1&&dist+ng>1){
								nai++;
							}
						}
					}
					return nai>=2;
				},
				filter:function(event,player){
					return player.countCards('he')&&game.hasPlayer(function(current){
						return current!=player&&get.distance(current,player)<=1;
					});
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseToDiscard('he',get.prompt2('rebiluan')).set('logSkill','rebiluan').set('check',lib.skill.rebiluan.checkx(player)).set('ai',function(card){
						if(_status.event.check) return 6-get.value(card);
						return 0;
					});
					"step 1"
					if(result.bool){
						player.addSkill('rebiluan2');
						var ng=Math.min(4,game.countPlayer());
						player.$damagepop(ng,'unknownx');
						player.storage.rebiluan2+=ng;
						player.markSkill('rebiluan2');
						game.addVideo('storage',player,['rebiluan2',player.storage.rebiluan2]);
					}
				},
			},
			relixia:{
				audio:'lixia',
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player.isAlive()&&event.player!=player&&!player.inRangeOf(event.player);
				},
				forced:true,
				content:function(){
					'step 0'
					if(trigger.player.isDead()){
						event._result={bool:true,links:[0]};
						return;
					}
					event.videoId=lib.status.videoId++;
					var func=function(card,id,bool){
						var list=[
							'令自己摸一张牌',
							'令XXX摸两张牌',
							'令XXX回复1点体力',
						];
						var choiceList=ui.create.dialog('【礼下】：请选择一至两项','forcebutton');
						choiceList.videoId=id;
						for(var i=0;i<list.length;i++){
							list[i]=list[i].replace(/XXX/g,card);
							var str='<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
							if(i==2&&!bool) str+='<div style="opacity:0.5">';
							str+=list[i];
							if(i==2&&!bool) str+='</div>';
							str+='</div>';
							var next=choiceList.add(str);
							next.firstChild.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
							next.firstChild.link=i;
							for(var j in lib.element.button){
								next[j]=lib.element.button[j];
							}
							choiceList.buttons.add(next.firstChild);
						}
						return choiceList;
					};
					if(player.isOnline2()){
						player.send(func,get.translation(trigger.player),event.videoId,trigger.player.isDamaged());
					}
					event.dialog=func(get.translation(trigger.player),event.videoId,trigger.player.isDamaged());
					if(player!=game.me||_status.auto){
						event.dialog.style.display='none';
					}
					var next=player.chooseButton(true,[1,2]);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						if(button.link==2){
							return _status.event.bool1;
						};
						return true;
					});
					next.set('bool1',trigger.player.isDamaged());
					next.set('ai',function(button){
						var player=_status.event.player;
						var event=_status.event.getTrigger();
						if(button.link&&get.attitude(player,event.player)<=0) return 0;
						return button.link*Math.random();
					});
					"step 1"
					if(event.videoId!=undefined){
						if(player.isOnline2()){
							player.send('closeDialog',event.videoId);
						}
						event.dialog.close();
					}
					var map=[
						function(trigger,player,event){
							player.draw();
						},
						function(trigger,player,event){
							if(!result.links.contains(2)) player.line(trigger.player);
							trigger.player.draw(2);
						},
						function(trigger,player,event){
							player.line(trigger.player);
							trigger.player.recover();
						}
					];
					result.links.sort();
					for(var i=0;i<result.links.length;i++){
						game.log(player,'选择了','#g【礼下】','的','#y选项'+get.cnNumber(result.links[i]+1,true));
						map[result.links[i]](trigger,player,event);
					}
					player.addSkill('rebiluan2');
					player.storage.rebiluan2-=result.links.length;
					player.markSkill('rebiluan2');
					game.addVideo('storage',player,['rebiluan2',player.storage.rebiluan2]);
				}
			},
			guiming:{
				unique:true,
				zhuSkill:true,
			},
			canshi:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				check:function(event,player){
					var num=game.countPlayer(function(current){
						if(player.hasZhuSkill('guiming')&&current.group=='wu') return true;
						return current.isDamaged();
					});
					return num>3;
				},
				prompt:function(event,player){
					var num=game.countPlayer(function(current){
						if(player.hasZhuSkill('guiming')&&current.group=='wu'&&current!=player) return true;
						return current.isDamaged();
					});
					return '残蚀：是否改为摸'+get.cnNumber(num)+'张牌？';
				},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.changeToZero();
					var num=game.countPlayer(function(current){
						if(player.hasZhuSkill('guiming')&&current.group=='wu'&&current!=player) return true;
						return current.isDamaged();
					});
					if(num>0){
						player.draw(num);
					}
					player.addTempSkill('canshi2');
				}
			},
			canshi2:{
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					if(player.countCards('he')==0) return false;
					var type=get.type(event.card,'trick');
					return type=='basic'||type=='trick';
				},
				autodelay:true,
				content:function(){
					player.chooseToDiscard(true,'he');
				}
			},
			chouhai:{
				audio:2,
				trigger:{player:'damageBegin3'},
				forced:true,
				check:function(){
					return false;
				},
				filter:function(event,player){
					return player.countCards('h')==0;
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')&&target.countCards('h')==0) return [1,-2];
						}
					}
				}
			},
			recanshi:{
				audio:'canshi',
				trigger:{player:'phaseDrawBegin2'},
				check:function(event,player){
					if(player.skipList.contains('phaseUse')||!player.countCards('h',function(card){
						return get.type(card,'trick')=='trick'&&player.hasUseTarget(card);
					})) return true;
					var num=game.countPlayer(function(current){
						if(player.hasZhuSkill('guiming')&&current.group=='wu') return true;
						return current.isDamaged();
					});
					return num>1;
				},
				prompt:function(event,player){
					var num=game.countPlayer(function(current){
						if(player.hasZhuSkill('guiming')&&current.group=='wu'&&current!=player) return true;
						return current.isDamaged();
					});
					return '残蚀：是否多摸'+get.cnNumber(num)+'张牌？';
				},
				filter:function(event,player){
					return !event.numFixed&&game.hasPlayer(function(current){
						if(player.hasZhuSkill('guiming')&&current.group=='wu'&&current!=player) return true;
						return current.isDamaged();
					});
				},
				content:function(){
					var num=game.countPlayer(function(current){
						if(player.hasZhuSkill('guiming')&&current.group=='wu'&&current!=player) return true;
						return current.isDamaged();
					});
					if(num>0){
						trigger.num+=num;
					}
					player.addTempSkill('recanshi2');
				}
			},
			recanshi2:{
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					if(player.countCards('he')==0) return false;
					if(event.card.name=='sha') return true;
					return get.type(event.card)=='trick';
				},
				autodelay:true,
				content:function(){
					player.chooseToDiscard(true,'he');
				}
			},
			rechouhai:{
				audio:'chouhai',
				trigger:{player:'damageBegin3'},
				forced:true,
				check:function(){
					return false;
				},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&player.countCards('h')==0;
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&target.countCards('h')==0) return [1,-2];
						}
					}
				}
			},
			kunfen:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				locked:function(skill,player){
					if(!player||!player.storage.kunfen) return true;
					return false;
				},
				direct:true,
				content:function(){
					"step 0"
					if(player.storage.kunfen||
					(get.mode()=='guozhan'&&player.hiddenSkills.contains('kunfen'))){
						if(!player.storage.kunfen){
							event.skillHidden=true;
						}
						player.chooseBool(get.prompt('kunfen'),'结束阶段开始时，你可以失去1点体力，然后摸两张牌。').set('ai',function(){
							var player=_status.event.player;
							if(player.hp>3) return true;
							if(player.hp==3&&player.countCards('h')<3) return true;
							if(player.hp==2&&player.countCards('h')==0) return true;
							return false;
						});
					}
					else{
						event.forced=true;
					}
					"step 1"
					if(event.forced||result.bool){
						player.logSkill('kunfen');
						player.loseHp();
					}
					else{
						event.finish();
					}
					"step 2"
					player.draw(2);
				},
				ai:{
					threaten:1.5
				}
			},
			fengliang:{
				skillAnimation:true,
				animationColor:'thunder',
				unique:true,
				juexingji:true,
				audio:2,
				derivation:'oltiaoxin',
				trigger:{player:'dying'},
				//priority:10,
				forced:true,
				filter:function(event,player){
					return !player.storage.kunfen;
				},
				content:function(){
					"step 0"
					player.loseMaxHp();
					"step 1"
					if(player.hp<2){
						player.recover(2-player.hp);
					}
					"step 2"
					player.addSkill('oltiaoxin');
					player.storage.kunfen=true;
					player.awakenSkill('fengliang');
				},
			},
			zhuiji:{
				mod:{
					globalFrom:function(from,to){
						if(from.hp>=to.hp) return -Infinity;
					}
				}
			},
			oldcihuai:{
				audio:'cihuai',
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				check:function(event,player){
					return !player.countCards('h','sha');
				},
				content:function(){
					player.showHandcards();
					if(!player.countCards('h','sha')) player.addTempSkill('oldcihuai2');
				},
			},
			oldcihuai2:{
				group:'oldcihuai3',
				prompt:'视为使用一张杀',
				enable:'chooseToUse',
				viewAs:{name:'sha',isCard:true},
				filterCard:function(){return false},
				selectCard:-1,
				ai:{
					presha:true,
					respondSha:true,
				},
			},
			oldcihuai3:{
				trigger:{
					player:['gainEnd','loseEnd'],
					global:'die',
				},
				silent:true,
				firstDo:true,
				filter:function(event,player){
					if(event.name=='lose') return event.hs.length>0;
					return true;
				},
				content:function(){
					player.removeSkill('oldcihuai2');
				},
			},
			cihuai:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h','sha')==0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt2('cihuai'),function(card,player,target){
						return player.canUse({name:'sha',isCard:true},target);
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'sha',isCard:true},player,player);
					});
					"step 1"
					if(result.bool){
						player.logSkill('cihuai');
						player.showHandcards();
						player.useCard({name:'sha',isCard:true},result.targets);
					}
				},
				ai:{
					expose:0.2,
				}
			},
			jilei:{
				trigger:{player:'damageEnd'},
				audio:2,
				direct:true,
				filter:function(event){
					return event.source&&event.source.isIn();
				},
				content:function(){
					'step 0'
					player.chooseControl('basic','trick','equip','cancel2',function(){
						var source=_status.event.source;
						if(get.attitude(_status.event.player,source)>0) return 'cancel2';
						var list=['basic','trick','equip'].filter(function(name){
							return (!source.storage.jilei2||!source.storage.jilei2.contains(name));
						});
						if(!list.length) return 'cancel2';
						if(list.contains('trick')&&source.countCards('h',function(card){
							return get.type(card,source)=='trick'&&source.hasValueTarget(card);
						})>1) return 'trick';
						return list[0];
					}).set('prompt',get.prompt2('jilei',trigger.source)).set('source',trigger.source);
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('jilei',trigger.source);
						player.popup(get.translation(result.control)+'牌');
						trigger.source.addTempSkill('jilei2',{player:'phaseBegin'});
						trigger.source.storage.jilei2.add(result.control);
						trigger.source.updateMarks('jilei2');
					}
				},
				ai:{
					maixie_defend:true,
					threaten:0.7
				}
			},
			jilei2:{
				unique:true,
				charlotte:true,
				intro:{
					content:function(storage){
						return '不能使用、打出或弃置'+get.translation(storage)+'牌';
					}
				},
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[];
				},
				mark:true,
				onremove:true,
				mod:{
					cardDiscardable:function(card,player){
						if(player.storage.jilei2.contains(get.type(card,'trick'))) return false;
					},
					cardEnabled:function(card,player){
						if(player.storage.jilei2.contains(get.type(card,'trick'))) return false;
					},
					cardRespondable:function(card,player){
						if(player.storage.jilei2.contains(get.type(card,'trick'))) return false;
					},
					cardSavable:function(card,player){
						if(player.storage.jilei2.contains(get.type(card,'trick'))) return false;
					},
				},
			},
			danlao:{
				audio:2,
				filter:function(event,player){
					return (event.card.name=='sha'||get.type(event.card)=='trick')&&event.targets&&event.targets.length>1;
				},
				check:function(event,player){
					return event.getParent().excluded.contains(player)||get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
				},
				trigger:{target:'useCardToTargeted'},
				content:function(){
					trigger.getParent().excluded.add(player);
					player.draw();
				},
				ai:{
					effect:{
						target:function(card){
							if(get.type(card)!='trick') return;
							if(card.name=='tiesuo') return [0,0];
							if(card.name=='yihuajiemu') return [0,1];
							if(get.tag(card,'multineg')) return [0,2];
						}
					}
				}
			},
			taichen:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canUse('sha',target);
				},
				content:function(){
					"step 0"
					player.loseHp();
					"step 1"
					player.useCard({name:'sha',isCard:true},target,false);
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(player.hp>2&&player.hp>target.hp&&target.countCards('he')<4){
								return get.effect(target,{name:'sha'},player,target);
							}
							return 0;
						}
					}
				}
			},
			naman:{
				audio:2,
				trigger:{global:'respondEnd'},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					if(event.player==player) return false;
					if(event.cards){
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)=='o') return true;
						}
					}
					return false;
				},
				frequent:true,
				content:function(){
					var cards=trigger.cards.slice(0);
					for(var i=0;i<cards.length;i++){
						if(get.position(cards[i],true)!='o'){
							cards.splice(i--,1);
						}
					}
					game.delay(0.5);
					player.gain(cards,'gain2');
				},
			},
			xiemu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h','sha')>0;
				},
				filterCard:{name:'sha'},
				check:function(card){return 6-get.value(card)},
				content:function(){
					'step 0'
					var list=lib.group.filter(function(group){
						return ['wei','shu','wu','qun'].contains(group)||game.hasPlayer(function(current){
							return current.group==group;
						})
					});
					if(player.storage.xiemu2) list.removeArray(player.storage.xiemu2);
					var list2=list.slice(0);
					list2.sort(function(a,b){
						return lib.skill.xiemu.count(b)-lib.skill.xiemu.count(a);
					});
					player.chooseControl(list).set('prompt','请选择一个势力').ai=function(){return list2[0]};
					'step 1'
					player.popup(result.control+2,get.groupnature(result.control));
					game.log(player,'选择了','#g'+get.translation(result.control+2));
					player.addTempSkill('xiemu2',{player:'phaseBegin'});
					player.storage.xiemu2.add(result.control);
					player.updateMarks('xiemu2');
				},
				ai:{
					order:1,
					result:{player:1},
				},
				count:function(group){
					var player=_status.event.player;
					return game.countPlayer(function(current){
						return current!=player&&current.group==group&&get.attitude(current,player)<0;
					});
				},
			},
			xiemu2:{
				onremove:true,
				mark:true,
				forced:true,
				audio:'xiemu',
				intro:{
					content:function(storage){
						return '已指定'+get.translation(storage)+'势力';
					},
				},
				trigger:{
					target:'useCardToTargeted'
				},
				init:function(player){
					if(!player.storage.xiemu2) player.storage.xiemu2=[];
				},
				filter:function(event,player){
					if(!player.storage.xiemu2) return false;
					if(get.color(event.card)!='black') return false;
					if(!event.player) return false;
					if(event.player==player||!player.storage.xiemu2.contains(event.player.group)) return false;
					return true;
				},
				content:function(){
					player.draw(2);
				},
			},
			oldxiemu:{
				audio:'xiemu',
				trigger:{target:'useCardToTargeted'},
				filter:function(event,player){
					if(get.color(event.card)!='black') return false;
					if(!event.player) return false;
					if(event.player==player) return false;
					if(get.mode()!='guozhan') return false;
					return player.countCards('h','sha')>0;
				},
				direct:true,
				content:function(){
					"step 0"
					var next=player.chooseToDiscard('协穆：是否弃置一张杀并摸两张牌？',{name:'sha'});
					next.set('ai',function(card){
						return 9-get.value(card);
					});
					next.logSkill='xiemu';
					"step 1"
					if(result.bool){
						player.draw(2);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.color(card)=='black'&&target.countCards('h')>0){
								return [1,0.5];
							}
						}
					}
				}
			},
			spmengjin:{
				trigger:{player:'shaBegin'},
				filter:function(event,player){
					return event.target.countCards('he')>0;
				},
				direct:true,
				content:function(){
					"step 0"
					var att=get.attitude(player,trigger.target);
					player.choosePlayerCard(get.prompt('spmengjin',trigger.target),'he',trigger.target).ai=function(button){
						var val=get.buttonValue(button);
						if(att>0) return -val;
						return val;
					};
					"step 1"
					if(result.bool){
						trigger.target.discard(result.links);
						player.logSkill('spmengjin',trigger.target);
						trigger.target.addTempSkill('mengjin2','shaAfter');
					}
				},
				ai:{
					expose:0.2
				}
			},
			fenxun_old:{
				audio:2,
				trigger:{player:'shaBefore'},
				direct:true,
				filter:function(event,player){
					return event.targets.length==1;
				},
				position:'he',
				content:function(){
					"step 0"
					player.chooseCardTarget({
						filterCard:lib.filter.cardDiscardable,
						filterTarget:function(card,player,target){
							var trigger=_status.event.getTrigger();
							return lib.filter.targetEnabled(trigger.card,player,target)&&target!=trigger.targets[0];
						},
						ai1:function(card){
							return 6-get.value(card);
						},
						ai2:function(target){
							var trigger=_status.event.getTrigger();
							var player=_status.event.player;
							return get.effect(target,trigger.card,player,player);
						},
						prompt:get.prompt2('fenxun')
					});
					"step 1"
					if(result.bool){
						player.discard(result.cards);
						trigger.targets.push(result.targets[0]);
						player.logSkill('fenxun',result.targets);
					}
				}
			},
			rezhoufu:{
				audio:'zhoufu',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				filterCard:true,
				filterTarget:function(card,player,target){
					return target!=player&&!target.getExpansions('rezhoufu2').length;
				},
				check:function(card){
					return 6-get.value(card)
				},
				position:'he',
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					if(!target.storage.rezhoufu2_markcount) target.storage.rezhoufu2_markcount=0;
					target.addToExpansion(cards,player,'give').gaintag.add('rezhoufu2');
				},
				ai:{
					order:1,
					result:{
						target:-1,
					},
				},
				group:['rezhoufu_judge','rezhoufu_losehp'],
				subSkill:{
					judge:{
						audio:'zhoufu',
						trigger:{global:'judgeBefore'},
						forced:true,
						filter:function(event,player){
							return !event.directresult&&event.player.getExpansions('rezhoufu2').length;
						},
						logTarget:'player',
						content:function(){
							var cards=[trigger.player.getExpansions('rezhoufu2')[0]];
							trigger.directresult=cards[0];
						},
					},
					losehp:{
						audio:'zhoufu',
						trigger:{global:'phaseEnd'},
						forced:true,
						filter:function(event,player){
							return game.hasPlayer(function(current){
								return current.hasHistory('lose',function(evt){
									if(!evt||!evt.xs||!evt.xs.length) return false;
									for(var i in evt.gaintag_map){
										if(evt.gaintag_map[i].contains('rezhoufu2')) return true;
									}
									return false;
								});
							});
						},
						logTarget:function(current){
							return game.filterPlayer(function(current){
								return current.hasHistory('lose',function(evt){
									if(!evt||!evt.xs||!evt.xs.length) return false;
									for(var i in evt.gaintag_map){
										if(evt.gaintag_map[i].contains('rezhoufu2')) return true;
									}
									return false;
								});
							}).sortBySeat();
						},
						content:function(){
							var targets=game.filterPlayer(function(current){
								return current.hasHistory('lose',function(evt){
									if(!evt||!evt.xs||!evt.xs.length) return false;
									for(var i in evt.gaintag_map){
										if(evt.gaintag_map[i].contains('rezhoufu2')) return true;
									}
									return false;
								});
							}).sortBySeat();
							while(targets.length){
								targets.shift().loseHp();
							}
						},
					},
				},
			},
			rezhoufu2:{
				intro:{
					content:'expansion',
				},
			},
			rezhoufu3:{},
			reyingbing:{
				audio:'yingbin',
				trigger:{global:'useCard'},
				forced:true,
				filter:function(event,player){
					var cards=event.player.getExpansions('rezhoufu2');
					return cards.length&&get.color(cards[0])==get.color(event.card);
				},
				logTarget:'player',
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					trigger.player.storage.rezhoufu2_markcount++;
					if(trigger.player.storage.rezhoufu2_markcount>=2){
						var cards=trigger.player.getExpansions('rezhoufu2');
						player.gain(cards,trigger.player);
					}
					else trigger.player.markSkill('rezhoufu2');
				},
			},
			zhoufu:{
				audio:2,
			},
			yingbin:{
				audio:2,
			},
			kuiwei:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				check:function(event,player){
					if(player.isTurnedOver()) return true;
					var num=game.countPlayer(function(current){
						return current.getEquip(1);
					});
					return num>1;
				},
				content:function(){
					"step 0"
					player.turnOver();
					"step 1"
					var num=game.countPlayer(function(current){
						return current.getEquip(1);
					});
					player.draw(2+num);
					player.addSkill('kuiwei2');
				},
				ai:{
					effect:{
						target:function(card){
							if(card.name=='guiyoujie') return [0,2];
						}
					}
				}
			},
			kuiwei2:{
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				audio:false,
				content:function(){
					var num=game.countPlayer(function(current){
						return current.getEquip(1);
					});
					if(num>=player.countCards('he')){
						player.discard(player.getCards('he'));
					}
					else if(num){
						player.chooseToDiscard('he',num,true);
					}
					player.removeSkill('kuiwei2');
				}
			},
			yanzheng:{
				enable:'chooseToUse',
				audio:2,
				filter:function(event,player){
					return player.hp<player.countCards('h')&&player.countCards('e')>0;
				},
				viewAsFilter:function(player){
					return player.hp<player.countCards('h')&&player.countCards('e')>0;
				},
				filterCard:true,
				position:'e',
				viewAs:{name:'wuxie'},
				prompt:'将一张装备区内的牌当无懈可击使用',
				check:function(card){return 8-get.equipValue(card)},
				threaten:1.2
			},
			tongji:{
				global:'tongji_disable',
				audio:2,
				trigger:{global:"useCard1"},
				forced:true,
				filter:function (event,player){
					return event.targets.contains(player)&&player!=event.player&&event.card.name=='sha'&&player.hp<player.countCards('h');
				},
				content:function(){},
				unique:true,
				gainable:true,
				subSkill:{
					disable:{
						mod:{
							targetEnabled:function(card,player,target){
								if(card.name=='sha'){
									if(player.hasSkill('tongji')) return;
									if(target.hasSkill('tongji')) return;
									if(game.hasPlayer(function(current){
										return current.hasSkill('tongji')&&current.hp<current.countCards('h')&&
										player.inRange(current);
									})){
										return false;
									}
								}
							}
						}
					}
				}
			},
			wangzun:{
				audio:2,
				trigger:{global:'phaseZhunbeiBegin'},
				check:function(event,player){
					var att=get.attitude(player,event.player);
					return !game.hasPlayer(function(current){
						return get.attitude(player,current)<att;
					});
				},
				filter:function(event,player){
					return event.player!=player&&!player.storage.wangzun;
				},
				logTarget:'player',
				content:function(){
					player.draw();
					player.markSkill('wangzun');
					player.storage.wangzun=trigger.player;
					trigger.player.addTempSkill('wangzun3');
				},
				ai:{
					expose:0.2
				},
				intro:{
					content:'player'
				},
				group:'wangzun2'
			},
			wangzun2:{
				trigger:{player:'phaseZhunbeiBegin'},
				silent:true,
				content:function(){
					player.unmarkSkill('wangzun');
					player.storage.wangzun=null;
				}
			},
			wangzun3:{
				mod:{
					maxHandcard:function(player,num){
						return num-1;
					}
				}
			},
			kaikang:{
				audio:2,
				trigger:{global:'useCardToTargeted'},
				filter:function(event,player){
					return event.card.name=='sha'&&get.distance(player,event.target)<=1&&event.target.isIn();
				},
				check:function(event,player){
					return get.attitude(player,event.target)>=0;
				},
				logTarget:'target',
				content:function(){
					"step 0"
					player.draw();
					if(trigger.target!=player){
						player.chooseCard(true,'he','交给'+get.translation(trigger.target)+'一张牌').set('ai',function(card){
							if(get.position(card)=='e') return -1;
							if(card.name=='shan') return 1;
							if(get.type(card)=='equip') return 0.5;
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 1"
					trigger.target.gain(result.cards,player,'give');
					game.delay();
					event.card=result.cards[0];
					"step 2"
					if(trigger.target.getCards('h').contains(card)&&get.type(card)=='equip'){
						trigger.target.chooseUseTarget(card);
					}
				},
				ai:{
					threaten:1.1
				}
			},
			liangzhu:{
				audio:2,
				trigger:{global:'recoverAfter'},
				direct:true,
				filter:function(event,player){
					return event.player.isPhaseUsing();
				},
				content:function(){
					'step 0'
					if(player==trigger.player){
						player.chooseControl('摸一张','摸两张','cancel2',function(){
							return '摸两张';
						}).set('prompt',get.prompt2('liangzhu'));
						event.single=true;
					}
					else{
						player.chooseTarget(get.prompt2('liangzhu'),function(card,player,target){
							return target==_status.event.player||target==_status.event.target;
						}).set('target',trigger.player).set('ai',function(target){
							var player=_status.event.player;
							if(player==target) return 1;
							return get.attitude(player,target)-1.5;
						});
					}
					'step 1'
					if(event.single){
						if(result.control!='cancel2'){
							player.logSkill('liangzhu',player);
							if(result.control=='摸一张'){
								player.draw();
							}
							else{
								player.draw(2);
								if(!player.storage.liangzhu) player.storage.liangzhu=[];
								player.storage.liangzhu.add(player);
							}
						}
					}
					else if(result.bool){
						var target=result.targets[0];
						player.logSkill('liangzhu',target);
						if(target==player){
							target.draw();
						}
						else{
							target.draw(2);
							if(target.storage.liangzhu){
								target.storage.liangzhu.add(player);
							}
							else{
								target.storage.liangzhu=[player];
							}
						}
					}
				},
				ai:{
					expose:0.1
				}
			},
			fanxiang:{
				skillAnimation:true,
				animationColor:'fire',
				audio:2,
				unique:true,
				juexingji:true,
				forceunique:true,
				derivation:'xiaoji',
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					if(player.storage.fanxiang) return false;
					return game.hasPlayer(function(current){
						return current.storage.liangzhu&&current.storage.liangzhu.contains(player)&&current.isDamaged();
					});
				},
				forced:true,
				content:function(){
					player.storage.fanxiang=true;
					player.gainMaxHp();
					player.recover();
					player.removeSkill('liangzhu');
					player.addSkill('xiaoji');
					player.awakenSkill('fanxiang');
				},
			},
			mingshi:{
				audio:2,
				trigger:{player:'damageBegin3'},
				direct:true,
				filter:function(event,player){
					return event.source&&event.source.hp>player.hp;
				},
				content:function(){
					"step 0"
					var next=player.chooseToDiscard(get.prompt2('mingshi'),{color:'black'});
					next.set('ai',function(card){
						return 9-get.value(card);
					});
					next.set('logSkill','mingshi');
					"step 1"
					if(result.bool){
						trigger.num--;
					}
				},
				ai:{
					threaten:0.8
				}
			},
			lirang:{
				audio:2,
				trigger:{player:'loseAfter'},
				filter:function(event,player){
					if(event.type!='discard') return false;
					for(var i=0;i<event.cards2.length;i++){
						if(get.position(event.cards2[i])=='d'){
							return true;
						}
					}
					return false;
				},
				direct:true,
				popup:false,
				preHidden:true,
				content:function(){
					"step 0"
					if(trigger.delay==false) game.delay();
					event.cards=[];
					event.logged=false;
					for(var i=0;i<trigger.cards2.length;i++){
						if(get.position(trigger.cards2[i],true)=='d'){
							event.cards.push(trigger.cards2[i]);
							//ui.special.appendChild(trigger.cards[i]);
						}
					}
					"step 1"
					if(event.cards.length){
						var goon=false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].name=='du'){
								goon=true;break;
							}
						}
						if(!goon){
							goon=game.hasPlayer(function(current){
								return player!=current&&get.attitude(player,current)>1;
							});
						}
						player.chooseCardButton(get.prompt('lirang'),event.cards,[1,event.cards.length]).set('ai',function(button){
							if(!_status.event.goon||ui.selected.buttons.length) return 0;
							if(button.link.name=='du') return 2;
							return 1;
						}).set('goon',goon).setHiddenSkill(event.name);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,function(card,player,target){
							return target!=player;
						}).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else{
								if(att>2) return att/Math.sqrt(1+target.countCards('h'));
								return att/Math.sqrt(1+target.countCards('h'))/5;
							}
						}).set('enemy',get.value(event.togive[0],player,'raw')<0);
					}
					else{
						//game.cardsDiscard(event.cards);
						event.finish();
					}
					"step 3"
					if(result.bool){
						if(!event.logged){
							player.logSkill('lirang',result.targets);
							event.logged=true;
						}
						else player.line(result.targets,'green');
						for(var i=0;i<event.togive.length;i++){
							event.cards.remove(event.togive[i]);
						}
						result.targets[0].gain(event.togive);
						result.targets[0].$gain2(event.togive);
						event.goto(1);
					}
					else{
						//game.cardsDiscard(event.cards);
						event.finish();
					}
				},
				ai:{
					expose:0.1,
					effect:{
						target:function(card,player,target,current){
							if(target.hasFriend()&&get.tag(card,'discard')){
								if(current<0) return 0;
								return [1,1];
							}
						}
					}
				}
			},
			moukui:{
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha';
				},
				audio:2,
				content:function(){
					"step 0"
					var controls=['draw_card'];
					if(trigger.target.countCards('he')){
						controls.push('discard_card');
					}
					controls.push('cancel');
					player.chooseControl(controls).set('ai',function(){
						var trigger=_status.event.getTrigger();
						if(trigger.target.countCards('he')&&get.attitude(_status.event.player,trigger.target)<0){
							return 'discard_card';
						}
						else{
							return 'draw_card';
						}
					}).set('prompt',get.prompt2('moukui'));
					"step 1"
					if(result.control=='draw_card'){
						player.draw();
						player.logSkill('moukui');
					}
					else if(result.control=='discard_card'&&trigger.target.countCards('he')){
						player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
					}
					else event.finish();
					"step 2"
					player.addTempSkill('moukui2','shaEnd');
				},
				ai:{
					expose:0.1
				}
			},
			moukui2:{
				audio:false,
				trigger:{player:'shaMiss'},
				forced:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					trigger.target.discardPlayerCard(player,true);
				}
			},
			shenxian:{
				audio:2,
				trigger:{global:'loseAfter'},
				filter:function(event,player){
					if(event.type!='discard'||event.player==player||_status.currentPhase==player) return false;
					if(player.hasSkill('shenxian2')) return false;
					for(var i=0;i<event.cards2.length;i++){
						if(get.type(event.cards2[i],null,event.hs.contains(event.cards2[i])?event.player:false)=='basic'){
							return true;
						}
					}
					return false;
				},
				frequent:true,
				content:function(){
					"step 0"
					if(trigger.delay==false) game.delay();
					"step 1"
					player.draw();
					if(event.name=='shenxian') player.addTempSkill('shenxian2');
				},
				ai:{
					threaten:1.5
				}
			},
			shenxian2:{charlotte:true},
			qiangwu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				content:function(){
					"step 0"
					player.judge();
					"step 1"
					player.storage.qiangwu=result.number;
					player.addTempSkill('qiangwu3','phaseUseEnd');
				},
				ai:{
					result:{
						player:1
					},
					order:11
				},
			},
			qiangwu3:{
				mod:{
					aiOrder:function(player,card,num){
						if(card.name=='sha'&&get.number(card)>player.storage.qiangwu) return num+2;
					},
					targetInRange:function(card,player){
						if(_status.currentPhase==player&&card.name=='sha'&&get.number(card)<player.storage.qiangwu) return true;
					},
					cardUsable:function(card,player){
						if(_status.currentPhase==player&&card.name=='sha'&&get.number(card)>player.storage.qiangwu) return Infinity;
					}
				},
				trigger:{player:'useCard1'},
				filter:function(event,player){
					if(_status.currentPhase==player&&event.card.name=='sha'&&
					get.number(event.card)>player.storage.qiangwu&&event.addCount!==false) return true;
					return false;
				},
				forced:true,
				popup:false,
				firstDo:true,
				content:function(){
					trigger.addCount=false;
					if(player.stat[player.stat.length-1].card.sha>0){
						player.stat[player.stat.length-1].card.sha--;
					}
				},
			},
			zhendu:{
				audio:2,
				trigger:{global:'phaseUseBegin'},
				filter:function(event,player){
					return /*(get.mode()!='guozhan'||event.player!=player)&&*/event.player.isAlive()&&player.countCards('h')>0;
				},
				direct:true,
				preHidden:true,
				content:function(){
					"step 0"
					var nono=(Math.abs(get.attitude(player,trigger.player))<3);
					if(player==trigger.player||get.damageEffect(trigger.player,player,player)<=0||!trigger.player.hasUseTarget({name:'jiu'},null,true)){
						nono=true
					}
					else if(trigger.player.hp>2){
						nono=true;
					}
					else if(trigger.player.hp>1&&player.countCards('h')<3&&(trigger.player.canUse('sha',player)&&!player.countCards('h','shan')&&trigger.player.countCards('h')>=3)){
						nono=true;
					}
					var next=player.chooseToDiscard(get.prompt2('zhendu',trigger.player));
					next.set('ai',function(card){
						if(_status.event.nono) return -1;
						return 7-get.useful(card);
					});
					next.set('logSkill',['zhendu',trigger.player]);
					next.set('nono',nono);
					next.setHiddenSkill('zhendu');
					"step 1"
					if(result.bool){
						trigger.player.chooseUseTarget({name:'jiu'},true,'noTargetDelay','nodelayx');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool&&trigger.player!=player) trigger.player.damage();
				},
				ai:{
					threaten:2,
					expose:0.3
				}
			},
			qiluan:{
				audio:'qiluan2',
				preHidden:true,
				trigger:{global:'phaseEnd'},
				frequent:true,
				filter:function(event,player){
					return game.hasPlayer2(function(current){
						return current.getStat('kill')>0
					});
				},
				prompt:function(event,player){
					var num=game.countPlayer2(function(current){
						return (current.getStat('kill')||0)*(current==player?3:1);
					});
					return get.prompt('qiluan')+'（可摸'+get.cnNumber(num)+'张牌）';
				},
				content:function(){
					//if(get.mode()=='guozhan'){
					//	player.draw(3);
					//}
					//else{
						player.draw(game.countPlayer2(function(current){
							return (current.getStat('kill')||0)*(current==player?3:1);
						}));
					//}
				},
				subSkill:{
					draw:{
						trigger:{global:'dieAfter'},
						frequent:true,
						filter:function(event,player){
							return /*get.mode()!='guozhan'&&*/player!=event.source;
						},
						content:function(){player.draw()},
					},
				},
			},
			qiluan2:{
				audio:2,
			},
			zniaoxiang:{
				shaRelated:true,
				audio:2,
				trigger:{player:'useCardToPlayered'},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&!event.getParent().directHit.contains(event.target);
				},
				//priority:-1,
				logTarget:'target',
				content:function(){
					var id=trigger.target.playerid;
					var map=trigger.getParent().customArgs;
					if(!map[id]) map[id]={};
					if(typeof map[id].shanRequired=='number'){
						map[id].shanRequired++;
					}
					else{
						map[id].shanRequired=2;
					}
				}
			},
			shangyi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.countCards('h');
				},
				content:function(){
					"step 0"
					player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
						return get.color(button.link)=='black';
					});
					"step 1"
					if(result.bool){
						target.discard(result.links[0]);
					}
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							return -target.countCards('h');
						}
					},
					threaten:1.1
				},
			},
			shengxi:{
				trigger:{player:'phaseDiscardBegin'},
				frequent:true,
				filter:function(event,player){
					return !player.getStat('damage');
				},
				content:function(){
					player.draw(2);
				},
				audio:2,
				audioname:['liushan']
			},
			shoucheng:{
				trigger:{
					global:['equipAfter','addJudgeAfter','loseAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				audio:2,
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						if(current==_status.currentPhase) return false;
						var evt=event.getl(current);
						return evt&&evt.hs&&evt.hs.length&&current.countCards('h')==0;
					});
				},
				content:function(){
					"step 0"
					event.list=game.filterPlayer(function(current){
						if(current==_status.currentPhase) return false;
						var evt=trigger.getl(current);
						return evt&&evt.hs&&evt.hs.length;
					}).sortBySeat(_status.currentPhase);
					"step 1"
					var target=event.list.shift();
					event.target=target;
					if(target.isAlive()&&target.countCards('h')==0){
						player.chooseBool(get.prompt2('shoucheng',target)).set('ai',function(){
							return get.attitude(_status.event.player,_status.event.getParent().target)>0;
						});
					}
					else event.goto(3);
					"step 2"
					if(result.bool){
						player.logSkill(event.name,target);
						target.draw();
					}
					"step 3"
					if(event.list.length) event.goto(1);
				},
				ai:{
					threaten:1.3,
					expose:0.2,
					noh:true,
				}
			},
			hengzheng:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				preHidden:true,
				filter:function(event,player){
					return !event.numFixed&&(player.hp==1||player.countCards('h')==0);
				},
				check:function(event,player){
					var num=game.countPlayer(function(current){
						if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
							return true;
						}
						if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
							return true;
						}
					});
					return num>=2;
				},
				content:function(){
					"step 0"
					var targets=game.filterPlayer();
					targets.remove(player);
					targets.sort(lib.sort.seat);
					event.targets=targets;
					event.num=0;
					trigger.changeToZero();
					player.line(targets,'green');
					"step 1"
					if(num<event.targets.length){
						if(event.targets[num].countCards('hej')){
							player.gainPlayerCard(event.targets[num],'hej',true);
						}
						event.num++;
						event.redo();
					}
				},
				ai:{
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					},
					threaten:function(player,target){
						if(target.hp==1) return 2.5;
						return 1;
					},
				}
			},
			yongjue:{
				audio:2,
				trigger:{global:'useCardAfter'},
				usable:1,
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					if(event.player==player) return false;
					if(event.targets.contains(player)) return false;
					if(event.cards){
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)=='o') return true;
						}
					}
					return false;
				},
				frequent:true,
				content:function(){
					var cards=trigger.cards.slice(0);
					for(var i=0;i<cards.length;i++){
						if(get.position(cards[i],true)!='o'){
							cards.splice(i--,1);
						}
					}
					player.gain(cards,'gain2');
				},
			},
			guixiu:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				frequent:true,
				filter:function(event,player){
					return event.card.name=='sha'&&player.countCards('h')<player.hp;
				},
				content:function(){
					player.draw();
				}
			},
			cunsi:{
				skillAnimation:true,
				animationColor:'orange',
				audio:2,
				unique:true,
				enable:'phaseUse',
				mark:true,
				limited:true,
				derivation:'yongjue',
				filter:function(event,player){
					return !player.storage.cunsi&&player.countCards('h')&&!player.isTurnedOver();
				},
				init:function(player){
					player.storage.cunsi=false;
				},
				filterTarget:function(card,player,target){
					return player!=target&&target.hasSex('male');
				},
				content:function(){
					"step 0"
					player.awakenSkill('cunsi');
					var cards=player.getCards('h');
					target.gain(cards,player,'giveAuto');
					player.storage.cunsi=true;
					game.delay();
					target.addSkill('yongjue');
					target.markSkillCharacter('yongjue',player,'存嗣','<div class="skill">【勇决】</div><div>每当其他角色于回合内使用一张杀，若目标不是你，你可以获得之，每回合限一次</div>');
					"step 1"
					player.turnOver();
				},
				intro:{
					content:'limited'
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							if(target.isMin()) return 0;
							if(player.hp>1){
								if(game.phaseNumber<game.players.length) return 0;
								if(target.hp==1&&target.maxHp>2) return 0;
								if(get.attitude(player,target)<5) return 0;
							}
							if(get.attitude(player,target)<5) return 0;
							if(target.hp==1&&target.maxHp>2) return 0.2;
							if(target==game.me) return 1.2;
							return 1;
						}
					},
					expose:0.5,
					threaten:1.5
				}
			},
			fenming:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				check:function(event,player){
					var num=game.countPlayer(function(current){
						if(current.isLinked()&&current.countCards('he')){
							return get.attitude(player,current);
						}
					});
					return num<0;
				},
				filter:function(event,player){
					return player.isLinked();
				},
				preHidden:true,
				prompt:'是否发动【奋命】？',
				logTarget:function(event,player){
					return game.filterPlayer(function(current){
						if(current.isLinked()&&current.countCards('he')){
							return true;
						}
					});
				},
				content:function(){
					"step 0"
					event.targets=game.filterPlayer(function(current){
						if(current.isLinked()&&current.countCards('he')){
							return true;
						}
					});
					event.num=0;
					event.targets.sort(lib.sort.seat);
					"step 1"
					if(event.num<event.targets.length){
						var target=event.targets[event.num];
						if(player==target){
							player.chooseToDiscard(true,'he');
						}
						else{
							player.discardPlayerCard(true,'he',target);
						}
						event.num++;
						event.redo();
					}
				}
			},
			duanxie:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filterTarget:function(card,player,target){
					return player!=target&&!target.isLinked();
				},
				content:function(){
					"step 0"
					if(!target.isLinked()) target.link();
					"step 1"
					if(!player.isLinked()) player.link();
				},
				ai:{
					result:{
						target:-1,
						player:function(player){
							return player.isLinked()?0:-0.8;
						}
					},
					order:2,
					expose:0.3,
					effect:{
						target:function(card){
							if(card.name=='tiesuo'){
								return 0.5;
							}
						}
					}
				}
			},
			xiaoguo:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player.isAlive()&&event.player!=player&&player.countCards('h',function(card){
						if(_status.connectMode) return true;
						return get.type(card)=='basic';
					});
				},
				direct:true,
				content:function(){
					"step 0"
					var nono=(Math.abs(get.attitude(player,trigger.player))<3);
					if(get.damageEffect(trigger.player,player,player)<=0){
						nono=true;
					}
					var next=player.chooseToDiscard(get.prompt('xiaoguo',trigger.player),{type:'basic'});
					next.set('ai',function(card){
						if(_status.event.nono) return 0;
						return 8-get.useful(card);
					});
					next.set('logSkill',['xiaoguo',trigger.player]);
					next.set('nono',nono);
					"step 1"
					if(result.bool){
						var nono=(get.damageEffect(trigger.player,player,trigger.player)>=0);
						trigger.player.chooseToDiscard('he','弃置一张装备牌并令'+get.translation(player)+'摸一张牌，或受到一点伤害',{type:'equip'}).set('ai',function(card){
							if(_status.event.nono){
								return 0;
							}
							if(_status.event.player.hp==1) return 10-get.value(card);
							return 9-get.value(card);
						}).set('nono',nono);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.draw();
					}
					else{
						trigger.player.damage();
					}
				},
				ai:{
					expose:0.3,
					threaten:1.3
				}
			},
			suishi:{
				audio:2,
				trigger:{global:'dying'},
				forced:true,
				popup:false,
				//priority:12,
				check:function(){
					return false;
				},
				filter:function(event,player){
					return event.player!=player&&event.parent.name=='damage'&&event.parent.source&&event.parent.source!=event.player;
				},
				content:function(){
					'step 0'
					var str;
					if(trigger.parent.source==player){
						str='随势：是否摸一张牌？';
					}
					else{
						str='随势：是否令'+get.translation(player)+'摸一张牌？'
					}
					trigger.parent.source.chooseBool(str).set('ai',function(){
						return get.attitude(_status.event.player,_status.event.target)>0;
					}).set('target',player);
					'step 1'
					if(result.bool){
						player.logSkill('suishi');
						trigger.parent.source.line(player,'green');
						player.draw();
					}
				},
				group:'suishi2'
			},
			suishi2:{
				trigger:{global:'dieAfter'},
				forced:true,
				popup:false,
				check:function(){
					return false;
				},
				filter:function(event,player){
					return event.player!=player&&event.source&&event.source!=player&&event.source!=event.player;
				},
				content:function(){
					'step 0'
					var str;
					if(trigger.source==player){
						str='随势：是否流失一点体力？';
					}
					else{
						str='随势：是否令'+get.translation(player)+'流失一点体力？'
					}
					trigger.source.chooseBool(str).set('ai',function(){
						return get.attitude(_status.event.player,_status.event.target)<0;
					}).set('target',player);
					'step 1'
					if(result.bool){
						player.logSkill('suishi');
						trigger.source.line(player,'green');
						player.loseHp();
					}
				},
			},
			sijian:{
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				audio:2,
				preHidden:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					if(event.name=='gain'&&event.player==player) return false;
					var evt=event.getl(player);
					return evt&&evt.hs&&evt.hs.length>0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('sijian'),'弃置一名其他角色的一张牌',function(card,player,target){
						return player!=target&&target.countCards('he')>0;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					}).setHiddenSkill(event.name);
					"step 1"
					if(result.bool){
						player.logSkill('sijian',result.targets);
						event.target=result.targets[0];
						player.discardPlayerCard(event.target,true);
					}
					else{
						event.finish();
					}
				},
				ai:{
					expose:0.2,
				}
			},
			quji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:true,
				selectCard:function(){
					var player=_status.event.player;
					return player.getDamagedHp();
				},
				filterTarget:function(card,player,target){
					return target.hp<target.maxHp;
				},
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				selectTarget:function(){
					return [1,ui.selected.cards.length];
				},
				complexSelect:true,
				check:function(card){
					if(get.color(card)=='black') return -1;
					return 9-get.value(card);
				},
				content:function(){
					"step 0"
					target.recover();
					"step 1"
					if(target==targets[targets.length-1]){
						for(var i=0;i<cards.length;i++){
							if(get.color(cards[i],player)=='black'){
								player.loseHp();
								break;
							}
						}
					}
				},
				ai:{
					result:{
						target:1
					},
					order:6
				}
			},
			junbing:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player.countCards('h')<=1&&(player==event.player||player.hasSkill('junbing'));
				},
				direct:true,
				checkx:function(target,player){
					if(target){
						var num=target.countCards('h');
						var att=get.attitude(player,target);
						if(num==0) return true;
						if(num==1) return att>-1;
						if(num==2) return att>0;
						return att>1;
					}
					return false;
				},
				content:function(){
					"step 0"
					event.target=player;
					event.player=trigger.player;
				 var prompt;
				 if(player==event.player) prompt='是否发动【郡兵】摸一张牌？';
				 else prompt=('###是否对'+get.translation(event.target)+'发动【郡兵】？###'+(event.player==event.target?'摸一张牌':'摸一张牌，将所有手牌交给该角色，然后该角色交给你等量的手牌'));
					event.player.chooseBool(prompt).set('choice',lib.skill.junbing.checkx(event.target,event.player));
					"step 1"
					if(!result.bool){event.finish();return}
					target.logSkill('junbing',player);
					if(player==target) event.finish();
					player.draw();
					"step 2"
					var cards=player.getCards('h');
					target.gain(cards,player,'giveAuto');
					event.num=cards.length;
					"step 3"
					var he=target.getCards('he');
					if(!he.length) event.finish();
					else if(he.length<=num) event._result={cards:he};
					else target.chooseCard('选择还给'+get.translation(player)+'的牌',true,event.num,'he');
					"step 4"
					player.gain(result.cards,target,'giveAuto');
				},
				audio:2,
			},
			xiongyi:{
				skillAnimation:true,
				animationColor:'gray',
				unique:true,
				enable:'phaseUse',
				audio:2,
				limited:true,
				filterTarget:function(card,player,target){
					if(get.mode()=='guozhan'){
						if(player==target) return true;
						if(player.identity=='ye') return false;
						if(player.identity=='unknown'){
							if(_status.yeidentity.contains(player._group)){
								return false;
							}
							else if(get.zhu(player)||get.population(player._group)+1<=get.population()/2){
								return player._group==target.identity;
							}
							else{
								return false;
							}
						}
						return player.identity==target.identity;
					}
					else{
						return true;
					}
				},
				multitarget:true,
				multiline:true,
				selectTarget:function(){
					if(get.mode()=='guozhan') return -1;
					return [1,3];
				},
				content:function(){
					"step 0"
					player.awakenSkill('xiongyi');
					game.asyncDraw(targets,3);
					"step 1"
					if(player.isDamaged()){
						if(get.mode()=='guozhan'){
							if(player.isMinor(true)){
								player.recover();
							}
						}
						else if(targets.length<=2){
							player.recover();
						}
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player){
							var num=player.countCards('h');
							if(player.hp==1) return 1;
							if(player.hp==2&&num<=2) return 1;
							if(player.hp==3&&num<=1) return 1;
							if(game.phaseNumber<game.players.length*2) return 0;
							if(player.hasUnknown()) return 0;
							return 1;
						},
					}
				}
			},
			gzshushen:{
				audio:'shushen',
				trigger:{player:'recoverAfter'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return player!=current&&player.sameIdentityAs(current);
					});
				},
				content:function(){
					'step 0'
					event.num=trigger.num||1;
					"step 1"
					player.chooseTarget(get.prompt2('gzshushen'),function(card,player,target){
						return target!=player&&player.sameIdentityAs(target);
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 2"
					if(result.bool){
						player.logSkill('gzshushen',result.targets);
						result.targets[0].draw();
						if(event.num>1){
							event.num--;
							event.goto(1);
						}
					}
				},
				ai:{
					threaten:0.8,
					expose:0.1
				}
			},
			shushen:{
				audio:2,
				trigger:{player:'recoverAfter'},
				direct:true,
				content:function(){
					"step 0"
					event.count=trigger.num;
					"step 1"
					player.chooseTarget(get.prompt('shushen'),'令一名其他角色选择摸两张牌或回复1点体力',function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 2"
					if(result.bool){
						event.count--;
						player.logSkill('shushen',result.targets);
						result.targets[0].chooseDrawRecover(2,true);
						if(event.count) event.goto(1);
					}
				},
				ai:{
					threaten:0.8,
					expose:0.1
				}
			},
			shenzhi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				check:function(event,player){
					if(player.hp>2) return false;
					var cards=player.getCards('h');
					if(cards.length<player.hp) return false;
					if(cards.length>3) return false;
					for(var i=0;i<cards.length;i++){
						if(get.value(cards[i])>7||get.tag(cards[i],'recover')>=1) return false;
					}
					return true;
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				preHidden:true,
				content:function(){
					"step 0"
					var cards=player.getCards('h');
					event.bool=cards.length>=player.hp;
					player.discard(cards);
					"step 1"
					if(event.bool){
						player.recover();
					}
				}
			},
			wuji:{
				skillAnimation:true,
				animationColor:'orange',
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				unique:true,
				juexingji:true,
				filter:function(event,player){
					return player.getStat('damage')>=3&&!player.storage.wuji;
				},
				content:function(){
					"step 0"
					player.removeSkill('huxiao');
					player.gainMaxHp();
					"step 1"
					player.recover();
					player.awakenSkill('wuji');
					player.storage.wuji=true;

					var card=get.cardPile('qinglong','field');
					if(card){
						player.gain(card,'gain2','log');
					}
				}
			},
			xueji_old:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.hp<player.maxHp&&player.countCards('he',{color:'red'})>0;
				},
				filterTarget:function(card,player,target){
					return player!=target&&get.distance(player,target,'attack')<=1;
				},
				selectTarget:function(){
					return [1,_status.event.player.maxHp-_status.event.player.hp];
				},
				position:'he',
				filterCard:function(card){
					return get.color(card)=='red';
				},
				check:function(card){
					return 8-get.useful(card);
				},
				content:function(){
					"step 0"
					target.damage();
					"step 1"
					target.draw();
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							return get.damageEffect(target,player);
						}
					},
					threaten:function(player,target){
						if(target.hp==1) return 2;
						if(target.hp==2) return 1.5;
						return 0.5;
					},
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(target.hp==target.maxHp&&target.hasFriend()) return [0,1];
							}
							if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
						}
					}
				}
			},
			xueji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he',{color:'red'})>0;
				},
				filterTarget:true,
				selectTarget:function(){
					var player=_status.event.player
					return [1,Math.max(1,player.getDamagedHp())];
				},
				position:'he',
				filterCard:{color:'red'},
				check:function(card){
					return 8-get.value(card);
				},
				multitarget:true,
				multiline:true,
				line:'fire',
				content:function(){
					'step 0'
					event.delay=false;
					for(var i=0;i<targets.length;i++){
						if(!targets[i].isLinked()){
							targets[i].link(true);
							event.delay=true;
						}
					}
					'step 1'
					if(event.delay){
						game.delay();
					}
					'step 2'
					targets[0].damage('fire','nocard');
				},
				ai:{
					damage:true,
					fireAttack:true,
					threaten:1.5,
					order:7,
					result:{
						target:function(player,target){
							var eff=get.damageEffect(target,player,target,'fire');
							if(target.isLinked()){
								return eff/10;
							}
							else{
								return eff;
							}
						}
					},
				}
			},
			huxiao:{
				trigger:{source:'damageSource'},
				forced:true,
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					return event.nature=='fire';
				},
				logTarget:'player',
				content:function(){
					if(!player.storage.huxiao3){
						player.storage.huxiao3=[];
					}
					player.storage.huxiao3.add(trigger.player);
					trigger.player.draw();
					player.addTempSkill('huxiao3');
				},
			},
			huxiao3:{
				onremove:true,
				mark:true,
				intro:{
					content:'players'
				},
				mod:{
					cardUsableTarget:function(card,player,target){
						if(player.storage.huxiao3&&player.storage.huxiao3.contains(target)) return true;
					}
				}
			},
			aocai:{
				audio:2,
				audioname:['gz_zhugeke'],
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(player!=_status.currentPhase&&get.type(name)=='basic'&&lib.inpile.contains(name)) return true;
				},
				filter:function(event,player){
					if(event.responded||player==_status.currentPhase||event.aocai) return false;
					for(var i of lib.inpile){
						if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)) return true;
					}
					return false;
				},
				delay:false,
				content:function(){
					'step 0'
					var evt=event.getParent(2);
					evt.set('aocai',true);
					var cards=get.cards((get.mode()!='guozhan'&&player.countCards('h')==0)?4:2);
					for(var i=cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cards[i].fix(),ui.cardPile.firstChild);
					}
					var aozhan=player.hasSkill('aozhan');
					player.chooseButton(['傲才：选择要'+(evt.name=='chooseToUse'?'使用':'打出')+'的牌',cards]).set('filterButton',function(button){
						return _status.event.cards.contains(button.link);
					}).set('cards',cards.filter(function(card){
						if(aozhan&&card.name=='tao'){
							return evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)||evt.filterCard({
								name:'shan',isCard:true,cards:[card],
							},evt.player,evt);
						}
						return evt.filterCard(card,evt.player,evt);
					})).set('ai',function(button){
						var evt=_status.event.getParent(3);
						if(evt&&evt.ai){
							var tmp=_status.event;
							_status.event=evt;
							var result=(evt.ai||event.ai1)(button.link,_status.event.player,evt);
							_status.event=tmp;
							return result;
						}
						return 1;
					});
					'step 1'
					var evt=event.getParent(2);
					if(result.bool&&result.links&&result.links.length){
						var name=result.links[0].name,aozhan=(player.hasSkill('aozhan')&&name=='tao');
						if(aozhan){
							name=evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)?'sha':'shan';
						}
						if(evt.name=='chooseToUse'){
							game.broadcastAll(function(result,name){
								lib.skill.aocai_backup.viewAs={name:name,cards:[result],isCard:true};
								lib.skill.aocai_backup.prompt='选择'+get.translation(result)+'的目标';
							},result.links[0],name);
							evt.set('_backupevent','aocai_backup');
							evt.backup('aocai_backup');
						}
						else{
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card=get.autoViewAs(result.links[0]);
							if(aozhan) evt.result.card.name=name;
							evt.result.cards=[result.links[0]];
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai:{
					effect:{
						target:function(card,player,target,effect){
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						}
					},
					order:11,
					respondShan:true,
					respondSha:true,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					}
				}
			},
			aocai_backup:{
				sourceSkill:'aocai',
				precontent:function(){
					delete event.result.skill;
					var name=event.result.card.name;
					event.result.cards=event.result.card.cards;
					event.result.card=get.autoViewAs(event.result.cards[0]);
					event.result.card.name=name;
				},
				filterCard:function(){return false},
				selectCard:-1,
			},
			hongyuan:{
				trigger:{player:'phaseDrawBegin2'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return !event.numFixed&&event.num>0;
				},
				content:function(){
					"step 0"
					var check;
					if(player.countCards('h')==0){
						check=false;
					}
					else{
						check=(game.countPlayer(function(current){
							return player!=current&&get.attitude(player,current)>1;
						})>=2);
					}
					if(get.is.versus()){
						event.versus=true;
						player.chooseBool(get.prompt2('hongyuan')).ai=function(){
							return game.countPlayer(function(current){
								return player.side==current.side;
							})>2;
						};
					}
					else{
						player.chooseTarget(get.prompt2('hongyuan'),[1,2],function(card,player,target){
							return player!=target;
						},function(target){
							if(!_status.event.check) return 0;
							return get.attitude(_status.event.player,target);
						}).set('check',check);
					}
					"step 1"
					if(result.bool){
						var targets;
						if(event.versus){
							targets=game.filterPlayer(function(current){
								return current!=player&&current.side==player.side;
							});
						}
						else{
							targets=result.targets;
						}
						player.logSkill('hongyuan',targets);
						game.asyncDraw(targets);
						trigger.num--;
					}
				},
			},
			huanshi:{
				audio:2,
				trigger:{global:'judge'},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)<=0) return false;
					var cards=player.getCards('he');
					var judge=event.judge(event.player.judging[0]);
					for(var i=0;i<cards.length;i++){
						var judge2=event.judge(cards[i]);
						if(judge2>judge) return true;
						if(_status.currentPhase!=player&&judge2==judge&&get.color(cards[i])=='red'&&get.useful(cards[i])<5) return true;
					}
					return false;
				},
				content:function(){
					"step 0"
					var target=trigger.player;
					var judge=trigger.judge(target.judging[0]);
					var attitude=get.attitude(target,player);
					target.choosePlayerCard('请选择代替判定的牌','he','visible',true,player).set('ai',function(button){
						var card=button.link;
						var judge=_status.event.judge;
						var attitude=_status.event.attitude;
						var result=trigger.judge(card)-judge;
						var player=_status.event.player;
						if(result>0){
							return 20+result;
						}
						if(result==0){
							if(_status.currentPhase==player) return 0;
							if(attitude>=0){
								return get.color(card)=='red'?7:0-get.value(card);
							}
							else{
								return get.color(card)=='black'?10:0+get.value(card);
							}
						}
						if(attitude>=0){
							return get.color(card)=='red'?0:-10+result;
						}
						else{
							return get.color(card)=='black'?0:-10+result;
						}
					}).set('filterButton',function(button){
						var player=_status.event.target;
						var card=button.link;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('judge',judge).set('attitude',attitude);
					"step 1"
					if(result.bool){
						event.card=result.links[0];
						player.respond(event.card,'highlight').nopopup=true;
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card){
								if(card.clone){
									card.clone.classList.remove('thrownhighlight');
								}
							},trigger.player.judging[0]);
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0]=event.card;
						trigger.orderingCards.add(event.card);
						game.log(trigger.player,'的判定牌改为',event.card);
						game.delay(2);
					}
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1,
					}
				}
			},
			mingzhe:{
				audio:2,
				trigger:{player:['useCard','respond','loseAfter']},
				frequent:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					if(event.name!='lose') return get.color(event.card)=='red';
					if(event.type!='discard') return false;
					if(event.cards2){
						for(var i=0;i<event.cards2.length;i++){
							if(get.color(event.cards2[i],player)=='red') return true;
						}
					}
					return false;
				},
				content:function(){
					"step 0"
					event.count=1;
					if(trigger.name=='lose'){
						event.count=0;
						for(var i=0;i<trigger.cards2.length;i++){
							if(get.color(trigger.cards2[i],player)=='red') event.count++;
						}
					}
					"step 1"
					player.draw();
					event.count--;
					"step 2"
					if(event.count){
						player.chooseBool(get.prompt2('mingzhe')).set('frequentSkill','mingzhe');
					}
					else event.finish();
					"step 3"
					if(result.bool){
						player.logSkill('mingzhe');
						event.goto(1);
					}
				},
				ai:{
					threaten:0.7
				}
			},
			
			duwu:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.hasSkill('duwu2')==false&&game.hasPlayer(function(current){
						return current.hp>0&&current.hp<=player.countCards('he')&&player.inRange(current);
					});
				},
				filterCard:function(){
					if(ui.selected.targets.length) return false;
					return true;
				},
				position:'he',
				selectCard:[1,Infinity],
				complexSelect:true,
				complexCard:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.hp>0&&player.inRange(target)&&ui.selected.cards.length==target.hp;
				},
				check:function(card){
					var player=_status.event.player;
					if(game.hasPlayer(function(current){
						return current!=player&&current.hp>0&&player.inRange(current)&&ui.selected.cards.length==current.hp&&get.damageEffect(current,player,player)>0;
					})) return 0;
					switch(ui.selected.cards.length){
						case 0:return 8-get.value(card);
						case 1:return 6-get.value(card);
						case 2:return 3-get.value(card);
						default:return 0;
					}
				},
				content:function(){
					player.addTempSkill('duwu3');
					target.damage('nocard');
				},
				ai:{
					damage:true,
					order:2,
					result:{
						target:function(player,target){
							return get.damageEffect(target,player);
						}
					},
					threaten:1.5,
					expose:0.3
				}
			},
			duwu2:{charlotte:true},
			duwu3:{
				trigger:{global:'dyingAfter'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return event.player.isAlive()&&event.reason&&event.reason.getParent().name=='duwu';
				},
				content:function(){
					player.loseHp();
					player.addTempSkill('duwu2');
				}
			},
			yicong:{
				trigger:{
					player:["changeHp"],
				},
				audio:2,
				audioname:['re_gongsunzan'],
				forced:true,
				filter:function(event,player){
					return get.sgn(player.hp-2.5)!=get.sgn(player.hp-2.5-event.num);
				},
				content:function (){},
				mod:{
					globalFrom:function(from,to,current){
						if(from.hp>2) return current-1;
					},
					globalTo:function(from,to,current){
						if(to.hp<=2) return current+1;
					},
				},
				ai:{
					threaten:0.8
				}
			},
			yongsi:{
				group:['yongsi1','yongsi2'],
				ai:{
					threaten:2.2
				}
			},
			yongsi1:{
				audio:2,
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num+=game.countGroup();
				}
			},
			yongsi2:{
				audio:2,
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				content:function(){
					player.chooseToDiscard(game.countGroup(),'he',true);
				}
			},
			bifa:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						filterCard:true,
						filterTarget:function(card,player,target){
							return player!=target&&!target.getExpansions('bifa2').length;
						},
						ai1:function(card){
							return 7-get.value(card);
						},
						ai2:function(target){
							var num=target.hasSkillTag('maixie')?2:0;
							return -get.attitude(_status.event.player,target)-num;
						},
						prompt:get.prompt2('bifa'),
					});
					"step 1"
					if(result.bool){
						event.forceDie=true;
						var target=result.targets[0];
						event.target=target;
						player.logSkill('bifa',result.targets[0]);
						event.card=result.cards[0];
						target.storage.bifa2=[result.cards[0],player];
						target.addToExpansion(result.cards[0],player,'giveAuto').gaintag.add('bifa2');
					}
					else event.finish();
					"step 2"
					if(target.getExpansions('bifa2').contains(card)){
						target.addSkill('bifa2');
					}
					else delete target.storage.bifa2;
				},
				ai:{
					threaten:1.7,
					expose:0.3
				}
			},
			bifa2:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				charlotte:true,
				audio:false,
				filter:function(event,player){
					return player.storage.bifa2&&player.getExpansions('bifa2').contains(player.storage.bifa2[0]);
				},
				content:function(){
					"step 0"
					if(player.storage.bifa2[1].isAlive()&&player.countCards('h')){
						player.chooseCard(get.translation(player.storage.bifa2[1])+'的笔伐牌为：',function(card){
							return get.type(card,'trick')==_status.event.type;
						}).set('ai',function(card){
							return 8-get.value(card);
						}).set('type',get.type(player.storage.bifa2[0],'trick')).set('promptx',[[player.storage.bifa2[0]],'请交给其一张与此牌类别相同的手牌，否则失去1点体力' ]);
					}
					else{
						event.directfalse=true;
					}
					"step 1"
					if(result.bool&&!event.directfalse){
						player.storage.bifa2[1].gain(result.cards,player,'giveAuto');
						player.gain(player.storage.bifa2[0],'draw');
					}
					else{
						player.loseHp();
					}
					"step 2"
					player.removeSkill('bifa2');
				},
				marktext:'檄',
				intro:{
					markcount:1,
					name:'笔伐',
					content:'已成为〖笔伐〗的目标',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
					delete player.storage[skill];
				},
			},
			songci:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if(!player.storage.songci) return true;
					return game.hasPlayer(function(current){
						return !player.storage.songci.contains(current);
					});
				},
				init:function(player){
					if(!player.storage.songci) player.storage.songci=[];
				},
				filterTarget:function(card,player,target){
					return (!player.storage.songci||!player.storage.songci.contains(target));
				},
				content:function(){
					if(target.countCards('h')>target.hp){
						target.chooseToDiscard(2,'he',true);
					}
					else{
						target.draw(2);
					}
					if(!player.storage.songci) player.storage.songci=[];
					player.storage.songci.push(target);
					player.storage.songci.sortBySeat();
					player.markSkill('songci');
				},
				intro:{
					content:'已对$发动过〖颂词〗'
				},
				ai:{
					order:7,
					threaten:1.6,
					expose:0.2,
					result:{
						target:function(player,target){
							if(target.countCards('h')<=target.hp){
								return 1;
							}
							else if(target.countCards('h')>target.hp){
								return -1;
							}
						}
					}
				},
				group:'songci_draw',
			},
			songci_draw:{
				audio:'songci',
				trigger:{player:'phaseDiscardEnd'},
				forced:true,
				filter:function(event,player){
					if(!player.storage.songci) return false;
					return !game.hasPlayer(function(current){
						return !player.storage.songci.contains(current);
					});
				},
				content:function(){
					player.draw();
				},
			},
			baobian:{
				audio:2,
				trigger:{player:['phaseBefore','changeHp']},
				forced:true,
				popup:false,
				init:function(player){
					if(game.online) return;
					player.removeAdditionalSkill('baobian');
					var list=[];
					if(player.hp<=3){
						//if(trigger.num!=undefined&&trigger.num<0&&player.hp-trigger.num>1) player.logSkill('baobian');
						list.push('oltiaoxin');
					}
					if(player.hp<=2){
						list.push('olpaoxiao');
					}
					if(player.hp<=1){
						list.push('xinshensu');
					}
					if(list.length){
						player.addAdditionalSkill('baobian',list);
					}
				},
				derivation:['oltiaoxin','olpaoxiao','xinshensu'],
				content:function(){
					player.removeAdditionalSkill('baobian');
					var list=[];
					if(player.hp<=3){
						if(trigger.num!=undefined&&trigger.num<0&&player.hp-trigger.num>1) player.logSkill('baobian');
						list.push('oltiaoxin');
					}
					if(player.hp<=2){
						list.push('olpaoxiao');
					}
					if(player.hp<=1){
						list.push('xinshensu');
					}
					if(list.length){
						player.addAdditionalSkill('baobian',list);
					}
				},
				ai:{
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [0,1];
							}
							if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
						}
					}
				}
			},
			chongzhen:{
				group:['chongzhen1','chongzhen2'],
				audio:'chongzhen1',
				ai:{
					combo:'ollongdan',
					mingzhi:false,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')||get.tag(card,'respondSha')){
								if(get.attitude(target,player)<=0){
									if(current>0) return;
									if(target.countCards('h')==0) return 1.6;
									if(target.countCards('h')==1) return 1.2;
									if(target.countCards('h')==2) return [0.8,0.2,0,-0.2];
									return [0.4,0.7,0,-0.7];
								}
							}
						},
					},
				}
			},
			chongzhen1:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='longdan_shan'&&event.skill!='longdan_sha'&&
					event.skill!='fanghun_shan'&&event.skill!='fanghun_sha'&&event.skill!='ollongdan')) return false;
					var target=lib.skill.chongzhen1.logTarget(event,player);
					return target&&target.countGainableCards(player,'h')>0;
				},
				logTarget:function(event,player){
					if(event.card.name=='sha') return event.targets[0];
					return event.respondTo[0];
				},
				prompt2:'当你因发动〖龙胆〗而使用或打出【杀】或【闪】时，你可以获得对方的一张手牌。',
				content:function(){
					var target=lib.skill.chongzhen1.logTarget(trigger,player);
					player.gainPlayerCard(target,'h',true);
				}
			},
			chongzhen2:{
				audio:2,
				trigger:{player:'respond'},
				filter:function(event,player){
					if(event.skill!='longdan_shan'&&event.skill!='longdan_sha'&&
					event.skill!='fanghun_shan'&&event.skill!='fanghun_sha'&&event.skill!='ollongdan') return false;
					return event.source&&event.source.countGainableCards(player,'h')>0;
				},
				logTarget:'source',
				prompt2:'当你因发动〖龙胆〗而使用或打出【杀】或【闪】时，你可以获得对方的一张手牌。',
				content:function(){
					player.gainPlayerCard(trigger.source,'h',true);
				}
			},
			lihun:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.hasSex('male');
				},
				filterCard:true,
				position:'he',
				content:function(){
					player.gain(target.getCards('h'),target,'giveAuto');
					player.turnOver();
					player.addSkill('lihun2');
					player.storage.lihun=target;
				},
				check:function(card){return 8-get.value(card)},
				ai:{
					order:10,
					result:{
						player:function(player){
							if(player.classList.contains('turnedover')) return 10;
							return 0;
						},
						target:function(player,target){
							if(target.countCards('h')>target.hp) return target.hp-target.countCards('h');
							return 0;
						}
					},
					threaten:1.5,
					effect:{
						target:function(card){
							if(card.name=='guiyoujie') return [0,2];
						}
					}
				},
			},
			lihun2:{
				trigger:{player:'phaseUseEnd'},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					"step 0"
						var cards=player.getCards('he');
					player.removeSkill('lihun2');
					if(player.storage.lihun.classList.contains('dead')||player.storage.lihun.hp<=0||cards.length==0){
						event.finish();
					}
					else{
						if(cards.length<player.storage.lihun.hp) event._result={bool:true,cards:cards};
						else player.chooseCard('he',true,player.storage.lihun.hp,'离魂：选择要交给'+get.translation(player.storage.lihun)+'的牌');
					}
					"step 1"
					player.storage.lihun.gain(result.cards,player);
					player.$give(result.cards.length,player.storage.lihun);
				}
			},
			yuanhu:{
				audio:3,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						filterCard:function(card){
							return get.type(card)=='equip';
						},
						position:'he',
						filterTarget:function(card,player,target){
							return target.isEmpty(get.subtype(card));
						},
						ai1:function(card){
							return 6-get.value(card);
						},
						ai2:function(target){
							return get.attitude(_status.event.player,target)-3;
						},
						prompt:get.prompt2('yuanhu')
					});
					"step 1"
					if(result.bool){
						player.logSkill('yuanhu',result.targets);
						var thisTarget=result.targets[0];
						var thisCard=result.cards[0];
						thisTarget.equip(thisCard);
						event.target=thisTarget;
						if(thisTarget!=player){
							player.$give(thisCard,thisTarget,false);
						}
						switch(get.subtype(thisCard)){
							case 'equip1':{
								if(!game.hasPlayer(function(current){
									return get.distance(thisTarget,current)<=1;
								})){
									event.finish();
									return;
								}
								game.delay();
								player.chooseTarget(true,function(card,player,target){
									return get.distance(_status.event.thisTarget,target)<=1&&target.countCards('hej');
								}).set('ai',function(target){
									var attitude=get.attitude(_status.event.player,target);
									if(attitude>0&&target.countCards('j')){
										return attitude*1.5;
									}
									return -attitude;
								}).set('thisTarget',thisTarget);
								return;
							}
							case 'equip2':{
								thisTarget.draw();event.finish();
								return;
							}
							case 'equip5':{
								event.finish();
								return;
							}
							default:{
								thisTarget.recover();
								event.finish();
								return;
							}
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.targets.length){
						player.discardPlayerCard(true,result.targets[0],'hej');
					}
				},
			},
			tianming:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				check:function(event,player){
					var cards=player.getCards('h');
					if(cards.length<=2){
						for(var i=0;i<cards.length;i++){
							if(cards[i].name=='shan'||cards[i].name=='tao') return false;
						}
					}
					return true;
				},
				filter:function(event,player){
					return event.card.name=='sha';
				},
				content:function(){
					"step 0"
					player.chooseToDiscard(2,true,'he');
					player.draw(2);
					var players=game.filterPlayer();
					players.sort(function(a,b){
						return b.hp-a.hp;
					});
					if(players[0].hp>players[1].hp&&players[0]!=player){
						players[0].chooseBool(get.prompt2('tianming'));
						event.player=players[0];
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool){
						player.chooseToDiscard(2,true,'he');
						player.draw(2);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha') return [1,0.5];
						}
					}
				}
			},
			mizhao:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterCard:true,
				selectCard:-1,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				discard:false,
				lose:false,
				delay:false,
				ai:{
					order:1,
					result:{
						player:0,
						target:function(player,target){
							if(target.hasSkillTag('nogain')) return 0;
							if(player.countCards('h')>1){
								return 1;
							}
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].countCards('h')&&players[i]!=target&&players[i]!=player&&get.attitude(player,players[i])<0){
									break;
								}
							}
							if(i==players.length){
								return 1;
							}
							return -2/(target.countCards('h')+1);
						}
					}
				},
				content:function(){
					"step 0"
					event.target1=targets[0];
					targets[0].gain(cards,player,'giveAuto');
					"step 1"
					if(!targets[0].countCards('h')){
						event.finish();
						return;
					}
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i]!=event.target1&&players[i]!=player&&event.target1.canCompare(players[i])){
							break;
						}
					}
					if(i==players.length){
						event.finish();
					}
					"step 2"
					player.chooseTarget(true,'选择拼点目标',function(card,player,target){
						return _status.event.target1.canCompare(target)&&target!=player;
					}).set('ai',function(target){
						var player=_status.event.player;
						var eff=get.effect(target,{name:'sha'},_status.event.target1,player);
						var att=get.attitude(player,target);
						if(att>0){
							return eff-10;
						}
						return eff;
					}).set('target1',event.target1).set('forceDie',true);
					"step 3"
					if(result.targets.length){
						event.target2=result.targets[0];
						event.target1.line(event.target2);
						event.target1.chooseToCompare(event.target2);
					}
					else{
						event.finish();
					}
					"step 4"
					if(!result.tie){
						if(result.bool){
							if(event.target1.canUse({name:'sha',isCard:true},event.target2,false)) event.target1.useCard({name:'sha',isCard:true},event.target2);
						}
						else if(event.target2.canUse({name:'sha',isCard:true},event.target1,false)){
							event.target2.useCard({name:'sha',isCard:true},event.target1);
						}
					}
				}
			},
			gongao:{
				audio:2,
				trigger:{global:'dieAfter'},
				forced:true,
				content:function(){
					player.gainMaxHp();
					player.recover();
				},
				ai:{
					threaten:1.5
				}
			},
			juyi:{
				skillAnimation:true,
				animationColor:'thunder',
				audio:true,
				derivation:['benghuai','weizhong'],
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return player.maxHp>game.players.length&&!player.storage.juyi;
				},
				forced:true,
				unique:true,
				juexingji:true,
				content:function(){
					player.draw(player.maxHp);
					player.addSkill('benghuai');
					player.addSkill('weizhong');
					player.storage.juyi=true;
					player.awakenSkill('juyi');
				}
			},
			weizhong:{
				audio:true,
				trigger:{player:['gainMaxHpEnd','loseMaxHpEnd']},
				forced:true,
				content:function(){
					player.draw(player.isMinHandcard()?2:1);
				}
			},
			kuangfu:{
				trigger:{source:'damageSource'},
				audio:2,
				filter:function(event){
					if(event._notrigger.contains(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.player.countCards('e');
				},
				logTarget:'player',
				preHidden:true,
				check:function(event,player){
					return get.attitude(player,event.player)<=0;
				},
				content:function(){
					"step 0"
					var neg=get.attitude(player,trigger.player)<=0;
					player.choosePlayerCard('e',trigger.player).set('ai',function(button){
						if(_status.event.neg){
							return get.buttonValue(button);
						}
						return 0;
					}).set('neg',neg);
					"step 1"
					if(result.bool){
						event.card=result.links[0];
						if(player.isEmpty(get.subtype(event.card))){
							player.chooseBool('是否将'+get.translation(event.card)+'置入自己的装备区？').ai=function(){
								return true;
							};
						}
						else event._result={bool:false};
					}
					else event.finish();
					"step 2"
					if(result.bool){
						trigger.player.$give(event.card,player,false);
						player.equip(event.card);
					}
					else trigger.player.discard(event.card);
				}
			},
			"xinfu_lingren":{
				usable:1,
				audio:2,
				trigger:{
					player:"useCardToPlayered",
				},
				direct:true,
				filter:function(event,player){
					if(event.getParent().triggeredTargets3.length>1) return false;
					if(!player.isPhaseUsing()) return false;
					if(!['basic','trick'].contains(get.type(event.card))) return false;
					if(get.tag(event.card,'damage')) return true;
					return false;
				},
				content:function (){
					'step 0'
					player.chooseTarget(get.prompt('xinfu_lingren'),'选择一名目标角色并猜测其手牌构成',function(card,player,target){
						return _status.event.targets.contains(target);
					}).set('ai',function(target){
						return 2-get.attitude(_status.event.player,target);
					}).set('targets',trigger.targets);
					'step 1'
					if(result.bool){
						player.logSkill('xinfu_lingren',result.targets);
						var target=result.targets[0];
						event.target=target;
						event.choice={
							basic:false,
							trick:false,
							equip:false,
						}
						player.chooseBool('是否押基本牌？').ai=function(event,player){
							var rand=0.95;
							if(!target.countCards('h',{type:['basic']})) rand=0.05;
							if(!target.countCards('h')) rand=0;
							return Math.random()<rand?true:false;
						};
					}
					else{
						player.storage.counttrigger.xinfu_lingren--;
						event.finish();
					}
					'step 2'
					if(result.bool){
						event.choice.basic=true;
					}
					player.chooseBool('是否押锦囊牌？').ai=function(event,player){
						var rand=0.9;
							if(!target.countCards('h',{type:['trick','delay']})) rand=0.1;
							if(!target.countCards('h')) rand=0;
							return Math.random()<rand?true:false;
					};
					'step 3'
					if(result.bool){
						event.choice.trick=true;
					}
					player.chooseBool('是否押装备牌？').ai=function(event,player){
						var rand=0.75;
							if(!target.countCards('h',{type:['equip']})) rand=0.25;
							if(!target.countCards('h')) rand=0;
							return Math.random()<rand?true:false;
					};
					'step 4'
					if(result.bool){
						event.choice.equip=true;
					}
					game.delay();
					var reality={
						basic:false,
						trick:false,
						equip:false,
					}
					var he=target.getCards('h');
					for(var i=0;i<he.length;i++){
						reality[get.type(he[i],'trick')]=true;
					}
					event.num=0;
					var tl=['basic','trick','equip'];
					for(var i=0;i<tl.length;i++){
						if(event.choice[tl[i]]==reality[tl[i]]) event.num++;
					}
					'step 5'
					player.popup('猜对'+get.cnNumber(event.num)+'项');
					game.log(player,'猜对了'+get.cnNumber(event.num)+'项');
					if(event.num>0){
						target.addTempSkill('lingren_adddamage');
						target.storage.lingren={
							card:trigger.card,
							//player:event.targett,
						}
					}
					if(event.num>1) player.draw(2);
					if(event.num>2){
						player.addTempSkill('lingren_jianxiong',{player:'phaseBegin'});
						player.addTempSkill('lingren_xingshang',{player:'phaseBegin'});
					}
				},
				ai:{
					threaten:2.4,
				},
			},
			"lingren_adddamage":{
				onremove:function (player){
					delete player.storage.lingren;
				},
				trigger:{
					player:"damageBegin3",
				},
				filter:function (event,player){
					var info=player.storage.lingren;
					return event.card&&event.card==info.card;
				},
				silent:true,
				popup:false,
				forced:true,
				content:function (){
						trigger.num++;
				},
			},
			"lingren_jianxiong":{
				audio:1,
				trigger:{
					player:"damageEnd",
				},
				content:function (){
					"step 0"
					if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
						player.gain(trigger.cards,"gain2");
					}
					player.draw("nodelay");
				},
				ai:{
					maixie:true,
					"maixie_hp":true,
					effect:{
						target:function (card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')&&player!=target) return [1,0.6];
						},
					},
				},
			},
			"lingren_xingshang":{
				audio:1,
				inherit:'rexingshang',
			},
			"xinfu_fujian":{
				audio:2,
				trigger:{
					player:"phaseJieshuBegin",
				},
				filter:function (event,player){
					return !game.hasPlayer(function(current){
						return current.countCards('h')==0;
					});
				},
				forced:true,
				content:function (){
					event.num=0;
					var list=game.filterPlayer(function(target){
						if(target.isMinHandcard()) event.num=target.countCards('h');
						return player!=target;
					});
					if(event.num<1){
						event.finish();
					}
					else{
						var target=list.randomGet();
						var cards=target.getCards('h').randomGets(event.num);
						player.line(target);
						var content=[get.translation(target)+'的部分手牌',cards];
						game.log(player,'观看了',target,'的部分手牌');
						player.chooseControl('ok').set('dialog',content);
					}
				},
			},
			"xinfu_xionghuo":{
				group:["xinfu_xionghuo_damage","xinfu_xionghuo_begin","xinfu_xionghuo_init"],
				subSkill:{
					begin:{
						audio:'xinfu_xionghuo',
						logTarget:'player',
						line:false,
						forced:true,
						trigger:{
							global:"phaseUseBegin",
						},
						filter:function (event,player){
							return event.player.countMark('xionghuo')>0&&event.player!=player;
						},
						content:function (){
							'step 0'
							trigger.player.removeMark('xionghuo',trigger.player.countMark('xionghuo'));
							var list=[1,2,3];
							var num=list.randomGet();
							event.goto(num);
							'step 1'
							player.line(trigger.player,'fire');
							trigger.player.damage('fire');
							if(!trigger.player.storage.xionghuo_disable) trigger.player.storage.xionghuo_disable=[];
							trigger.player.storage.xionghuo_disable.push(player);
							trigger.player.addTempSkill('xionghuo_disable','phaseAfter');
							event.goto(4);
							'step 2'
							player.line(trigger.player,'water');
							trigger.player.loseHp();
							trigger.player.addMark('xionghuo_low',1,false);
							trigger.player.addTempSkill('xionghuo_low','phaseAfter');
							event.goto(4);
							'step 3'
							player.line(trigger.player,'green');
							var card1=trigger.player.getCards('h').randomGet();
							var card2=trigger.player.getCards('e').randomGet();
							var list=[];
							if(card1) list.push(card1);
							if(card2) list.push(card2);
							if(list.length>0){
								player.gain(list,trigger.player,'giveAuto','bySelf');
							}
							'step 4'
							game.delay();
						},
					},
					damage:{
						audio:"xinfu_xionghuo",
						sub:true,
						forced:true,
						trigger:{
							source:"damageBegin1",
						},
						filter:function (event,player){
							return event.player.countMark('xionghuo')>0;
						},
						content:function (){
							trigger.num++;
						},
					},
					init:{
						audio:'xinfu_xionghuo',
						trigger:{
							global:"phaseBefore",
							player:"enterGame",
						},
						forced:true,
						locked:false,
						filter:function(event,player){
							return (event.name!='phase'||game.phaseNumber==0);
						},
						content:function(){
							player.addMark("xionghuo",3);
						},
					},
				},
				audio:2,
				enable:"phaseUse",
				filter:function(event,player){
					return player.countMark('xionghuo')>0;
				},
				filterTarget:function (card,player,target){
					if(target.hasMark('xionghuo')) return false;
					return player!=target>0;
				},
				content:function (){
					player.removeMark('xionghuo',1);
					target.addMark('xionghuo',1);
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							if((player.countMark('xionghuo')>=2||!game.hasPlayer(function(current){
								return current!=player&&get.attitude(player,current)<0&&current.hasMark('xionghuo');
							}))&&player.countCards('h',function(card){
								return get.tag(card,'damage')&&player.canUse(card,target,null,true)
								&&player.getUseValue(card)>0&&get.effect_use(target,card,player)>0
								&&target.hasSkillTag('filterDamage',null,{
									player:player,
									card:card,
								});
							})) return 3/Math.max(1,target.hp);
							if((!player.hasUnknown()&&game.countPlayer(function(current){
								return get.attitude(player,current)<0;
							})<=1)||player.countMark('xionghuo')>=2){
								return -1;
							}
							return 0;
						},
					},
					effect:{
						player:function(card,player,target){
							if(player!=target&&get.tag(card,'damage')&&target&&target.hasMark('xionghuo')&&!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:card,
							})) return [1,0,1,-2];
						},
					},
					threaten:1.6,
				},
			},
			xionghuo:{
				marktext:"戾",
				mark:true,
				intro:{
					name:'暴戾',
					content:"mark",
				},
				locked:true,
			},
			"xionghuo_disable":{
				mod:{
					playerEnabled:function (card,player,target){
						if(card.name=='sha'&&(player.storage.xionghuo_disable&&player.storage.xionghuo_disable.contains(target))) return false;
					},
				},
				onremove:true,
				charlotte:true,
				mark:true,
				marktext:"禁",
				intro:{
					content:"本回合内不能对$使用【杀】",
				},
			},
			"xionghuo_low":{
				mod:{
					maxHandcard:function (player,num){
						return num-player.countMark('xionghuo_low');
					},
				},
				marktext:"减",
				mark:true,
				onremove:true,
				charlotte:true,
				intro:{
					content:"本回合内手牌上限-#",
				},
			},
			"xinfu_shajue":{
				audio:2,
				trigger:{
					global:"dying",
				},
				filter:function (event,player){
					return event.player.hp<0&&event.player!=player;
				},
				forced:true,
				//priority:7,
				content:function (){
					if(trigger.parent.name=='damage'&&get.itemtype(trigger.parent.cards)=='cards'&&get.position(trigger.parent.cards[0],true)=='o'){
						player.gain(trigger.parent.cards,"gain2");
					}
					player.addMark('xionghuo',1);
				},
			},
			"xinfu_jianjie":{
				derivation:["jianjie_faq"],
				group:["xinfu_jianjie1","xinfu_jianjie2"],
				audio:3,
				trigger:{
					player:"phaseZhunbeiBegin",
				},
				direct:true,
				filter:function(event,player){
					if(player.phaseNumber>1) return false;
					return !game.hasPlayer(function(current){
						return current.hasSkill('smh_huoji')||current.hasSkill('smh_lianhuan');
					});
				},
				content:function(){
					"step 0"
					player.chooseTarget('请将「龙印」交给一名角色',true,function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						var player=_status.event.player;
						return 10+get.attitude(player,target);
					});
					"step 1"
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.logSkill('xinfu_jianjie',target);
						player.line(target,'fire');
						target.addSkill('smh_huoji');
						game.delay();
					}
					if(game.hasPlayer(function(current){
						return !current.hasSkill('smh_huoji')&&current!=player
					})){
						player.chooseTarget('请将「凤印」交给一名角色',true,function(card,player,target){
							return target!=player&&!target.hasSkill('smh_huoji');
						}).set('ai',function(target){
							var player=_status.event.player;
							return 10+get.attitude(player,target);
						});
					}
					else event.finish();
					"step 2"
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.logSkill('xinfu_jianjie',target);
						player.line(target,'green');
						target.addSkill('smh_lianhuan');
						game.delay();
					}
				},
			},
			"xinfu_jianjie1":{
				audio:3,
				prompt:"你的第一个准备阶段，你令两名不同的角色分别获得龙印与凤印；出牌阶段限一次（你的第一个回合除外），或当拥有龙印、凤印的角色死亡时，你可以转移龙印、凤印。",
				enable:"phaseUse",
				usable:1,
				filter:function (event,player){
					if(player.phaseNumber==1) return false;
					if(!game.hasPlayer(function(current){
						return current.hasSkill('smh_huoji')||current.hasSkill('smh_lianhuan');
					})) return false;
					return true;
				},
				filterTarget:function (card,player,target){
					if(ui.selected.targets.length==1){
						return true;
					}else{
						return target.hasSkill('smh_huoji')||target.hasSkill('smh_lianhuan');
					}
				},
				targetprompt:["移走印","得到印"],
				selectTarget:2,
				multitarget:true,
				content:function (){
					'step 0'
					if(targets[0].hasSkill('smh_huoji')&&targets[0].hasSkill('smh_lianhuan')){
						player.chooseControl('龙印','凤印').set('prompt','请选择要移动的印');
					}
					else{
						if(targets[0].hasSkill('smh_huoji')) event._result={control:'龙印'};
						else event._result={control:'凤印'};
					}
					'step 1'
					if(result.control=='龙印'){
						targets[0].removeSkill('smh_huoji');
						targets[1].addSkill('smh_huoji');
					}
					else{
						targets[0].removeSkill('smh_lianhuan');
						targets[1].addSkill('smh_lianhuan');
					}
				},
				ai:{
					order:8,
					result:{
						target:function (player,target){
							if(ui.selected.targets.length==0){
								return get.attitude(player,target)<0?-999:-3;
							}
							else{
								return target.countCards('h')+1;
							}
						},
					},
					expose:0.4,
					threaten:3,
				},
			},
			"smh_huoji":{
				charlotte:true,
				group:["smh_yeyan"],
				mark:true,
				marktext:"龙",
				intro:{
					name:"龙印",
					content:"<li>出牌阶段限三次，你可以将一张红色牌当【火攻】使用。<br><li>若你同时拥有「凤印」，则你视为拥有技能〖业炎〗。（发动〖业炎〗后，弃置龙印和凤印）",
				},
				usable:3,
				audio:2,
				enable:"chooseToUse",
				position:"hes",
				filterCard:function(card){
					return get.color(card)=='red';
				},
				viewAs:{
					name:"huogong",
					nature:"fire",
				},
				viewAsFilter:function (player){
					if(player.hasSkill('huoji')) return false;
					if(!game.hasPlayer(function(current){
						return current.hasSkill('xinfu_jianjie');
					})) return false;
					if(!player.countCards('hes',{color:'red'})) return false;
				},
				prompt:"将一张红色牌当火攻使用",
				check:function (card){
					var player=_status.currentPhase;
					if(player.countCards('h')>player.hp){
						return 6-get.value(card);
					}
					return 4-get.value(card)
				},
				ai:{
					fireAttack:true,
				},
			},
			"smh_lianhuan":{
				audio:2,
				charlotte:true,
				enable:"phaseUse",
				filter:function (event,player){
					if(player.hasSkill('lianhuan')||player.hasSkill('xinlianhuan')) return false;
					if(!game.hasPlayer(function(current){
						return current.hasSkill('xinfu_jianjie');
					})) return false;
					if((player.getStat().skill.smh_lianhuan||0)+(player.getStat().skill.smh_lianhuan1||0)>=3) return false;
					return player.countCards('hs',{suit:'club'})>0;
				},
				filterCard:function (card){
					return get.suit(card)=='club';
				},
				viewAs:{
					name:"tiesuo",
				},
				position:'hs',
				prompt:"将一张梅花牌当铁锁连环使用",
				check:function (card){return 6-get.value(card)},
				mark:true,
				marktext:"凤",
				intro:{
					name:"凤印",
					content:"<li>出牌阶段限三次，你可以将你的任意一张梅花手牌当作【铁索连环】使用或重铸。",
				},
				group:["smh_lianhuan1"],
			},
			"xinfu_jianjie2":{
				trigger:{
					global:"dieAfter",
				},
				forced:true,
				direct:true,
				silent:true,
				popup:false,
				filter:function (event,player){
					return event.player.hasSkill('smh_huoji')||event.player.hasSkill('smh_lianhuan');
				},
				content:function (){
					"step 0"
					player.logSkill('xinfu_jianjie');
					"step 1"
					if(trigger.player.hasSkill('smh_huoji')){
						player.chooseTarget('请将'+get.translation(trigger.player)+'的「龙印」交给一名角色',true).set('ai',function(target){
							var player=_status.event.player;
							return 10+get.attitude(player,target);
						});
					}else event.goto(2);
					"step 2"
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,'fire');
						target.addSkill('smh_huoji');
						game.delay();
					}
					"step 3"
					if(trigger.player.hasSkill('smh_lianhuan')){
						player.chooseTarget('请将'+get.translation(trigger.player)+'的「凤印」交给一名角色',true).set('ai',function(target){
							var player=_status.event.player;
							return 10+get.attitude(player,target);
						});
					}else event.finish();
					"step 4"
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,'green');
						target.addSkill('smh_lianhuan');
						game.delay();
					}
				},
			},
			"smh_lianhuan1":{
				enable:"phaseUse",
				filter:function (event,player){
					if(player.hasSkill('lianhuan')||player.hasSkill('xinlianhuan')) return false;
					if(!game.hasPlayer(function(current){
						return current.hasSkill('xinfu_jianjie');
					})) return false;
					if((player.getStat().skill.smh_lianhuan||0)+(player.getStat().skill.smh_lianhuan1||0)>=3) return false;
					return player.countCards('h',{suit:'club'})>0;
				},
				filterCard:function (card){
					return get.suit(card)=='club';
				},
				check:function (card){
					return -1;
				},
				content:function (){
					player.draw();
				},
				discard:false,
				loseTo:'discardPile',
				prompt:"将一张梅花牌置入弃牌堆并摸一张牌",
				delay:0.5,
				prepare:function (cards,player){
					player.$throw(cards,1000);
				},
				ai:{
					basic:{
						order:1,
					},
					result:{
						player:1,
					},
				},
				forced:true,
			},
			"smh_yeyan":{
				unique:true,
				enable:"phaseUse",
				audio:3,
				skillAnimation:true,
				animationColor:'gray',
				prompt:"限定技，出牌阶段，你可以对一至三名角色造成至多共3点火焰伤害（你可以任意分配每名目标角色受到的伤害点数），若你将对一名角色分配2点或更多的火焰伤害，你须先弃置四张不同花色的手牌再失去3点体力。",
				filter:function (event,player){
					if(!game.hasPlayer(function(current){
						return current.hasSkill('xinfu_jianjie');
					})) return false;
					return player.hasSkill('smh_lianhuan');
				},
				filterTarget:function (card,player,target){
					var length=ui.selected.cards.length;
					return (length==0||length==4);
				},
				filterCard:function (card){
					var suit=get.suit(card);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.suit(ui.selected.cards[i])==suit) return false;
					}
					return true;
				},
				complexCard:true,
				selectCard:[0,4],
				line:"fire",
				check:function (){return -1},
				selectTarget:function (){
					if(ui.selected.cards.length==4) return [1,2];
					if(ui.selected.cards.length==0) return [1,3];
					game.uncheck('target');
					return [1,3];
				},
				multitarget:true,
				multiline:true,
				content:function (){
					"step 0"
					player.removeSkill('smh_huoji');
					player.removeSkill('smh_lianhuan');
					targets.sort(lib.sort.seat);
					event.num=0
					"step 1"
					if(cards.length==4) event.goto(2);
					else {
						if(event.num<targets.length){
						targets[event.num].damage('fire',1,'nocard');
						event.num++;
					}
					if(event.num==targets.length) event.finish();
					else event.redo();
					}
					"step 2"
					player.loseHp(3);
					if(targets.length==1) event.goto(4);
					else{
						player.chooseTarget('请选择受到2点伤害的角色',true,function(card,player,target){
							return _status.event.targets.contains(target)
						}).set('ai',function(target){
							return 1;
						}).set('targets',targets).set('forceDie',true);
					}
					"step 3"
					if(event.num<targets.length){
						var dnum=1;
						if(result.bool&&result.targets&&targets[event.num]==result.targets[0]) dnum=2;
						targets[event.num].damage('fire',dnum,'nocard');
						event.num++;
					}
					if(event.num==targets.length) event.finish();
					else event.redo();
					"step 4"
					player.chooseControl("2点","3点").set('prompt','请选择伤害点数').set('ai',function(){
						return "3点";
					}).set('forceDie',true);
					"step 5"
					targets[0].damage('fire',result.control=="2点"?2:3,'nocard'); 
				},
				ai:{
					order:1,
					result:{
						target:0,
						/*target:function (player,target){
							if(target.hasSkillTag('nofire')) return 0;
							if(lib.config.mode=='versus') return -1;
							if(player.hasUnknown()) return 0;
							return get.damageEffect(target,player);
						},*/
					},
				},
			},
			"xinfu_yinshi":{
				audio:2,
				trigger:{
					player:"damageBegin4",
				},
				forced:true,
				//priority:15,
				filter:function (event,player){
					if(player.hasSkill('smh_huoji')||player.hasSkill('smh_lianhuan')) return false;
					if(!player.isEmpty(2)) return false;
					if(event.nature) return true;
					return get.type(event.card,'trick')=='trick';
				},
				content:function (){
					trigger.cancel();
				},
				ai:{
					notrick:true,
					nofire:true,
					nothunder:true,
					effect:{
						target:function (card,player,target,current){
							if(target.hasSkill('smh_huoji')||target.hasSkill('smh_lianhuan')) return;
							if(player==target&&get.subtype(card)=='equip2'){
								if(get.equipValue(card)<=8) return 0;
							}
							if(!target.isEmpty(2)) return;
							if(get.tag(card,'natureDamage')) return 'zerotarget';
							if(get.type(card)=='trick'&&get.tag(card,'damage')){
								return 'zeroplayertarget';
							}
						},
					},
				},
			},
			"xinfu_chenghao":{
				audio:2,
				trigger:{
					global:"damageEnd",
				},
				filter:function (event,player){
					return event.lianhuanable==true&&event.player.isAlive();
				},
				frequent:true,
				content:function (){
					"step 0"
					event.cards=get.cards(game.countPlayer(function(current){
						return current.isLinked();
					})+1);
					"step 1"
					if(event.cards.length>1){
						player.chooseCardButton('【称好】：请选择要分配的牌',true,event.cards,[1,event.cards.length]).set('ai',function(button){
							if(ui.selected.buttons.length==0) return 1;
							return 0;
						});
					}
					else if(event.cards.length==1){
						event._result={links:event.cards.slice(0),bool:true};
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards('h'));
							}
							else{
								return att/100;
							}
						}).set('enemy',get.value(event.togive[0],player,'raw')<0);
					}
					"step 3"
					if(result.targets.length){
						result.targets[0].gain(event.togive,'draw');
						player.line(result.targets[0],'green');
						game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
						event.goto(1);
					}
				},
			},
			"jianjie_faq":{},
			"xinfu_wuniang":{
				trigger:{
					player:["useCard","respond"],
				},
				audio:2,
				direct:true,
				filter:function (event,player){
					return event.card.name=='sha';
				},
				content:function (){
					'step 0'
					player.chooseTarget(get.prompt('xinfu_wuniang'),'获得一名其他角色的一张牌，然后其和场上所有的“关索”摸一张牌。',function(card,player,target){
						if(player==target) return false;
						return target.countGainableCards(player,'he')>0;
					}).set('ai',function(target){
						return 10-get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('xinfu_wuniang',target);
						player.line(target,'fire');
						event.draws=game.filterPlayer(function(current){
							if(current==target) return true;
							return ['guansuo','old_guansuo'].contains(current.name)||['guansuo','old_guansuo'].contains(current.name2);
						});
						player.gainPlayerCard(target,'he',true);
					}
					else event.finish();
					'step 2'
					game.asyncDraw(event.draws,1);
					game.delay();
				},
			},
			"xinfu_xushen":{
				derivation:["xinfu_zhennan"],
				audio:2,
				subSkill:{
					count:{
						trigger:{
							player:"recoverBegin",
						},
						forced:true,
						silent:true,
						popup:false,
						filter:function (event,player){
							if(!event.card||event.card.name!='tao') return false;
							if(!event.source||!event.source.hasSex('male')) return false;
							if(!player.isDying()) return false;
							if(game.hasPlayer(function(current){
								return current.name=='guansuo'||current.name2=='guansuo';
							})) return false;
							return true;
						},
						content:function (){
							trigger.xinfu_xushen=true;
						},
						sub:true,
					},
				},
				group:["xinfu_xushen_count"],
				trigger:{
					player:"recoverAfter",
				},
				limited:true,
				init:function (player){
					player.storage.xinfu_xushen=false;
				},
				filter:function (event,player){
					if(player.storage.xinfu_xushen) return false;
					if(player.isDying()) return false;
					return event.xinfu_xushen==true;
				},
				direct:true,
				skillAnimation:true,
				animationColor:'fire',
				content:function (){
					"step 0"
					trigger.source.chooseBool('【许身】：是否将自己的一张武将牌替换为“关索”？').set('ai',function(){
						return false;
					});
					"step 1"
					if(result.bool){
						player.awakenSkill('xinfu_xushen');
						player.logSkill('xinfu_xushen',trigger.source);
						if(trigger.source.name2!=undefined){
							trigger.source.chooseControl(trigger.source.name,trigger.source.name2).set('prompt','请选择要更换的武将牌');
						}else event._result={control:trigger.source.name};
					}
					else event.finish();
					"step 2"
					trigger.source.reinit(result.control,'guansuo');
					if(_status.characterlist){
						_status.characterlist.add(result.control);
						_status.characterlist.remove('guansuo');
					}
					player.recover();
					player.addSkill('xinfu_zhennan');
				},
				mark:true,
				intro:{
					content:"limited",
				},
			},
			
			"xinfu_falu":{
				subSkill:{
					spade:{
						marktext:'♠︎️',
						intro:{
							name:'紫薇',
							content:'mark',
						},
					},
					heart:{
						marktext:'♥︎️',
						intro:{
							name:'玉清',
							content:'mark',
						},
					},
					club:{
						marktext:'♣︎️',
						intro:{
							name:'后土',
							content:'mark',
						},
					},
					diamond:{
						marktext:'♦︎',
						intro:{
							name:'勾陈',
							content:'mark',
						},
					},
				},
				forced:true,
				audio:2,
				trigger:{
					player:["loseAfter","enterGame"],
					global:"phaseBefore",
				},
				filter:function (event,player){
					if(event.name!='lose') return (event.name!='phase'||game.phaseNumber==0);
					if(event.type!='discard') return false;
					for(var i=0;i<event.cards2.length;i++){
						if(!player.hasMark('xinfu_falu_'+get.suit(event.cards2[i]))) return true;
					}
					return false;
				},
				content:function (){
					if(trigger.name!='lose'){
						for(var i=0;i<lib.suit.length;i++){
							if(!player.hasMark('xinfu_falu_'+lib.suit[i])) player.addMark('xinfu_falu_'+lib.suit[i]);
						}
						return;
					}
					for(var i=0;i<trigger.cards2.length;i++){
						var suit=get.suit(trigger.cards2[i]);
						if(!player.hasMark('xinfu_falu_'+suit)) player.addMark('xinfu_falu_'+suit);
					}
				},
				ai:{threaten:1.4},
			},
			"xinfu_dianhua":{
				trigger:{
					player:["phaseZhunbeiBegin","phaseJieshuBegin"],
				},
				frequent:true,
				audio:2,
				filter:function (event,player){
					for(var i=0;i<lib.suit.length;i++){
						if(player.hasMark('xinfu_falu_'+lib.suit[i])) return true;
					}
					return false;
				},
				content:function (){
					'step 0'
					var num=0;
					for(var i=0;i<lib.suit.length;i++){
						if(player.hasMark('xinfu_falu_'+lib.suit[i])) num++;
					}
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','点化：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=function(list){
						var cards=list[0][1],player=_status.event.player;
						var target=(_status.event.getTrigger().name=='phaseZhunbei')?player:player.next;
						var att=get.sgn(get.attitude(player,target));
						var top=[];
						var judges=target.getCards('j');
						var stopped=false;
						if(player!=target||!target.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return (judge(b)-judge(a))*att;
								});
								if(judge(cards[0])*att<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return (get.value(b,player)-get.value(a,player))*att;
							});
							while(cards.length){
								if((get.value(cards[0],player)<=5)==(att>0)) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					"step 1"
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
				},
				ai:{
					threaten:2.2
				},
			},
			"xinfu_zhenyi":{
				group:["zhenyi_spade","zhenyi_club","zhenyi_heart"],
				trigger:{
					player:"damageEnd",
				},
				audio:2,
				filter:function (event,player){
					//if(!event.nature) return false;
					return player.hasMark('xinfu_falu_diamond');
				},
				prompt2:'弃置「勾陈♦」标记，从牌堆中获得每种类型的牌各一张。',
				content:function (){
					'step 0'
					player.removeMark('xinfu_falu_diamond');
					event.num=0;
					event.togain=[];
					'step 1'
					var card=get.cardPile(function(card){
						for(var i=0;i<event.togain.length;i++){
							if(get.type(card,'trick')==get.type(event.togain[i],'trick')) return false;
						}
						return true;
					});
					if(card){
						event.togain.push(card);
						event.num++;
						if(event.num<3) event.redo();
					}
					'step 2'
					if(event.togain.length){
						player.gain(event.togain,'gain2');
					}
				},
			},
			"zhenyi_spade":{
				trigger:{
					global:"judge",
				},
				direct:true,
				filter:function(event,player){
					return player.hasMark('xinfu_falu_spade');
				},
				content:function(){
					"step 0"
					var str=get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，是否发动【真仪】，弃置「紫薇♠」标记并修改判定结果？';
					player.chooseControl('spade','heart','diamond','club','cancel2').set('prompt',str).set('ai',function(){
						//return '取消';
						var judging=_status.event.judging;
						var trigger=_status.event.getTrigger();
						var res1=trigger.judge(judging);
						var list=lib.suit.slice(0);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0) return 0;
						var getj=function(suit){
							return trigger.judge({
								name:get.name(judging),
								nature:get.nature(judging),
								suit:suit,
								number:5,
							})
						};
						list.sort(function(a,b){
							return (getj(b)-getj(a))*get.sgn(attitude);
						});
						if((getj(list[0])-res1)*attitude>0) return list[0];
						return 'cancel2';
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.control!='cancel2'){
						player.addExpose(0.25);
						player.removeMark('xinfu_falu_spade');
						player.logSkill('xinfu_zhenyi',trigger.player);
						//player.line(trigger.player);
						player.popup(result.control);
						game.log(player,'将判定结果改为了','#y'+get.translation(result.control+2)+5);
						trigger.fixedResult={
							suit:result.control,
							color:get.color({suit:result.control}),
							number:5,
						};
					}
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1,
					},
					expose:0.5,
				},
			},
			"zhenyi_club":{
				audio:'xinfu_zhenyi',
				enable:"chooseToUse",
				viewAsFilter:function(player){
					if(player==_status.currentPhase) return false;
					return player.hasMark('xinfu_falu_club')&&player.countCards('hs')>0;
				},
				filterCard:true,
				position:"hs",
				viewAs:{
					name:"tao",
				},
				prompt:"弃置「后土♣」标记，将一张手牌当桃使用",
				check:function(card){return 15-get.value(card)},
				precontent:function(){
					player.removeMark('xinfu_falu_club');
				},
			},
			zhenyi_heart:{
				trigger:{
					source:"damageBegin1",
				},
				audio:'xinfu_zhenyi',
				filter:function (event,player){
					return player.hasMark('xinfu_falu_heart');
				},
				check:function (event,player){
					if(get.attitude(player,event.player)>=0) return false;
					if(event.player.hasSkillTag('filterDamage',null,{
						player:player,
						card:event.card,
					})) return false;
					return true;
					//return player.hasMark('xinfu_falu_spade')||get.color(ui.cardPile.firstChild)=='black';
				},
				prompt2:function(event){
					return '弃置「玉清♥」标记，令对'+get.translation(event.player)+'即将造成的伤害+1。';
				},
				logTarget:"player",
				content:function(){
					player.removeMark('xinfu_falu_heart');
					trigger.num++;
				},
			},
			"xinfu_zhennan":{
				audio:2,
				trigger:{
					target:"useCardToTargeted",
				},
				filter:function (event,player){
					return event.card.name=='nanman';
				},
				direct:true,
				content:function (){
					"step 0"
					player.chooseTarget(get.prompt('xinfu_zhennan'),'对一名其他角色造成1-3点随机伤害',function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					"step 1"
					if(result.bool&&result.targets&&result.targets.length){
						game.delay();
						player.logSkill('xinfu_zhennan',result.targets);
						var num=[1,2,3,1,1,2].randomGet();
						if(get.isLuckyStar(player)) num=3;
						//player.line(result.targets[0],'fire');
						result.targets[0].damage(num);
					}
				},
				ai:{
					expose:0.25,
				},
			},
		},
		dynamicTranslate:{
			kunfen:function(player){
				if(player.storage.kunfen) return '结束阶段开始时，你可以失去1点体力，然后摸两张牌。';
				return '锁定技，结束阶段开始时，你失去1点体力，然后摸两张牌。';
			},
			jieyuan:function(player){
				var str='当你对一名其他角色造成伤害时，'
				if(!player.hasSkill('fenxin_fan')) str+='若其体力值大于或等于你的体力值，';
				str+='你可弃置一张';
				if(!player.hasSkill('fenxin_nei')) str+='黑色手';
				str+='牌，令此伤害+1；当你受到一名其他角色造成的伤害时，';
				if(!player.hasSkill('fenxin_zhong')) str+='若其体力值大于或等于你的体力值，';
				str+='你可弃置一张'
				if(!player.hasSkill('fenxin_nei')) str+='红色手';
				str+='牌，令此伤害-1。';
				return str;
			},
			youlong:function(player){
				if(player.storage.youlong) return '转换技，阴，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；<span class="bluetext">阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。</span>';
				return '转换技，<span class="bluetext">阴，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；</span>阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。';
			},
		},
		characterReplace:{
			caoshuang:['caoshuang','ns_caoshuang'],
			caoang:['caoang','yj_caoang','tw_caoang'],
			caohong:['tw_re_caohong','caohong','tw_caohong'],
			xiahouba:['xiahouba','tw_xiahouba'],
			maliang:['maliang','re_maliang','tw_maliang','ol_maliang','old_maliang'],
			dingfeng:['dingfeng','tw_dingfeng'],
			zumao:['zumao','tw_zumao'],
			beimihu:['tw_beimihu','beimihu'],
			panfeng:['re_panfeng','panfeng'],
			sunluyu:['sunluyu','re_sunluyu'],
			jin_simazhao:['jin_simazhao','simazhao','sp_simazhao'],
			jin_wangyuanji:['jin_wangyuanji','wangyuanji','sp_wangyuanji'],
			wangyun:['re_wangyun','wangyun','old_wangyun'],
			zhangliang:['re_zhangliang','zhangliang'],
			lingju:['lingju','old_lingju'],
			guansuo:['guansuo','ol_guansuo'],
			zhangxingcai:['zhangxingcai','old_zhangxingcai'],
			lisu:['ol_lisu','lisu'],
			fuwan:['fuwan','sp_fuwan'],
			huaxin:['ol_huaxin','huaxin','sp_huaxin'],
			xujing:['xujing','sp_xujing'],
			zhaoxiang:['zhaoxiang','tw_zhaoxiang'],
			dengzhi:['ol_dengzhi','re_dengzhi','dengzhi'],
			wangrong:['wangrong','ol_wangrong'],
			zongyu:['sp_zongyu','zongyu'],
			ol_dongzhao:['ol_dongzhao','tw_dongzhao'],
			mayunlu:['tw_mayunlu','mayunlu'],
			zhuling:['ol_zhuling','zhuling'],
			zangba:['tw_zangba','zangba'],
			zhangbao:['zhangbao','re_zhangbao'],
			jianggan:['jianggan','sp_jianggan'],
		},
		translate:{
			"xinfu_lingren":"凌人",
			"xinfu_lingren_info":"每回合限一次。当你于出牌阶段使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后，你可以猜测其中的一个目标的手牌中是否有基本牌，锦囊牌或装备牌。若你猜中的项目数：≥1，此牌对该角色的伤害+1；≥2，你摸两张牌；≥3，你获得技能〖奸雄〗和〖行殇〗直到下回合开始。",
			"lingren_adddamage":"凌人",
			"lingren_adddamage_info":"",
			"lingren_jianxiong":"奸雄",
			"lingren_jianxiong_info":"当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。",
			"lingren_xingshang":"行殇",
			"lingren_xingshang_info":"当有角色死亡后，你可以选择一项：1.回复一点体力。2.获得该角色的所有牌。",
			"xinfu_fujian":"伏间",
			"xinfu_fujian_info":"锁定技，结束阶段开始时，你观看一名随机的其他角色的随机X张手牌。(X为场上手牌最少的角色的手牌数)",
			"xinfu_xionghuo":"凶镬",
			"xinfu_xionghuo_info":"游戏开始时，你获得3个“暴戾”标记。出牌阶段，你可以交给一名其他角色一个“暴戾”标记，你对有“暴戾”标记的角色造成伤害时，此伤害+1。有“暴戾”的其他角色的出牌阶段开始时，其移去所有“暴戾”标记并随机执行一项：1.受到1点火焰伤害且本回合不能对你使用【杀】；2.失去1点体力且本回合手牌上限-1；3.你随机获得其一张手牌和一张装备区的牌。",
			xionghuo:"凶镬",
			"xionghuo_info":"",
			"xionghuo_disable":"凶镬",
			"xionghuo_disable_info":"",
			"xionghuo_low":"凶镬",
			"xionghuo_low_info":"",
			"xinfu_shajue":"杀绝",
			"xinfu_shajue_info":"锁定技，其他角色进入濒死状态时，若其体力值小于0，则你获得一个“暴戾”标记，并获得使其进入濒死状态的牌。",
			"xinfu_jianjie":"荐杰",
			"xinfu_jianjie_info":"你的第一个准备阶段，你令两名其他角色分别获得龙印与凤印；出牌阶段限一次（你的第一个回合除外），或当拥有龙印、凤印的角色死亡时，你可以转移龙印、凤印。",
			"xinfu_jianjie1":"荐杰",
			"xinfu_jianjie1_info":"",
			"smh_huoji":"火计",
			"smh_huoji_info":"",
			"smh_lianhuan":"连环",
			"smh_lianhuan_info":"",
			"xinfu_jianjie2":"荐杰",
			"xinfu_jianjie2_info":"",
			"smh_lianhuan1":"连铸",
			"smh_lianhuan1_info":"",
			"smh_yeyan":"业炎",
			"smh_yeyan_info":"",
			"xinfu_yinshi":"隐士",
			"xinfu_yinshi_info":"锁定技，若你没有龙印、凤印且防具栏为空，则当你受到属性伤害或锦囊牌造成的伤害时，防止此伤害。",
			"xinfu_chenghao":"称好",
			"xinfu_chenghao_info":"当一名角色受到属性伤害后，若其存活且其武将牌横置且是伤害传导的起点，则你可以观看牌堆顶的X张牌并分配给任意角色。（X为横置的角色数量且包含该角色）",
			"jianjie_faq":"关于龙凤印",
			"jianjie_faq_info":"龙印效果：视为拥有〖火计〗。凤印效果：视为拥有〖连环〗。（均一回合限使用三次） 龙凤印齐全：视为拥有〖业炎〗，〖业炎〗发动后移除龙凤印。",
			"xinfu_wuniang":"武娘",
			"xinfu_wuniang_info":"当你使用或打出【杀】时，你可以获得一名其他角色的一张牌。若如此做，该角色和场上所有的“关索”各摸一张牌。",
			"xinfu_xushen":"许身",
			"xinfu_xushen_info":"限定技，当一名男性角色使用【桃】令你脱离濒死状态时，若场上没有“关索”，则其可以将自己的一张武将牌变更为“关索”。然后你回复一点体力，并获得技能〖镇南〗。",
			"xinfu_zhennan":"镇南",
			"xinfu_zhennan_info":"当你成为【南蛮入侵】的目标时，你可以对一名其他角色造成1-3点随机伤害。",
			"xinfu_falu":"法箓",
			"xinfu_falu_info":"锁定技，游戏开始时，你获得「紫薇」「后土」「玉清」「勾陈」标记各一个。当你的牌因弃置而进入弃牌堆后，根据这些牌的花色，你获得对应的标记：黑桃，你获得1枚「紫薇」；梅花，你获得1枚「后土」；红桃，你获得1枚「玉清」；方块，你获得1枚「勾陈」。（每种标记限拥有1个）",
			"xinfu_dianhua":"点化",
			"xinfu_dianhua_info":"准备阶段或结束阶段，你可以观看牌堆顶的X张牌（X为你的「紫薇」「后土」「玉清」「勾陈」标记数的总和）。若如此做，你将这些牌以任意顺序放回牌堆顶或牌堆底。",
			"xinfu_zhenyi":"真仪",
			"xinfu_zhenyi_info":"你可以在以下时机弃置相应的标记来发动以下效果：一名角色的判定牌生效前，你可以弃置一枚「紫薇」，然后将判定结果改为任意花色且点数为5；你的回合外，你可以弃置一枚「后土」，然后将你的一张手牌当【桃】使用；当你造成伤害时，你可以弃置一枚「玉清」，然后令此伤害+1；当你受到伤害后，你可以弃置一张「勾陈」，然后你从牌堆中随机获得三种类型的牌各一张。",
			"zhenyi_spade":"真仪",
			"zhenyi_spade_info":"",
			"zhenyi_club":"真仪",
			"zhenyi_club_info":"",
			"zhenyi_heart":"真仪",
			"zhenyi_heart_info":"",
			zhangren:'张任',
			zoushi:'邹氏',
			zangba:'臧霸',
			jiling:'纪灵',
			gz_sp_dongzhuo:'董卓',
			gz_zhangjiao:'张角',
			litong:'李通',
			mizhu:'糜竺',
			buzhi:'步骘',
			chenlin:'陈琳',
			yuanshu:'SP袁术',
			gongsunzan:'公孙瓒',
			sp_diaochan:'SP貂蝉',
			yangxiu:'杨修',
			sp_zhaoyun:'SP赵云',
			caohong:'曹洪',
			liuxie:'刘协',
			xiahouba:'夏侯霸',
			zhugejin:'诸葛瑾',
			zhugeke:'诸葛恪',
			guanyinping:'关银屏',
			ganfuren:'甘夫人',
			sunhao:'孙皓',
			chengyu:'程昱',
			simalang:'司马朗',
			tianfeng:'田丰',
			sp_jiaxu:'SP贾诩',
			maliang:'马良',
			sp_caoren:'SP曹仁',
			yuejin:'乐进',
			mifuren:'糜夫人',
			sp_dongzhuo:'SP董卓',
			chendong:'陈武董袭',
			jiangfei:'蒋琬费祎',
			jiangqing:'蒋钦',
			hetaihou:'何太后',
			dingfeng:'丁奉',
			zhangxingcai:'张星彩',
			caoang:'曹昂',
			kongrong:'孔融',
			fuwan:'伏完',
			sp_pangde:'SP庞德',
			sp_sunshangxiang:'SP孙尚香',
			zhugedan:'诸葛诞',
			sp_machao:'SP马超',
			sp_jiangwei:'SP姜维',
			zhangbao:'OL张宝',
			yangxiou:'杨修',
			shixie:'士燮',
			mayunlu:'马云騄',
			zhanglu:'张鲁',
			wutugu:'兀突骨',
			mateng:'马腾',
			sp_caiwenji:'SP蔡琰',
			zhugeguo:'诸葛果',
			lingcao:'凌操',
			sunru:'孙茹',
			lingju:'灵雎',
			lifeng:'李丰',
			jsp_guanyu:'SP关羽',
			zhuling:'朱灵',
			sunluyu:'OL孙鲁育',
			hanba:'旱魃',
			panfeng:'OL潘凤',
			gz_panfeng:'潘凤',
			zumao:'祖茂',
			daxiaoqiao:'大小乔',
			cuiyan:'崔琰',
			wenpin:'文聘',
			jsp_huangyueying:'SP黄月英',
			guansuo:'关索',
			tadun:'蹋顿',
			yanbaihu:'严虎',
			wanglang:'王朗',
			caochun:'曹纯',
			dongbai:'OL董白',
			zhaoxiang:'赵襄',
			heqi:'贺齐',
			kanze:'OL阚泽',
			dongyun:'董允',
			mazhong:'马忠',
			huangfusong:'皇甫嵩',
			wangyun:'王允',
			sunqian:'孙乾',
			xizhicai:'戏志才',
			liuye:'刘晔',
			beimihu:'卑弥呼',
			luzhi:'鲁芝',
			bianfuren:'卞夫人',
			ol_bianfuren:'卞夫人',
			shamoke:'沙摩柯',
			lvfan:'吕范',
			liqueguosi:'李傕郭汜',
			cuimao:'崔琰毛玠',
			kaisa:"凯撒",
			
			
			caoying:"曹婴",
			simahui:"司马徽",
			baosanniang:"OL鲍三娘",
			pangdegong:"庞德公",
			zhaotongzhaoguang:"赵统赵广",
			majun:"马钧",
			simazhao:"司马昭",
			wangyuanji:"王元姬",
			
			jianggan:"蒋干",
			hejin:'何进',
			hansui:'韩遂',
			niujin:'牛金',
			xujing:'许靖',
			yuantanyuanshang:'袁谭袁尚',
			
			xinfenyue:'奋钺',
			xinfenyue_info:'出牌阶段限X次（X为与你不同阵营的存活角色数），你可以与一名其他角色拼点，若你赢，根据你拼点牌的点数依次执行以下效果：不大于5，你获得其一张牌；不大于9，你获得牌堆里的一张【杀】; 不大于K，视为你对其使用一张雷【杀】。',
			neifa:'内伐',
			neifa_info:'出牌阶段开始时，你可以摸两张牌或获得场上的一张牌，然后弃置一张牌。若弃置的牌是基本牌，本回合你不能使用锦囊和装备牌，且【杀】的使用次数+X且目标+1；若弃置的不是基本牌，本回合你不能使用基本牌，且使用普通锦囊牌选择目标时可以增加或减少一个目标，前两次使用装备牌时摸X张牌（X为你发动〖内伐〗弃牌后手牌中因〖内伐〗而不能使用的牌的数量且最多为5）。',
			neifa_use:'内伐',
			yuxu:'誉虚',
			yuxu_info:'当你于出牌阶段内使用的牌结算完成时，你可以摸一张牌。若如此做，当你于出牌阶段内使用的下一张牌结算完成时，你不能发动〖誉虚〗，且需弃置一张牌。',
			yuxu2:'誉虚(弃牌)',
			xjshijian:'实荐',
			xjshijian_info:'一名其他角色于其回合内使用的第二张牌结算完成后，你可弃置一张牌并令其获得技能〖誉虚〗直到回合结束。',
			mouzhu:'谋诛',
			mouzhu_info:'出牌阶段限一次，你可以令一名有牌的其他角色交给你一张牌。然后若你的手牌数大于其，其选择视为对你使用一张【杀】或【决斗】。',
			yanhuo:'延祸',
			yanhuo_info:'当你死亡时，你可以依次弃置一名其他角色的X张牌。（X为你的牌数）',
			niluan:'逆乱',
			niluan_info:'其他角色的结束阶段开始时，若其本回合内使用过【杀】或其体力值大于你，则你可以将一张黑色牌当做【杀】使用。',
			cuorui:'挫锐',
			cuorui_info:'锁定技，游戏开始时，你摸X张牌（X为你的体力上限）。锁定技，限定技，判定阶段开始前，若你的判定区有牌，你跳过此阶段。',
			cuorui_info_single:'锁定技，你的起始手牌数改为X+2（X为你剩余的备选武将数）。你跳过登场后的第一个判定阶段。',
			liewei:'裂围',
			liewei_info:'当你杀死一名角色后，你可以摸三张牌。',

			weicheng:'伪诚',
			weicheng_info:'当其他角色获得你的手牌后，若你的手牌数小于体力值，你可以摸一张牌。',
			daoshu:'盗书',
			daoshu_info:'出牌阶段，你可以选择一个花色并获得一名其他角色的一张手牌。若此牌花色与你选择的相同，则你对其造成1点伤害。否则你须交给其一张与此牌花色不同的手牌（没有则展示手牌），且本阶段内不能再发动〖盗书〗',

			xinshanjia:"缮甲",
			xinshanjia_info:"出牌阶段开始时，你可以摸三张牌，然后弃置3-X张牌(X为你本局游戏内不因使用而失去过的装备牌的数目且至多为3)。若你没有以此法弃置基本牌或锦囊牌，则你可以视为使用了一张无距离限制且不计入出牌阶段使用次数的【杀】。",
			"new_meibu":"魅步",
			"new_meibu_info":"其他角色的出牌阶段开始时，若你在其攻击范围内，你可以弃置一张牌，令该角色于本回合内获得技能〖止息〗。若你以此法弃置的牌不是【杀】或黑色锦囊牌，则本回合其与你的距离视为1。",
			"new_mumu":"穆穆",
			"new_mumu_info":"出牌阶段开始时，你可以选择一项：1.弃置一名其他角色装备区里的一张牌；2.获得一名角色装备区里的一张防具牌，若如此做，你本回合不能使用【杀】。",
			"new_zhixi":"止息",
			"new_zhixi_info":"锁定技，出牌阶段，你至多可使用X张牌，你使用了锦囊牌后不能再使用牌（X为你的体力值）。",
			"new_mumu2":"穆穆",
			"new_mumu2_info":"锁定技，你不能使用【杀】。",
			new_xingwu:"星舞",
			new_xingwu_info:"弃牌阶段开始时，你可以将一张牌置于武将牌上，称为“舞”。然后你可以选择一项：①将三张“舞”置入弃牌堆；②弃置两张手牌并将武将牌翻面。若如此做，你选择一名角色，该角色弃置其装备区的所有牌并受到2点伤害（若为女性，则改为1点）。",
			"new_luoyan":"落雁",
			"new_luoyan_info":"锁定技。若你的武将牌上有“舞”，则你视为拥有技能〖天香〗和〖流离〗。",
			"new_luoyan_tianxiang":"天香",
			"new_luoyan_tianxiang_info":"",
			"new_luoyan_liuli":"流离",
			"new_luoyan_liuli_info":"",
			ol_shichou:"誓仇",
			ol_shichou_info:"当你使用【杀】时，你可以令至多X名角色也成为此【杀】的目标。此牌结算结束后，若你未因【杀】造成过伤害，则你获得此【杀】（X为你已损失的体力值且至少为1。每回合限获得三次）",
			"zhenwei_three":"镇卫",
			"zhenwei_three_info":"锁定技，敌方角色至己方其他角色的距离+1。",
			"huanshi_three":"缓释",
			"huanshi_three_info":"一名友方角色的判定牌生效前，你可打出一张牌代替之。",
			zhengfu:"征服",
			"zhengfu_info":"当你使用【杀】指定目标时，你可以选择一种牌的类别，然后除非目标角色交给你一种该类别的牌，否则其不能闪避此【杀】。",
			
			yizan:"翊赞",
			yizan_info:"你可以将两张牌（其中至少一张是基本牌）当任意基本牌牌使用",
			yizan0:"翊赞",
			yizan0_info:"你可以将两张牌（其中至少一张是基本牌）当任意基本牌牌使用",
			yizan1:"翊赞",
			yizan1_info:"你可以将两张牌（其中至少一张是基本牌）当【闪】打出",
			yizan2:"翊赞",
			yizan2_info:"你可以将一张基本牌当任意基本牌牌使用",
			yizan3:"翊赞",
			yizan3_info:"你可以将一张基本牌当【闪】打出 ",
			yizan5:"翊赞",
			yizan5_info:"你可以将两张牌（其中至少一张是基本牌）当【杀】打出",
			yizan6:"翊赞",
			yizan6_info:"你可以将一张基本牌当【杀】打出",
			longyuan:"龙渊",
			longyuan_info:"<span class=greentext>觉醒技</span> 当你使用或打出基本牌时，若你已经已累计发动过3次【翊赞】，你将【翊赞】改为“你可以将一张基本牌当任意基本牌牌使用或打出”。",
			wuniang:"武娘",
			wuniang_info:"你使用或打出【杀】时，你可以获得一名其他角色的一张牌，然后该角色摸一张牌；若“关索”在场，你可令“关索”也摸一张牌",
			zhennan:"镇南",
			zhennan_info:"当你成为【南蛮入侵】的目标时，你可令一名其他角色随机受到一至三点伤害",
			xushen:"许身",
			xushen_info:"当其他男性角色令你脱离濒死状态时，若“关索”不在场，其可以选择是否用“关索”替换其武将牌，然后你回复一点体力并获得技能【镇南】",
			
			wanwei:'挽危',
			wanwei_info:'当你因被其他角色获得或弃置而失去牌时，你可以改为自己选择失去的牌。',
			gzjili:'蒺藜',
			gzjili_info:'当你于一回合内使用或打出第X张牌时，你可以摸X张牌（X为你的攻击范围）。',
			xiongsuan:'凶算',
			xiongsuan_info:'限定技，出牌阶段，你可以弃置一张手牌并选择一名角色，对其造成1点伤害，然后你摸三张牌。若该角色有已发动的限定技，则你选择其中一个限定技。此回合结束后，视为该限定技未发动过。',
			diaodu:"调度",
			diaodu_info:"当你使用装备牌时，你可以摸一张牌；出牌阶段开始时，你可以获得一名其他角色装备区里的一张牌，然后你可以将此牌交给另一名角色。",
			diancai:'典财',
			diancai_info:'其他角色的出牌阶段结束时，若你于此阶段失去了X张或更多的牌，则你可以将手牌摸至体力上限。（X为你的体力值）',
			zhengbi:'征辟',
			zhengbi_info:'出牌阶段开始时，你可以选择一项：选择一名未受伤的其他角色，你对其使用的牌无距离限制且不计入使用次数直到回合结束；或将一张基本牌交给一名其他角色，然后其交给你一张非基本牌或两张基本牌。',
			fengying:'奉迎',
			fengying_info:'限定技，出牌阶段，你可以弃置所有手牌。若如此做，你可以令等量的角色将手牌摸至X张(X为其体力上限且至多为5)。然后，你结束出牌阶段，并在当前回合结束后进行一个新的回合。',
			
			qingzhong:'清忠',
			qingzhongx:'清忠',
			qingzhongx_info:'出牌阶段开始时，你可以摸两张牌，若如此做，此阶段结束时，你与手牌数最少的角色交换手牌。',
			weijing:'卫境',
			weijing_info:'每轮限一次，当你需要使用【杀】或【闪】时，你可以视为使用一张【杀】或【闪】。',
			zishu:'自书',
			zishu_info:'锁定技，你的回合外，你获得的牌均会在当前回合结束后置入弃牌堆；你的回合内，当你不因〖自书〗而获得牌时，你摸一张牌。',
			yingyuan:'应援',
			yingyuan_info:'当你于回合内使用的牌结算完成后，你可以将其交给一名其他角色（相同牌名的牌每回合限一次）。',
			xinyingyuan:'应援',
			xinyingyuan_info:'当你于回合内使用一张牌后，你可以令一名其他角色从牌堆获得一张与该牌类型相同的牌（每种类型的牌每回合限一次）。',
			qianya:'谦雅',
			qianya_info:'当你成为锦囊牌的目标后，你可以将任意张手牌交给一名其他角色。',
			shuimeng:'说盟',
			shuimeng_info:'出牌阶段结束时，你可以与一名角色拼点，若你赢，视为你使用【无中生有】；若你没赢，视为其对你使用【过河拆桥】。',
			xianfu:'先辅',
			xianfu2:'先辅',
			xianfu2_bg:'辅',
			xianfu_info:'锁定技，游戏开始时，你选择一名其他角色，当其受到伤害后，你受到等量的伤害，当其回复体力后，你回复等量的体力。',
			chouce:'筹策',
			chouce_info:'当你受到1点伤害后，你可以判定，若结果为：黑色，你弃置一名角色区域里的一张牌；红色，你选择一名角色，其摸一张牌，若其是〖先辅〗选择的角色，改为其摸两张牌。',
			fuqi:'伏骑',
			fuqi_info:'锁定技，当你使用牌时，你令所有与你距离为1的其他角色不能使用或打出牌响应此牌。',
			jiaozi:'骄恣',
			jiaozi_info:'锁定技，若你的手牌数为全场唯一最多，则当你造成或受到伤害时，此伤害+1。',
			wy_meirenji:'美人计',
			wy_meirenji_info:'出牌阶段，对一名有手牌的其他男性角色使用。每名女性角色各获得其一张手牌并将一张手牌交给你，然后比较你与其的手牌数，手牌少的角色对手牌多的角色造成1点伤害。',
			wy_xiaolicangdao:'笑里藏刀',
			wy_xiaolicangdao_info:'出牌阶段，对一名其他角色使用。该角色摸X张牌（X为其已损失的体力值且至多为5），然后你对其造成1点伤害。',
			weikui:'伪溃',
			weikui2:'伪溃',
			weikui_info:'出牌阶段限一次，你可以失去1点体力并选择一名有手牌的其他角色，你观看其手牌：若其手牌中有【闪】，则视为你对其使用【杀】，且本回合你计算与其的距离视为1；若其手牌中没有【闪】，你弃置其中一张牌。',
			lizhan:'励战',
			lizhan_info:'结束阶段，你可以令任意名已受伤的角色摸一张牌。',
			wylianji:'连计',
			wylianji_info:'出牌阶段限一次，你可以展示一张【杀】或黑色锦囊牌，并令一名其他角色将牌堆中的随机一张武器牌置入装备区（可替换原装备）。然后该角色选择一项：1.对除你以外的角色使用该牌，并将装备区里的武器牌交给该牌的一个目标角色；2.令你对其使用此牌，然后获得此牌，并将装备区内的武器牌交给你。',
			// from here
			moucheng:'谋逞',
			moucheng_info:'觉醒技，当其他角色使用因〖连计〗交给其的牌累计造成伤害达到3点后，你失去技能〖连计〗，然后获得技能〖矜功〗',
			jingong:'矜功',
			jingong2:'矜功',
			jingong_backup:'矜功',
			jingong_info:'出牌阶段限一次，你可以将一张装备牌或【杀】当做一张随机锦囊牌使用（三选一，其中一张为【美人计】或【笑里藏刀】），然后本回合的结束阶段，若你于本回合内未造成过伤害，你失去1点体力',
			fenyue:'奋钺',
			fenyue2:'奋钺',
			fenyue2_bg:'钺',
			fenyue_info:'出牌阶段限X次，你可以与一名角色拼点，若你赢，你选择一项：1.令其不能使用或打出手牌直到回合结束；2.视为你对其使用了【杀】（不计入次数限制）。若你没赢，你结束出牌阶段。（X为存活的忠臣数）',
			
			zfengshi:'锋矢',
			zfengshi_info:'当你使用【杀】指定目标后，你可以令目标弃置装备区内的一张牌。',
			chuanxin:'穿心',
			chuanxin_info:'当你于出牌阶段内使用【杀】或【决斗】对目标角色造成伤害时，你可以防止此伤害。若如此做，该角色选择一项：1.弃置装备区里的所有牌，若如此做，其失去1点体力；2.随机移除主武将牌上的一个技能。',
			chuanxin_info_guozhan:'当你于出牌阶段内使用【杀】或【决斗】对目标角色造成伤害时，若其与你势力不同且有副将，你可以防止此伤害。若如此做，该角色选择一项：1.弃置装备区里的所有牌，若如此做，其失去1点体力；2.移除副将。',
			hengjiang:'横江',
			hengjiang2:'横江',
			hengjiang_info:'当你受到1点伤害后，你可以令当前回合角色本回合的手牌上限-1。然后若其弃牌阶段内没有弃牌，则你摸一张牌。',
			rehengjiang:'横江',
			rehengjiang2:'横江',
			rehengjiang_info:'当你受到1点伤害后，你可以令当前回合角色本回合的手牌上限-1。然后若其弃牌阶段内没有弃牌，则你摸X张牌（X为你本回合内对其发动过〖横江〗的次数）。',
			shuangren:'双刃',
			shuangren_info:'出牌阶段开始时，你可以与一名角色拼点。若你赢，你视为对任意一名角色使用一张【杀】（不计入出牌阶段的次数限制）；若你没赢，你本回合内不能对其他角色使用牌。',
			shuangren_info_guozhan:'出牌阶段开始时，你可以与一名角色拼点。若你赢，你视为对其或与其势力相同的另一名角色使用一张【杀】（不计入出牌阶段的次数限制）；若你没赢，你本回合内不能对其他角色使用牌。',
			xiashu:'下书',
			xiashu_info:'出牌阶段开始时，你可以将所有手牌交给一名其他角色，然后该角色亮出任意数量的手牌（至少一张）。你选择一项：1.获得其亮出的手牌；2.获得其未亮出的手牌。',
			kuanshi:'宽释',
			kuanshi2:'宽释',
			kuanshi_info:'结束阶段，你可以选择一名角色。直到你的下回合开始，该角色第一次受到大于1的伤害时，防止此伤害，然后你跳过下个回合的摸牌阶段。',
			bingzheng:'秉正',
			bingzheng_info:'出牌阶段结束时，你可以令手牌数不等于体力值的一名角色弃置一张手牌或摸一张牌。然后若其手牌数等于体力值，你摸一张牌，且可以交给该角色一张牌。',
			sheyan:'舍宴',
			sheyan_info:'当你成为普通锦囊牌的目标时（【借刀杀人】等带有指向目标的锦囊除外），你可以为此牌增加一个目标或令其对其中一个目标无效。（有效目标数至少为一）',
			fuman:'抚蛮',
			fuman2:'抚蛮',
			fuman_info:'出牌阶段每名角色限一次，你可以将一张手牌交给一名其他角色并标记为“抚蛮”且“抚蛮”牌的牌名视为【杀】。然后当一名角色使用“抚蛮”牌结算结束后，你摸一张牌。若此牌造成过伤害，则改为摸两张牌。',
			qizhou:'绮胄',
			qizhou_info:'锁定技，你根据装备区里牌的花色数获得以下技能：1种或以上：〖马术〗；2种或以上：〖英姿〗；3种或以上：〖短兵〗；4种：〖奋威〗。',
			shanxi:'闪袭',
			shanxi_info:'出牌阶段限一次，你可以弃置一张红色基本牌，然后弃置攻击范围内的一名其他角色的一张牌。若弃置的牌是【闪】，你观看其手牌，若弃置的不是【闪】，其观看你的手牌。',
			duanbing:'短兵',
			duanbing_info:'当你使用【杀】选择目标后，你可以令一名距离为1的其他角色也成为此牌的目标。',
			fanghun:'芳魂',
			fanghun_info:'当你使用【杀】造成伤害或受到【杀】的伤害后，你获得X个“梅影”标记（X为伤害点数）；你可以移去1个“梅影”标记来发动〖龙胆〗并摸一张牌。',
			refanghun:'芳魂',
			refanghun_info:'当你使用【杀】或成为【杀】的目标后，你获得1个“梅影”标记；你可以移去1个“梅影”标记来发动〖龙胆〗并摸一张牌。',
			fanghun_sha:'龙胆',
			fuhan:'扶汉',
			fuhan_info:'限定技，回合开始时，你可以移去所有“梅影”标记并摸等量的牌，随机观看五名未登场的蜀势力角色，将武将牌替换为其中一名角色，并将体力上限数调整为本局游戏中移去“梅影”标记的数量（至少为2，至多为8），然后回复1点体力。',
			refuhan:'扶汉',
			refuhan_info:'限定技，回合开始时，你可以移去所有"梅影"标记并摸等量的牌，然后从X张蜀势力武将牌中选择并获得至多两个技能（限定技、觉醒技、隐匿技、使命技、主公技除外）。若此时你是体力值最低的角色，你回复1点体力（X为场上角色数，且X∈[4,+∞)）。',
			yjixi:'觊玺',
			yjixi_info:'觉醒技，结束阶段，若你连续三回合没有因〖庸肆〗而失去过体力，则你增加1点体力上限并回复1点体力，然后选择一项：获得技能〖妄尊〗；摸两张牌并获得当前主公的主公技。',
			xinyongsi:'庸肆',
			xinyongsi1:'庸肆',
			xinyongsi2:'庸肆',
			xinyongsi_info:'锁定技，摸牌阶段，你令额定摸牌数改为X（X为势力数）；弃牌阶段开始时，你选择一项：1.弃置一张牌；2.失去1点体力。',
			xiehui:'黠慧',
			xiehui2:'黠慧',
			xiehui_info:'锁定技，你的黑色牌不计入手牌上限；其他角色获得你的黑色牌时，其不能使用、打出、弃置这些牌直到其体力值减少为止。',
			lianzhu:'连诛',
			lianzhu_info:'出牌阶段限一次，你可以展示并交给一名其他角色一张牌，若此牌为黑色，其选择一项：1.你摸两张牌；2.弃置两张牌',
			shanjia:'缮甲',
			shanjia_info:'出牌阶段开始时，你可以摸X张牌，然后弃置等量的牌。若你以此法弃置了装备区内的牌，则你可以视为使用一张【杀】。（X为你于本局游戏内使用过的装备牌数且最大为7）',
			tuifeng:'推锋',
			tuifeng2:'推锋',
			tuifeng_info:'1.当你受到1点伤害后，你可以将一张牌置于武将牌上，称为“锋”。2.准备阶段开始时，若你的武将牌上有“锋”，你移去所有“锋”，摸2X张牌，然后你于此回合的出牌阶段内使用【杀】的次数上限+X。（X为你此次移去的“锋”数）',
			ziyuan:'资援',
			ziyuan_info:'出牌阶段限一次，你可以将任意张点数之和为13的手牌交给一名其他角色，然后该角色回复1点体力。',
			jugu:'巨贾',
			jugu_info:'锁定技，1.你的手牌上限+X。2.游戏开始时，你摸X张牌（X为你的体力上限）',
			hongde:'弘德',
			hongde_info:'当你一次获得或失去至少两张牌后，你可以令一名其他角色摸一张牌。',
			dingpan:'定叛',
			dingpan_info_identity:'出牌阶段限X次，你可以令一名装备区里有牌的角色摸一张牌，然后其选择一项：1.令你弃置其装备区里的一张牌；2.获得其装备区里的所有牌，若如此做，你对其造成1点伤害。（X为场上存活的反贼数）',
			dingpan_info_versus:'出牌阶段限X次，你可以令一名装备区里有牌的角色摸一张牌，然后其选择一项：1.令你弃置其装备区里的一张牌；2.获得其装备区里的所有牌，若如此做，你对其造成1点伤害。（X为场上存活的敌方角色数）',
			dingpan_info:'出牌阶段限一次，你可以令一名装备区里有牌的角色摸一张牌，然后其选择一项：1.令你弃置其装备区里的一张牌；2.获得其装备区里的所有牌，若如此做，你对其造成1点伤害。',
			weidi:'伪帝',
			weidi_info:'锁定技，你视为拥有当前主公的主公技。',
			juesi:'决死',
			juesi_info:'出牌阶段，你可以弃置一张【杀】并选择攻击范围内的一名有牌的其他角色，该角色弃置一张牌，然后若弃置的牌不是【杀】且你的体力值不大于该角色，你视为对其使用【决斗】。',
			zhenlue:'缜略',
			zhenlue_info:'锁定技，你使用的普通锦囊牌不能被【无懈可击】响应；你不能成为延时锦囊牌的目标。',
			jianshu:'间书',
			jianshu_info:'限定技，出牌阶段，你可以将一张黑色手牌交给一名其他角色，并选择另一名其他角色，然后令这两名角色拼点。赢的角色弃置两张牌，没赢的角色失去一点体力。',
			yongdi:'拥嫡',
			yongdi_info:'限定技，准备阶段开始时，你可令一名其他男性角色增加一点体力上限并回复1点体力，然后若该角色的武将牌上有主公技且其不为主公，其获得此主公技。',
			regushe:'鼓舌',
			regushe_info:'出牌阶段，若X小于7，则你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，没赢的角色选择一项：1.弃置一张牌；2.令你摸一张牌。若你没赢，你获得一个“饶舌”标记。当你获得第7个“饶舌”标记时，你死亡。（X为你的“饶舌”标记数与本回合因“鼓舌”拼点而胜利的次数之和）',
			rejici:'激词',
			rejici2:'激词',
			rejici_info:'锁定技，当你展示拼点牌后，若此牌的点数不大于X，则你令此牌点数+X，并获得此次拼点中原点数最大的拼点牌。当你死亡时，你令杀死你的角色弃置7-X张牌并失去1点体力。（X为你的“饶舌”标记数）',
			gushe:'鼓舌',
			gushe_bg:'舌',
			gushe_info:'出牌阶段限一次，你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，没赢的角色选择一项：1.弃置一张牌；2.令你摸一张牌。若你没赢，你获得一个“饶舌”标记。当你获得第7个“饶舌”标记时，你死亡。',
			jici:'激词',
			jici_info:'当你因发动〖鼓舌〗而扣置的拼点牌亮出后，若点数小于X，你可令点数+X；若点数等于X，你可令你本回合发动〖鼓舌〗的次数上限+1。（X为你“饶舌”标记的数量）',
			shefu:'设伏',
			shefu2:'设伏',
			shefu_bg:'伏',
			shefu_info:'结束阶段开始时，你可以将一张牌移出游戏，称为「伏兵」。并为「伏兵」记录一个基本牌或锦囊牌的名称（须与其他「伏兵」记录的名称均不同）。你的回合外，当有其他角色使用与你记录的「伏兵」牌名相同的手牌时，你可以取消此牌的所有目标，然后移去该「伏兵」。若此时处于使用者的回合内，则你令使用者当前的所有非Charlotte技失效直至回合结束。',
			benyu:'贲育',
			benyu2:'贲育',
			benyu_info:'当你受到伤害后，你可选择：①将手牌摸至与伤害来源手牌数相同（至多摸至5张）；②弃置大于伤害来源手牌数的牌，然后对其造成1点伤害。',
			zhidao:'雉盗',
			zhidao_info:'锁定技，当你于你的回合内第一次对区域里有牌的其他角色造成伤害后，你获得其手牌、装备区和判定区里的各一张牌，然后直到回合结束，其他角色不能被选择为你使用牌的目标。',
			jili:'寄篱',
			jili_info:'锁定技，当一名其他角色成为红色基本牌或红色普通锦囊牌的目标时，若其与你的距离为1且你既不是此牌的使用者也不是目标，你也成为此牌的目标。',
			luanzhan:'乱战',
			luanzhan_info:'你使用【杀】或黑色普通锦囊牌可以额外选择X名角色为目标；当你使用【杀】或黑色普通锦囊牌指定目标后，若此牌的目标角色数小于X，则X减至0。（X为你于本局游戏内造成过伤害的次数）',
			zhengnan:'征南',
			zhengnan_info:'其他角色死亡后，你可以摸三张牌并获得下列技能中的任意一个：〖武圣〗、 〖当先〗和〖制蛮〗。',
			xinzhengnan:'征南',
			xinzhengnan_info:'当一名角色进入濒死状态时，若你未因其发动过〖征南〗，则你回复1点体力并摸一张牌并获得下列技能中的任意一个：〖武圣〗、 〖当先〗和〖制蛮〗（若技能全部拥有则改为摸三张牌。你以此法获得的〖当先〗结算时视为已发动过〖伏枥〗）。',
			xiefang:'撷芳',
			xiefang_info:'锁定技，你计算与其他角色的距离时-X。（X为女性角色数）',
			qizhi:'奇制',
			qizhi_info:'当你于回合内使用基本牌或锦囊牌指定目标后，你可以弃置不是此牌目标的一名角色的一张牌。若如此做，其摸一张牌。',
			jinqu:'进趋',
			jinqu_info:'结束阶段开始时，你可以摸两张牌，若如此做，你将手牌弃置至X张。（X为你于此回合发动过〖奇制〗的次数）',
			jiqiao:'机巧',
			jiqiao_info:'出牌阶段开始时，你可以弃置任意张装备牌，然后亮出牌堆顶两倍数量的牌并获得其中的非装备牌。',
			linglong:'玲珑',
			linglong_info:'锁定技，若你的装备区没有武器牌，则你使用【杀】的次数上限+1；若你的装备区没有防具牌，视为你装备着【八卦阵】；若你的装备区没有坐骑牌，你的手牌上限+1；若你的装备区没有宝物牌，则你视为拥有技能〖奇才〗。',
			zhenwei:'镇卫',
			zhenwei2:'镇卫',
			zhenwei_info:'当一名其他角色成为【杀】或黑色锦囊牌的目标时（使用者不是你），若该角色的体力值小于你且此牌的目标角色数为1，你可以弃置一张牌。若如此做，你选择一项：1、摸一张牌，然后将此【杀】或黑色锦囊牌转移给你；2、令此【杀】或黑色锦囊牌无效，然后将此【杀】或黑色锦囊牌置于使用者的武将牌旁，若如此做，当前回合结束后，使用者获得使用者武将牌旁的这些牌。',
			xingwu:'星舞',
			xingwu_info:'弃牌阶段开始时，你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上：若你有至少三张“星舞”牌，你移去“星舞”牌并选择一名男性角色，该角色受到2点伤害并弃置其装备区的所有牌',
			luoyan:'落雁',
			luoyan_info:'锁定技。若你的武将牌上有“星舞牌”，你拥有“天香”和“流离”',
			yinbing:'引兵',
			yinbing_info:'结束阶段开始时，你可以将至少一张非基本牌置于武将牌上。每当你受到【杀】或【决斗】的伤害后，你移去一张「引兵」牌。',
			juedi:'绝地',
			juedi_info:'锁定技，准备阶段，若你的武将牌上有「引兵」牌，你选择一项：1.移去「引兵」牌，将手牌补至体力上限数；2.将「引兵」牌交给一名体力值不大于你的其他角色，其回复1点体力并摸等量的牌。',
			kuangfu:'狂斧',
			kuangfu_info:'当你使用【杀】造成伤害时，你可以选择一项：弃置其装备区内的一张牌，或将其装备区内的一张牌移动到你的装备区内。',
			xintan:'心惔',
			xintan_info:'出牌阶段限一次，你可以移去两张「焚」并选择一名角色，该角色失去一点体力。',
			fentian:'焚天',
			fentian_info:'锁定技，结束阶段开始时，若你的手牌数少于体力值，你须选择一名攻击范围内的角色，将其一张牌置于你的武将牌上，称为「焚」。锁定技，你的攻击范围+X（X为「焚」的数量）',
			zhiri:'炙日',
			zhiri_info:'觉醒技，准备阶段开始时，若你的「焚」的数量不小于3，你减1点体力上限，然后获得技能〖心惔〗',
			meibu:'魅步',
			meibu_info:'其他角色的出牌阶段开始时，若你不在其攻击范围内，你可以令该角色的锦囊牌均视为【杀】，直到该角色以此法使用了一张【杀】或回合结束。若如此做，则直到回合结束，视为你在其攻击范围内。',
			mumu:'穆穆',
			mumu_info:'出牌阶段限一次，你可以弃置一张【杀】或黑色锦囊牌，然后选择一项：弃置场上的一张武器牌，然后摸一张牌；或将场上的一张防具牌移动到你的装备区里（可替换原防具）。',
			zhanyi:'战意',
			zhanyi_basic_sha:'战杀',
			zhanyi_basic_jiu:'战酒',
			zhanyi_basic_tao:'战桃',
			zhanyi_info:'出牌阶段限一次，你可以弃置一张牌并失去1点体力，然后根据你弃置的牌获得以下效果直到回合结束：基本牌，你可以将一张基本牌当作【杀】、【酒】或【桃】使用；锦囊牌，摸两张牌且你使用的牌无距离限制；装备牌，你使用【杀】指定目标角色后，其弃置两张牌。',
			nuzhan:'怒斩',
			nuzhan2:'怒斩',
			nuzhan_info:'锁定技，你使用的由一张锦囊牌转化的【杀】不计入出牌阶段的次数限制；锁定技，你使用的由一张装备牌转化的【杀】的伤害值基数+1',
			danji:'单骑',
			danji_info:'觉醒技，准备阶段开始时，若你的手牌数大于你的体力值且本局游戏的主公不为刘备，你减1点体力上限，然后获得〖马术〗和〖怒斩〗',
			jieyuan:'竭缘',
			jieyuan_more:'竭缘',
			jieyuan_less:'竭缘',
			jieyuan_info:'当你对一名其他角色造成伤害时，若其体力值大于或等于你的体力值，你可弃置一张黑色手牌，令此伤害+1；当你受到一名其他角色造成的伤害时，若其体力值大于或等于你的体力值，你可弃置一张红色手牌，令此伤害-1。',
			fenxin:'焚心',
			fenxin_old:'焚心',
			fenxin_info:'锁定技，一名其他角色死亡后，若其身份为：忠臣，你本局内发动〖竭缘〗减少伤害时无视体力值限制；反贼，你本局内发动〖竭缘〗增加伤害时无视体力值限制；内奸，你本局内选择发动〖竭缘〗的牌时无颜色和区域限制。',
			fenxin_old_info:'限定技，当你杀死一名非主公角色时，你可以与其交换未翻开的身份牌。（你的身份为主公时不能发动此技能）',
			qingyi:'轻逸',
			qingyi1:'轻逸',
			qingyi2:'轻逸',
			qingyi_info:'你可以跳过判定阶段和摸牌阶段。若如此做，视为对一名角色使用了一张无距离限制的【杀】。',
			xiandeng:'先登',
			xiandeng_info:'锁定技，出牌阶段，你使用的第一张【杀】不计入次数且无距离限制。',
			shulv:'熟虑',
			shulv_info:'出牌阶段限一次，若你的手牌数大于体力值，则你可以弃置一张牌并摸一张牌。',
			xisheng:'牺牲',
			xisheng_info:'每名其他角色的回合限一次，你可以将两张牌当做【桃】使用。',
			yuhua:'羽化',
			yuhua_info:'锁定技。①你的非基本牌不计入手牌上限。②准备阶段和结束阶段开始时，你卜算1。',
			qirang:'祈禳',
			qirang_info:'当有装备牌进入你的装备区时，你可获得牌堆中的一张锦囊牌。若此牌为：普通锦囊牌，则当你使用此“祈禳”牌选择唯一目标后，可为此牌增加一个目标；延时锦囊牌，则你下回合发动〖羽化〗时的卜算量+1（至多为5）。',
			biluan:'避乱',
			biluan_info:'摸牌阶段开始时，若有与你距离不大于1的其他角色，你可以放弃摸牌。若如此做，本局内其他角色计算与你的距离时+X。（X为势力数）',
			lixia:'礼下',
			lixia_info:'锁定技，其他角色的结束阶段开始时，若你不在其攻击范围内，你摸一张牌或令其摸一张牌。本局内其他角色计算与你的距离时-1。',
			rebiluan:'避乱',
			rebiluan2:'避乱',
			rebiluan_info:'结束阶段开始时，若有与你距离不大于1的其他角色，你可以弃置一张牌。若如此做，本局内其他角色计算与你的距离时+X。（X为场上角色数且至多为4）',
			relixia:'礼下',
			relixia_info:'锁定技，其他角色的结束阶段开始时，若你不在其攻击范围内，你选择一至两项：1.摸一张牌；2.其摸两张牌；3.其回复1点体力。本局内其他角色计算与你的距离时-X（X为你选择的选项数）。',
			yishe:'义舍',
			yishe_bg:'米',
			yishe_info:'结束阶段开始时，若你的武将牌上没有「米」，则你可以摸两张牌。若如此做，你将两张牌置于武将牌上，称为「米」；当有「米」移至其他区域后，若你的武将牌上没有「米」，则你回复1点体力。',
			bushi:'布施',
			midao:'米道',
			bushi_info:'当你受到1点伤害后，或其他角色受到你造成的1点伤害后，受到伤害的角色可以获得你的一张「米」',
			midao_info:'一名角色的判定牌生效前，你可以打出一张「米」代替之。',
			fengpo:'凤魄',
			fengpo_info:'每种牌名限一次，当你于出牌阶段内第一次使用【杀】或【决斗】指定目标后，若目标角色数为1，你可以选择一项：1.摸X张牌；2.令此牌的伤害值基数+X。（X为其手牌中♦牌的数量）',
			chenqing:'陈情',
			chenqing_info:'每轮限一次，当一名角色处于濒死状态时，你可以令另一名其他角色摸四张牌，然后其弃置四张牌。若其以此法弃置的四张牌花色各不相同，则视为该角色对濒死的角色使用一张【桃】。',
			mozhi:'默识',
			mozhi_info:'结束阶段开始时，你可以将一张手牌当作你本回合出牌阶段内使用的第一张基本或普通锦囊牌使用。然后，你可以将一张手牌当做你本回合出牌阶段内使用的第二张基本或普通锦囊牌使用。（你不能通过此技能使用【酒】）',
			ranshang:'燃殇',
			ranshang2:'燃殇',
			ranshang_info:'锁定技，当你受到1点火焰伤害后，你获得1枚“燃”标记；结束阶段开始时，你失去X点体力。若X大于2，则你减2点体力上限并摸两张牌。（X为“燃”标记的数量）',
			hanyong:'悍勇',
			hanyong_info:'当你使用【南蛮入侵】或【万箭齐发】或黑桃普通【杀】时，若你已受伤，则你可以令此牌的伤害值基数+1。然后若你的体力值不小于游戏轮数，则你获得一枚“燃”标记。',

			yicong:'义从',
			yongsi:'庸肆',
			yongsi1:'庸肆',
			yongsi2:'庸肆',
			bifa:'笔伐',
			bifa2:'笔伐',
			songci:'颂词',
			songci_draw:'颂词',
			baobian:'豹变',
			lihun:'离魂',
			chongzhen:'冲阵',
			chongzhen1:'冲阵',
			chongzhen2:'冲阵',
			yuanhu:'援护',
			tianming:'天命',
			mizhao:'密诏',
			duwu:'黩武',
			duwu3:'黩武',
			mingzhe:'明哲',
			huanshi:'缓释',
			hongyuan:'弘援',
			aocai:'傲才',
			aocai2:'傲才',
			aocai2_backup:'傲才',
			aocai3:'傲才',
			huxiao:'虎啸',
			huxiao3:'虎啸',
			xueji:'雪恨',
			wuji:'武继',
			shushen:'淑慎',
			shenzhi:'神智',
			xiongyi:'雄异',
			junbing:'郡兵',
			junbing2:'郡兵',
			quji:'去疾',
			sijian:'死谏',
			suishi:'随势',
			suishi2:'随势',
			xiaoguo:'骁果',
			duanxie:'断绁',
			fenming:'奋命',
			guixiu:'闺秀',
			cunsi:'存嗣',
			yongjue:'勇决',
			hengzheng:'横征',
			shengxi:'生息',
			shoucheng:'守成',
			shangyi:'尚义',
			zniaoxiang:'鸟翔',
			zhendu:'鸩毒',
			qiluan:'戚乱',
			qiluan2:'戚乱',
			qiluan3:'戚乱',
			shenxian:'甚贤',
			oldshenxian:'甚贤',
			qiangwu:'枪舞',
			moukui:'谋溃',
			moukui2:'谋溃',
			lirang:'礼让',
			mingshi:'名士',
			liangzhu:'良助',
			kaikang:'慷忾',
			wangzun:'妄尊',
			tongji:'同疾',
			kuiwei:'溃围',
			kuiwei2:'溃围',
			yanzheng:'严整',
			zhoufu:'咒缚',
			zhoufu2:'咒缚',
			zhoufu3:'咒缚',
			yingbin:'影兵',
			reyingbing:'影兵',
			rezhoufu:'咒缚',
			rezhoufu2:'咒缚',
			fenxun:'奋迅',
			fenxun2:'奋迅',
			spmengjin:'猛进',
			xiemu:'协穆',
			xiemu2:'协穆',
			oldxiemu:'协穆',
			naman:'纳蛮',
			taichen:'抬榇',
			jilei:'鸡肋',
			jilei2:'鸡肋',
			jilei2_bg:'肋',
			yawang:'雅望',
			xunzhi:'殉志',
			fanxiang:'返乡',
			fanxiang_info:'觉醒技，准备阶段开始时，若场上有已受伤且你发动过〖良助〗的选项二的角色，则你加1点体力上限并回复1点体力，失去技能〖良助〗并获得技能〖枭姬〗',
			xunzhi_info:'准备阶段开始时，若你的上家和下家与你的体力值均不相等，你可以失去1点体力。若如此做，你本局内手牌上限+2。',
			yawang_info:'锁定技，摸牌阶段开始时，你改为摸X张牌，然后你于本回合的出牌阶段内至多使用X张牌（X为与你体力值相等的角色数）',
			jilei_info:'当你受到有来源的伤害后，你可以声明一种牌的类别。若如此做，你令伤害来源不能使用、打出或弃置此类别的手牌，直到其下个回合开始。',
			danlao:'啖酪',
			danlao_info:'当你成为一张指定了多个目标的【杀】或普通锦囊牌的目标时，你可以摸一张牌，令此牌对你无效。',
			gongao:'功獒',
			zhuiji:'追击',
			chouhai:'仇海',
			chouhai_info:'锁定技，当你受到伤害时，若你没有手牌，此伤害+1。',
			rechouhai:'仇海',
			rechouhai_info:'锁定技，当你受到渠道为【杀】的伤害时，若你没有手牌，此伤害+1。',
			guiming:'归命',
			guiming_info:'主公技，锁定技，你将残蚀描述中的“已受伤角色”改为“已受伤角色或其他吴势力角色”',
			canshi:'残蚀',
			canshi2:'残蚀',
			canshi_info:'摸牌阶段开始时，你可以改为摸X张牌（X为已受伤的角色数），若如此做，当你于此回合内使用基本牌或锦囊牌时，你弃置一张牌。',
			recanshi:'残蚀',
			recanshi2:'残蚀',
			recanshi_info:'摸牌阶段开始时，你可以多摸X张牌（X为已受伤的角色数），若如此做，当你于此回合内使用【杀】或普通锦囊牌时，你弃置一张牌。',
			zhuiji_info:'锁定技，你与体力值不大于你的角色的距离视为1。',
			kunfen:'困奋',
			kunfen_info:'锁定技，结束阶段开始时，你失去1点体力，然后摸两张牌。',
			fengliang:'逢亮',
			fengliang_info:'觉醒技，当你进入濒死状态时，你减1点体力上限，将体力值回复至2点，获得技能〖挑衅〗并将〖困奋〗改为非锁定技。',
			oldcihuai:'刺槐',
			oldcihuai2:'刺槐',
			oldcihuai_info:'出牌阶段开始时，你可以展示手牌。若其中没有【杀】，则当你于此阶段内手牌数变化之前/有角色死亡之前需要使用【杀】时，你可以使用无对应实体牌的【杀】。',
			cihuai:'刺槐',
			cihuai_info:'出牌阶段开始时，若你的手牌中没有【杀】，则你可以展示你的手牌，视为对一名角色使用一张【杀】。',
			gongao_info:'锁定技，当一名角色死亡后，你增加一点体力上限，回复一点体力。',
			juyi:'举义',
			juyi_info:'觉醒技，准备阶段开始时，若你的体力上限大于存活角色数，你摸等同于体力上限张数的牌，然后获得技能〖崩坏〗和〖威重〗。',
			weizhong:'威重',
			weizhong_info:'锁定技，当你的体力上限增加或减少时，你摸一张牌。若你的手牌数为全场最少，则你改为摸两张牌。',
			taichen_info:'出牌阶段限一次，你可以失去1点体力，视为对一名角色使用一张【杀】。（不计入出牌阶段的使用次数限制）',
			naman_info:'当其他角色打出的【杀】进入弃牌堆时，你可以获得之。',
			xiemu_info:'出牌阶段限一次，你可以弃置一张【杀】并选择一个势力。若如此做，直到你的下回合开始时，当你成为该势力的其他角色使用的黑色牌的目标后，你摸两张牌。',
			oldxiemu_info:'当你成为其他角色使用的黑色牌的目标后，你可以弃置一张【杀】，然后摸两张牌。',
			spmengjin_info:'当你使用【杀】指定目标后，你可以弃置目标角色的一张牌。',
			fenxun_info:'出牌阶段限一次，你可以弃置一张牌并选择一名其他角色，你于本回合内至其的距离视为1。',
			rezhoufu_info:'出牌阶段限一次，你可以用一张牌对一名其他角色施“咒”。当有“咒”的角色判定时，将“咒”作为判定牌；一名角色的回合结束时，你令本回合移除过“咒”的角色各失去1点体力',
			reyingbing_info:'锁定技，有“咒”的角色使用与“咒”颜色相同的牌时，你摸一张牌；若这是你第二次因该“咒”摸牌，则你获得该"咒"。',
			yingbin_info:'锁定技，有“咒”的角色使用与“咒”花色相同的牌时，你摸一张牌；当你因同一名角色的同一张“咒”的效果摸第二张牌时，移去该“咒”。',
			zhoufu_info:'出牌阶段限一次，你可以将一张手牌置于一名没有“咒”的其他角色的武将牌旁，称为“咒”。当有“咒”的角色判定时，其改为将“咒”作为判定牌；一名角色的回合结束时，若有角色于此回合因判定而移除过“咒”，则你令这些角色各失去1点体力。',
			yanzheng_info:'若你的手牌数大于你的体力值，则你可以将你装备区内的牌当作【无懈可击】使用。',
			kuiwei_info:'结束阶段开始时，你可以摸2+X张牌并记录X，然后将你的武将牌翻面（X为场上所有角色装备区内武器牌数目之和）。你的下个摸牌阶段开始时，你弃置X张牌。',
			tongji_info:'锁定技。若你的手牌数大于你的体力值，则攻击范围包含你的其他角色使用【杀】时不能指定你以外的角色为目标。',
			wangzun_info:'其他角色的准备阶段开始时，你可以摸一张牌。若如此做，该角色此回合的手牌上限-1。然后你不能再发动〖妄尊〗直到回合开始。',
			kaikang_info:'当一名角色成为【杀】的目标后，若你至该角色的距离为1，你可以摸一张牌。若如此做，你交给其一张牌并展示之。若为装备牌，该角色可以使用此牌。',
			liangzhu_info:'当一名角色于其出牌阶段内回复体力时，你可以选择一项：1、摸一张牌；2、令该角色摸两张牌。',
			mingshi_info:'当你受到伤害时，若伤害来源的体力值大于你，你可以弃置一张黑色手牌，令伤害值-1。',
			lirang_info:'当你的牌因弃置而置入弃牌堆后，你可以将其中的任意张牌交给其他角色。',
			moukui_info:'当你使用【杀】指定目标后，你可以选择一项：摸一张牌，或弃置其一张牌。若如此做，当此【杀】被【闪】抵消时，目标角色弃置你的一张牌。 ',
			qiangwu_info:'出牌阶段，你可以进行判定。若如此做，直到回合结束，你使用点数小于判定结果的【杀】时不受距离限制，且你使用点数大于判定结果的【杀】时不计入出牌阶段的使用次数限制。',
			shenxian_info:'每名角色的回合限一次，你的回合外，当有其他角色因弃置而失去基本牌时，你可以摸一张牌。',
			oldshenxian_info:'你的回合外，每当有其他角色因弃置而失去基本牌时，你可以摸一张牌。',
			qiluan_info:'一名角色的回合结束时，你可以摸3X+Y张牌。（X为你本回合内杀死过的角色数，Y为本回合内其他角色杀死过的角色数）',
			//qiluan_info_guozhan:'一名角色的回合结束时，若你于回合内杀死过角色，则你可以摸三张牌。',
			zhendu_info:'一名角色的出牌阶段开始时，你可以弃置一张手牌，视为该角色使用了一张【酒】。若该角色不是你，你对其造成一点伤害。',
			//zhendu_info_guozhan:'其他角色的出牌阶段开始时，你可以弃置一张手牌，视为该角色使用了一张【酒】。若如此做，你对其造成一点伤害。',
			shangyi_info:'出牌阶段限一次，你可以观看一名其他角色的手牌，然后弃置其中的一张黑色牌。',
			zniaoxiang_info:'锁定技，当你使用【杀】指定目标后，你令目标角色响应此【杀】所需要使用的【闪】的数目+1。',
			shoucheng_info:'当一名其他角色于其回合外失去手牌时，若其没有手牌，则你可令该角色摸一张牌。',
			shengxi_info:'弃牌阶段开始时，若你本回合内未造成过伤害，则你可以摸两张牌。',
			hengzheng_info:'摸牌阶段开始时，若你的体力值为1或你没有手牌，则你可以放弃摸牌，改为获得每名其他角色区域内的一张牌。',
			cunsi_info:'限定技，出牌阶段，你可以将所有手牌交给一名男性角色。该角色获得技能【勇决】，然后你将武将牌翻面。',
			yongjue_info:'每回合限一次。当其他角色于回合内使用的【杀】结算完成后，若你不是此【杀】的目标角色，则你可以获得之。',
			guixiu_info:'当你成为【杀】的目标后，若你的手牌数小于体力值，则你可以摸一张牌。',
			fenming_info:'结束阶段开始时，若你处于横置状态，你可以弃置所有处于横置状态的角色的各一张牌。',
			duanxie_info:'出牌阶段限一次，你可以令一名其他角色横置，若如此做，你横置。',
			xiaoguo_info:'其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌，然后你摸一张牌；2.受到你对其造成的1点伤害。',
			sijian_info:'当你失去最后的手牌时，你可以弃置一名其他角色的一张牌。',
			suishi_info:'当其他角色进入濒死状态时，伤害来源可以令你摸一张牌；当其他角色死亡时，伤害来源可以令你失去1点体力',
			quji_info:'出牌阶段限一次，你可以弃置X张牌（X为你已损失的体力值），然后令至多X名已受伤的角色各回复1点体力。若你以此法弃置的牌中有黑色牌，你失去一点体力。',
			junbing_info:'一名角色的结束阶段开始时，若其手牌数不大于1，该角色可以摸一张牌。若如此做，该角色将所有手牌交给你，然后你交给其等量的牌。',
			xiongyi_info:'限定技，出牌阶段，你可以选择至多三名角色，这些角色各摸三张牌；若你选择的角色数不超过2，你回复1点体力',
			xiongyi_info_guozhan:'限定技，出牌阶段，你可以令与你势力相同的所有角色各摸三张牌，然后若你的势力是角色最少的势力（或之一），则你回复1点体力。',
			shenzhi_info:'准备阶段开始时，你可以弃置所有手牌。若你以此法弃置的牌数不小于X，你回复1点体力（X为你的体力值）。',
			shushen_info:'当你回复1点体力时，你可以令一名其他角色选择回复1点体力或摸两张牌。',
			wuji_info:'觉醒技，结束阶段开始时，若你于此回合内造成过3点或更多伤害，你加1点体力上限并回复1点体力，失去〖虎啸〗，然后从场上、牌堆或弃牌堆中获得【青龙偃月刀】',
			xueji_info:'出牌阶段限一次，你可以弃置一张红色牌，然后选择至多X名角色，横置这些角色并对其中一名角色造成1点火焰伤害。（X为你已损失的体力值且至少为1）',
			huxiao_info:'锁定技，当你造成火属性伤害时，该角色摸一张牌。然后，你于此回合内对其使用牌没有次数限制。',
			aocai_info:'当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的两张牌（若你没有手牌则改为四张）。若你观看的牌中有此牌，你可以使用打出之。',
			aocai_info_guozhan:'当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的两张牌。若你观看的牌中有此牌，你可以使用打出之。',
			hongyuan_info:'摸牌阶段，你可以少摸一张牌并指定至多两名其他角色。若如此做，这些角色各摸一张牌。',
			hongyuan_info_combat:'摸牌阶段，你可以少摸一张牌。若如此做，其他友方角色各摸一张牌。',
			huanshi_info:'一名角色的判定牌生效前，你可令其观看你的手牌。若如此做，该角色选择你的一张牌，你打出此牌代替之。',
			mingzhe_info:'当你于回合外使用或打出红色牌，或因弃置失去一张红色牌后，你可以摸一张牌。',
			duwu_info:'出牌阶段，你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害（X为该角色的体力值）。若该角色因此法进入濒死状态且存活，则你于濒死状态结算后失去1点体力，且本回合不能再发动〖黩武〗。',
			tianming_info:'当你成为【杀】的目标时，你可以弃置两张牌（不足则全弃，无牌则不弃），然后摸两张牌；若此时全场体力值最多的角色仅有一名且不是你，该角色也可以如此做。',
			mizhao_info:'出牌阶段限一次，你可以将所有手牌交给一名其他角色。若如此做，你令该角色与你指定的另一名有手牌的角色拼点，视为拼点赢的角色对没赢的角色使用一张【杀】。',
			yuanhu_info:'结束阶段开始时，你可以将一张装备牌置于一名角色的装备区里，然后根据此装备牌的类型执行以下对应效果。武器牌：弃置该角色距离1以内的一名角色区域中的一张牌；防具牌：该角色摸一张牌；坐骑牌：该角色回复1点体力。',
			lihun_info:'出牌阶段限一次，你可以弃置一张牌并选择一名其他男性角色。若如此做，你将武将牌翻面并获得其所有手牌。出牌阶段结束时，你交给其X张牌。（X为该角色的体力值）',
			chongzhen_info:'当你因发动〖龙胆〗而使用或打出【杀】或【闪】时，你可以获得对方的一张手牌。',
			bifa_info:'结束阶段开始时，你可以将一张手牌移出游戏并指定一名其他角色。该角色的准备阶段开始时，其观看你移出游戏的牌并选择一项：交给你一张与此牌类型相同的手牌并获得此牌；或将此牌置入弃牌堆，然后失去1点体力。',
			songci_info:'①出牌阶段，你可以选择一名未以此法选择过的角色。若其手牌数：大于其体力值，其弃置两张牌；不大于其体力值，其摸两张牌。②弃牌阶段结束时，若你已对场上所有存活角色发动过〖颂词①〗，则你摸一张牌。',
			yongsi_info:'锁定技，摸牌阶段，你多摸X张牌。弃牌阶段开始时，你弃置X张牌。（X为场上势力数）',
			yicong_info:'锁定技，当你的体力值大于2时，你计算与其他角色的距离时-1；当你的体力值不大于2时，其他角色计算与你的距离时+1。',
			baobian_info:'锁定技，若你的体力值为3或更少，你视为拥有技能〖挑衅〗；若你的体力值为2或更少；你视为拥有技能〖咆哮〗；若你的体力值为1，你视为拥有技能〖神速〗。',
			rebaobian:'豹变',
			rebaobian_info:'锁定技。当你受到伤害后，你获得以下技能中第一个未拥有的技能：〖挑衅〗/〖咆哮〗/〖神速〗。',
			bingzhao:'秉诏',
			bingzhao_info:'主公技，游戏开始时，你选择一个其他势力。当你对该势力的角色发动〖骨疽〗时，其可令你额外摸一张牌。',
			sunshao:'孙邵',
			bizheng:'弼政',
			bizheng_info:'摸牌阶段结束时，你可以令一名其他角色摸两张牌。然后，若你的手牌数大于体力上限，你弃置两张牌。若其的手牌数大于体力上限，其弃置两张牌。',
			yidian:'佚典',
			yidian_info:'当你使用牌选择目标时，若弃牌堆中没有与此牌名称相同的牌，则你可以为此牌增加一个目标（无距离限制）。',
			xinlianji:'连计',
			xinlianji_info:'出牌阶段限一次，你可以弃置一张手牌，令一名角色使用牌堆中的一张随机武器牌。然后其选择一项：对你指定的一名角色使用一张【杀】，或令你将其装备区里的武器牌交给任意角色。',
			xinmoucheng:'谋逞',
			xinmoucheng_info:'觉醒技，准备阶段，若有角色因你发动〖连计〗使用【杀】而造成过伤害，则你失去〖连计〗并获得〖矜功〗。',
			xinjingong:'矜功',
			xinjingong_backup:'矜功',
			xinjingong_info:'出牌阶段限一次，你可以将一张【杀】或装备牌当做三张随机锦囊牌中的一张使用。',
			caiyang:'蔡阳',
			yinka:'印卡',
			zhangling:'张陵',
			zlhuji:'虎骑',
			zlhuji_info:'锁定技，你与其他角色的距离-1，当你于回合外受到伤害后，你可进行判定，若结果为红色，视为你对伤害来源使用一张【杀】（无距离限制）。',
			zlshoufu:'授符',
			zlshoufu2:'授符',
			zlshoufu_info:'出牌阶段限一次，你可摸一张牌，然后将一张手牌置于一名没有【箓】的角色的武将牌上，称为【箓】；其不能使用和打出与【箓】同类型的牌。该角色受到伤害后，或于弃牌阶段弃置至少两张与【箓】同类型的牌后，将【箓】置入弃牌堆。',
			ol_zhangchangpu:'OL张昌蒲',
			olxingshen:'省身',
			olxingshen_info:'当你受到伤害后，你可以随机摸至多两张牌。若如此做，你获得X个“省”，且下一次发动〖严教〗展示牌时移去所有“省”并多展示等量的牌。（X为你已损失的体力值，且你至多拥有6个“省”）',
			caoshuang:'曹爽',
			tuogu:'托孤',
			tuogu_info:'限定技，一名角色死亡时，你可以令其选择其武将牌上的一个技能（主公技，限定技，觉醒技，隐匿技、使命技等特殊技能除外），然后你获得其选择的技能。',
			retuogu:'托孤',
			retuogu_info:'一名角色死亡时，你可以令其选择其武将牌上的一个技能（主公技，限定技，觉醒技，隐匿技、使命技等特殊技能除外），然后你获得其选择的技能并失去上次因〖托孤〗获得的技能。',
			shanzhuan:'擅专',
			shanzhuan_info:'当你对其他角色造成伤害后，若其判定区没有牌，则你你可以将其的一张牌置于其的判定区。若此牌不为延时锦囊牌且此牌为：红色，此牌视为【乐不思蜀】；黑色，此牌视为【兵粮寸断】。回合结束时，若你本回合内未造成伤害，你可摸一张牌。',
			spniluan:'逆乱',
			spniluan_info:'出牌阶段，你可以将一张黑色牌当做【杀】使用。此【杀】使用结算完成后，若你未因此【杀】造成过伤害，则你令此【杀】不计入使用次数。',
			spweiwu:'违忤',
			spweiwu_info:'出牌阶段限一次，你可以将一张红色牌当做【顺手牵羊】对手牌数不小于你的角色使用。',
			spmouzhu:'谋诛',
			spmouzhu_backup:'谋诛',
			spmouzhu_info:'出牌阶段限一次，你可以选择任意名“距离为1”或“体力值等于你”的其他角色，这些角色依次进行以下结算：交给你一张手牌，然后若其手牌数小于你，则其视为对你使用一张【杀】或【决斗】。',
			spyanhuo:'延祸',
			spyanhuo_info:'当你死亡时，你可增加如下全局技能：当有角色使用【杀】时，此【杀】的伤害值基数+1。',
			xiaoxi:'骁袭',
			xiaoxi_info:'当你登场时，你可以视为使用一张【杀】。',
			quyi:'OL麴义',
			wolongfengchu:'卧龙凤雏',
			youlong:'游龙',
			youlong_info:'转换技，阴，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。',
			luanfeng:'鸾凤',
			//luanfeng_info_fullinfo:'限定技，一名角色进入濒死状态时，若其体力上限不小于你，你可令其回复至3点体力，恢复其被废除的装备栏，令其手牌补至6-X张（X为以此法恢复的装备栏数量），重置其因“改写”使用过的牌名。若该角色是你，重置你因“游龙”使用过的牌名。',
			luanfeng_info:'限定技，一名角色进入濒死状态时，若其体力上限不小于你，你可令其回复至3点体力，恢复其被废除的装备栏，令其手牌补至6-X张（X为以此法恢复的装备栏数量）。若该角色是你，重置你因“游龙”使用过的牌名。',
			ol_xinxianying:'辛宪英',
			reluanzhan:'乱战',
			reluanzhan_add:'乱战',
			reluanzhan_remove:'乱战',
			reluanzhan_info:'当你受到或造成伤害后，你获得一个“乱”。当你使用【杀】或黑色普通锦囊牌选择目标后，你可为此牌增加至多X个目标。当你使用这些牌指定第一个目标后，若此牌目标数小于X，则你移去X/2（向上取整）个“乱”。（X为“乱”数）',
			zhuixi:'追袭',
			zhuixi_info:'锁定技，你使用【杀】的次数上限+1。',
			reduanbing:'短兵',
			reduanbing_info:'你使用【杀】选择目标后，可以为此【杀】增加一名距离为1的额外目标。你对距离为1的角色使用的【杀】需两张【闪】才能抵消。',
			refenxun:'奋迅',
			refenxun2:'奋迅',
			refenxun_info:'出牌阶段限一次，你可以选择一名其他角色，然后本回合你计算与其的距离视为1；结束阶段开始时，若你未对其造成过伤害，你弃一张牌。',
			zongyu:'宗预',
			zyqiao:'气傲',
			zyqiao_info:'每回合限两次。当你成为其他角色使用牌的目标后，你可以弃置其一张牌，然后你弃置一张牌。',
			zyqiao_info_guozhan:'每回合限两次。当你成为其他势力的角色使用牌的目标后，你可以弃置其一张牌，然后你弃置一张牌。',
			chengshang:'承赏',
			chengshang_info:'当你于出牌阶段内使用的牌结算完成后，若此牌未造成过伤害且此牌的目标包含其他角色且你本阶段内未因〖承赏〗获得过牌，则你可以从牌堆中获得一张与此牌花色点数相同的牌。',
			chengshang_info_guozhan:'当你于出牌阶段内使用的牌结算完成后，若此牌未造成过伤害且此牌的目标包含其他角色且你本阶段内未因〖承赏〗获得过牌，则你可以从牌堆中获得一张与此牌花色点数相同的牌。',
			sp_fuwan:'SP伏完',
			spfengyin:'奉印',
			spfengyin_info:'其他角色的回合开始时，若其体力值不少于你，你可以交给其一张【杀】，令其跳过出牌阶段和弃牌阶段。',
			spchizhong:'持重',
			spchizhong_info:'锁定技，你的手牌上限等于体力上限；其他角色死亡时，你加1点体力上限。',
			sp_fuhuanghou:'SP伏皇后',
			spcangni:'藏匿',
			spcangni_info:'弃牌阶段开始时，你可以回复1点体力或摸两张牌，然后将你的武将牌翻面；其他角色的回合内，当你获得（每回合限一次）/失去一次牌时，若你的武将牌背面朝上，你可以令该角色摸/弃置一张牌。',
			spmixin:'密信',
			spmixin_info:'出牌阶段限一次，你可以将一张手牌交给一名其他角色，该角色须对你选择的另一名角色使用一张无距离限制的【杀】，否则你选择的角色观看其手牌并获得其中一张。',
			sp_jiben:'吉本',
			spduanzhi:'断指',
			spduanzhi_info:'当你成为其他角色使用的牌的目标后，你可以弃置其至多两张牌，然后失去1点体力。',
			spduyi:'毒医',
			spduyi2:'毒医',
			spduyi_info:'出牌阶段限一次，你可以亮出牌堆顶的一张牌并交给一名角色，若此牌为黑色，该角色不能使用或打出手牌，直到回到结束。',
			panshu:'潘淑',
			weiyi:'威仪',
			weiyi_info:'每名角色限一次。当有角色受到伤害后，你可选择：①若其体力值不小于你，则其失去1点体力。②若其体力值不大于你且其已受伤，则其回复1点体力。',
			jinzhi:'锦织',
			jinzhi2:'锦织',
			jinzhi_info:'当你需要使用或打出一张基本牌时，你可弃置X张牌并摸一张牌。若你以此法弃置的牌均为同一颜色，则视为你使用或打出了此牌。（X为你于本轮内发动此技能的次数）',
			yanxiao_card:'言笑',
			yanxiao_global:'言笑',
			yanxiao_card_info:'判定阶段开始时，你获得判定区内的所有牌。',
			huangzu:'黄祖',
			wangong:'挽弓',
			wangong2:'挽弓',
			wangong_info:'锁定技，当你使用基本牌时，你获得如下效果：当你使用下一张牌时，若此牌为【杀】，则此牌无次数和距离限制且伤害+1。',
			huangchengyan:'黄承彦',
			guanxu:'观虚',
			guanxu_info:'出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可将其中一张手牌与牌堆顶5张牌中的一张交换。若如此做，你弃置其手牌中3张花色相同的牌。',
			yashi:'雅士',
			yashi_info:'当你受到一次伤害后，你可选择一项：1. 令伤害来源的非锁定技无效直到其下个回合开始；2. 对一名其他角色发动〖观虚〗。',
			olwuniang:'武娘',
			olwuniang_info:'每回合限一次，当你于回合内使用的【杀】结算完成后，若此【杀】对应的目标数为1，则你可以令目标角色选择是否对你使用使用【杀】。你于其选择结算完成后摸一张牌，且本回合内使用【杀】的次数上限+1。',
			olxushen:'许身',
			olxushen_info:'限定技，当你进入濒死状态时，你可将体力回复至1点并获得技能〖镇南〗。然后若场上没有存活的“关索”，则你可以令一名其他男性角色选择是否将一张武将牌替换为“关索”。',
			olzhennan:'镇南',
			olzhennan2:'镇南',
			olzhennan_info:'【南蛮入侵】对你无效。出牌阶段限一次，你可以将任意张手牌当做【南蛮入侵】对等量的角色使用。',
			gaogan:'高干',
			juguan:'拒关',
			juguan_backup:'拒关',
			juguan_info:'出牌阶段限一次，你可将一张手牌当【杀】或【决斗】使用。若受到此牌伤害的角色未在你的下回合开始前对你造成过伤害，你的下个摸牌阶段摸牌数+2。',
			duxi:'杜袭',
			quxi:'驱徙',
			quxi_info:'限定技。出牌阶段结束时，你可跳过下个弃牌阶段并选择两名手牌数不同的其他角色。你将武将牌翻至背面，令这两名角色中手牌数较少的角色获得另一名角色的一张牌并获得一枚“丰”，另一名角色获得一枚“歉”。拥有“丰”/“歉”的角色的摸牌阶段额定摸牌数+1/-1。拥有“丰”/“歉”的角色死亡时，或一轮游戏开始时，你可转移“丰”/“歉”。',
			bixiong:'避凶',
			bixiong2:'避凶',
			bixiong_info:'锁定技，当你于弃牌阶段弃置手牌后，你不能成为与这些牌花色相同的牌的目标直到你下回合开始。',
			fuwei:'扶危',
			fuwei_info:'每回合限一次。当你的牌被其他角色弃置或获得后，你可从牌堆中获得一张与此牌名称相同的牌（若没有则改为摸一张牌）。',
			yuejian:'约俭',
			yuejian_info:'每回合限两次。当其他角色对你使用的牌A结算结束后，你可展示所有手牌。若牌A有花色且你的手牌中没有同花色的牌，则你获得牌A对应的所有实体牌。',
			ol_dengzhi:'OL邓芝',
			olxiuhao:'修好',
			olxiuhao_info:'每回合限一次。当你受到其他角色造成的伤害时，或对其他角色造成伤害时，你可防止此伤害，然后令伤害来源摸两张牌。',
			olsujian:'素俭',
			olsujian_given:'已分配',
			olsujian_info:'锁定技。弃牌阶段开始前，你跳过此阶段。然后你选择一项：①将所有不为本回合获得的手牌分配给其他角色。②弃置这些手牌，然后弃置一名其他角色等量的牌。',
			ol_wangrong:'OL王荣',
			olfengzi:'丰姿',
			olfengzi_info:'出牌阶段限一次。当你使用有目标的基本牌或普通锦囊牌时，你可弃置一张与此牌类型相同的牌，然后令此牌结算两次。',
			oljizhan:'吉占',
			oljizhan_info:'摸牌阶段开始时，你可以放弃摸牌。你展示牌堆顶的一张牌，并猜测牌堆顶的下一张牌点数大于或小于此牌。若你猜对，你可继续重复此流程。然后你获得以此法展示的所有牌。',
			olfusong:'赋颂',
			olfusong_info:'当你死亡时，你可以选择一名体力上限大于你的其他角色。其选择获得〖吉占〗或〖丰姿〗。',
			zuofen:'左棻',
			zhaosong:'诏颂',
			zhaosong_info:'一名其他角色的摸牌阶段结束时，若其没有因〖诏颂〗而获得的标记，则你可令其正面向上交给你一张手牌。根据此牌的类型，该角色获得对应的标记和效果：<br>锦囊牌：“诔”标记。当拥有者进入濒死状态时，其可弃置所有“诔”，将体力回复至1点并摸1张牌。<br>装备牌：“赋”标记。拥有者的出牌阶段开始时，其可弃置所有“赋”，弃置一名角色区域内的至多两张牌，然后可令其摸一张牌。<br>基本牌：“颂”标记。当使用者使用仅指定一个目标的【杀】时，其可弃置“颂”，为此【杀】增加至多两个目标。',
			lisi:'离思',
			lisi_info:'每当你于回合外使用牌的置入弃牌堆时，你可将其交给一名手牌数不大于你的其他角色。',
			ol_yangyi:'杨仪',
			oljuanxia:'狷狭',
			oljuanxia_info:'结束阶段，你可选择一名其他角色，并依次视为对其使用至多两种单目标普通锦囊牌。然后其下回合结束时，可视为对你使用等量的【杀】。',
			oldingcuo:'定措',
			oldingcuo_info:'每回合限一次。当你受到或造成伤害后，你可摸两张牌。若这两张牌颜色不同，则你弃置一张手牌。',
			fengfangnv:'OL冯妤',
			zhuangshu:'妆梳',
			zhuangshu_info:'①游戏开始时，你可将{【琼梳】，【犀梳】，【金梳】}中的一张牌置于装备区。②一名角色的回合开始时，若其宝物区为空，则你可以弃置一张牌，并根据此牌的类型，按如下关系将一张宝物牌置入该角色的装备区：{<基本牌,【琼梳】>，<锦囊牌，【犀梳】>，<装备牌，【金梳】>}。',
			chuiti:'垂涕',
			chuiti_info:'每回合限一次。当你或拥有〖妆梳〗牌角色的牌因弃置而进入弃牌堆后，你可使用其中的一张牌。',
			zhuangshu_basic:'琼梳',
			zhuangshu_basic_bg:'琼',
			zhuangshu_basic_info:'当你受到伤害时，你可以弃置X张牌并防止此伤害（X为伤害值）。当此牌不因交换装备或移动至其他装备区而离开你的装备区后，销毁之。',
			zhuangshu_trick:'犀梳',
			zhuangshu_trick_bg:'犀',
			zhuangshu_trick_info:'判定阶段开始前，你可选择：①跳过此阶段。②跳过本回合的弃牌阶段。当此牌不因交换装备或移动至其他装备区而离开你的装备区后，销毁之。',
			zhuangshu_equip:'金梳',
			zhuangshu_equip_bg:'金',
			zhuangshu_equip_info:'锁定技。出牌阶段结束时，你将手牌摸至手牌上限（至多摸五张）。当此牌不因交换装备或移动至其他装备区而离开你的装备区后，销毁之。',
			ol_dongzhao:'董昭',
			olxianlve:'先略',
			olxianlve_info:'①主公的回合开始时，你可声明并记录一个锦囊牌的名称并移除先前的记录。②每回合限一次，其他角色使用〖先略〗记录过的锦囊牌后，你可摸两张牌并可以分配给任意其他角色，然后你可声明并记录一个锦囊牌的名称并移除先前的记录。',
			olzaowang:'造王',
			olzaowang2:'造王',
			olzaowang_info:'限定技。出牌阶段，你可以令一名角色加1点体力上限，回复1点体力并摸三张牌，且获得如下效果：主公死亡时，若其身份为忠臣，则其和主公交换身份牌；其死亡时，若其身份为反贼且伤害来源的身份为主公或忠臣，则以主忠胜利结束本局游戏。',
			sp_ol_zhanghe:'SP张郃',
			spolzhouxuan:'周旋',
			spolzhouxuan_info:'①弃牌阶段开始时，你可将至多五张置于武将牌上，称为“旋”。②当你使用牌时，你摸一张牌并将一张“旋”置入弃牌堆（若你的手牌数不为全场唯一最多则改为摸X张牌，X为“旋”数）。③出牌阶段结束时，你将所有“旋”置入弃牌堆。',
			wuyan:'吾彦',
			lanjiang:'澜疆',
			lanjiang_info:'结束阶段，你可以选择令所有手牌数不小于你的角色。这些角色依次选择是否令你摸一张牌。然后你可以对其中一名手牌数等于你的角色造成1点伤害，随后可以对其中一名手牌数小于你的角色摸一张牌。',
			ol_zhuling:'朱灵',
			jixian:'急陷',
			jixian_info:'摸牌阶段结束时，你可以选择一名满足以下至少一项条件的角色：⒈装备区内有防具牌；⒉拥有的普通技能数大于你；⒊体力值等于体力上限。你视为对其使用一张【杀】，然后摸X张牌（X为其于此【杀】结算前满足的条件数）；若此【杀】未造成伤害，则你失去1点体力。',
			ol_chendeng:'OL陈登',
			olfengji:'丰积',
			olfengji_info:'摸牌阶段开始时，你选择：⒈本回合摸牌阶段的额定摸牌数-1，且令一名其他角色下回合摸牌阶段的额定摸牌数+2；⒉本回合摸牌阶段的额定摸牌数+1。然后你选择：⒈本回合使用【杀】的次数上限-1，且令一名其他角色下回合使用【杀】的次数上限+2；⒉本回合使用【杀】的次数上限+1。',
			tianyu:'田豫',
			saodi:'扫狄',
			saodi_info:'当你使用【杀】或普通锦囊牌指定唯一其他角色为目标时，你可从逆时针方向和顺时针方向中选择一个你与其之间角色最少的方向。你令该方向下你与其之间的所有能成为此牌额外目标的角色均成为此牌的目标。',
			zhuitao:'追讨',
			zhuitao_info:'①准备阶段，你可选择一名未被〖追讨〗记录过的其他角色。②你至所有〖追讨〗记录过的角色的距离-1。③当你对一名被〖追讨〗记录过的角色造成伤害时，你从〖追讨〗记录里移除该角色。',
			fanjiangzhangda_ab:'范疆张达',
			fanjiangzhangda:'范强张达',
			yuanchou:'怨仇',
			yuanchou_info:'锁定技。当你使用黑色【杀】指定目标角色后或成为黑色【杀】的目标角色后，你令目标角色的防具技能无效直到此【杀】被抵消或造成伤害。',
			juesheng:'决生',
			juesheng_info:'限定技。出牌阶段，你可视为使用一张【决斗】。当你因此【决斗】造成伤害时，你将伤害值改为X（X为目标角色本局游戏内使用过【杀】的数量）且令目标角色获得此技能直到其下回合结束。',
			qinghegongzhu:'清河公主',
			zengou:'谮构',
			zengou_info:'当有角色使用【闪】时，若其在你的攻击范围内，则你可以弃置一张非基本牌或失去1点体力，然后取消此【闪】的目标并获得其对应的实体牌。',
			qhzhangji:'长姬',
			qhzhangji_info:'一名角色的回合结束时，若你本回合内：造成过伤害，则你可以令其摸两张牌；受到过伤害，则你可以令其弃置两张牌。',
			
			sp_tianji:'天极·皇室宗亲',
			sp_sibi:'四弼·辅国文曲',
			sp_tianzhu:'天柱·势冠一方',
			sp_nvshi:'女史·留史巾帼',
			sp_shaowei:'少微·能人异士',
			sp_huben:'虎贲·勇冠三军',
			sp_liesi:'列肆·豪商巨贾',
			sp_default:"天同·同名异势",
			sp_qifu:'灯愿·祈福武将',
			sp_wanglang:'八萬·饶舌凤鹛',
			sp_tongque:"铜雀台",
			sp_zhongdan:"忠胆英杰",
			sp_guozhan:"国战",
			sp_guozhan2:"国战移植",
			sp_others:"其他",
			sp_single:'新1v1',
		},
	};
});
