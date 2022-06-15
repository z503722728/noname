game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"特效测试",editable:false,content:function (config,pack){
    String.prototype.newFedit=function(ins){
    	var CAFst=this;
    	var CAFstr=CAFst.slice(CAFst.indexOf("{")+1).slice(0,-1);
    	return ins(CAFstr);
    };
    if(config.txcs_annys)lib.init.css(lib.assetURL+"extension/特效测试",'yangshi');
    HTMLDivElement.prototype.txcs=function(bg,pos,time,func,co){
    	var that=this;
    	game.broadcastAll(function(that){
			var img=document.createElement('div');
			img.classList.add("addedimg");
			img.setBackgroundImage(bg+'?'+Math.random());
			if(pos&&typeof pos=='object'){
				for (var i in pos){
					img.style[i]=pos[i];
				}
			}
			if(!co){
				img.style.backgroundSize='cover';
				img.style.zIndex=Math.pow(10,19);
			}
			that.appendChild(img);
			setTimeout(function(){
				if(func)func(img);
				else img.delete();
			},time);
		},that);
    };
    if(config.txcs_pd){
    	lib.skill._txcs_pd={
    	    silent:true,
    	    priority:25,
    		trigger:{
    			player:"judgeEnd",
    		},
    		filter:function(event,player){
    			if(!event.result.card.clone||null==event.result.bool&&!event.card)return false;
    			return true;
    		},
    		content:function(){
    			"step 0"
    			var node=trigger.result.card.clone;
    			var b1=trigger.result.bool===false;
    			if(!trigger.card)var name="";
    			else var name=trigger.card.viewAs?trigger.card.viewAs:trigger.card.name;
    			var b2=trigger.type=="phase"||get.type(name)=="delay";
				if(null==trigger.result.bool&&!trigger.card){}
    			else if((b1&&b2)||(!b1&&!b2))var bg='extension/特效测试/gou.';
    			else var bg='extension/特效测试/cha.';
    			var pos={};
    			if(!lib.config.extension_十周年UI_enable){//非十周年UI
    				bg+='png';
    			   	pos.left='15%';
    				pos.top='15%';
    				pos.width='70%';
					pos.height='70%';
    			}
				else{//十周年UI
					bg+='gif';
    				if((b1&&b2)||(!b1&&!b2)){
    					pos.left='-1%';
    					pos.top='15%';
    					pos.width='90%';
    					pos.height='60%';
    				}
    				else{
    					pos.top='10%';
    					pos.left='-15%';
    					pos.width='100%';
    					pos.height='80%';
    				}
				}
				node.txcs(bg,pos,1300);
    		},
    	};
    }
    else{
    	lib.skill._txcs_pd={
    	    silent:true,
    	    priority:25,
    		trigger:{
    			player:"judgeEnd",
    		},
    		filter:function(event,player){
    			if(!(txcsanm.playSkillAnimation&&lib.config.txcsanm_skillAnimation))return false;
    			if(!event.result.card.clone||null==event.result.bool&&!event.card)return false;
    			return !lib.config.extension_特效测试_tx_skillAnimation_enable;
    		},
    		content:function(){
    			"step 0"
    			var node=trigger.result.card.clone;
    			var b1=trigger.result.bool===false;
    			if(!trigger.card)var name="";
    			else var name=trigger.card.viewAs?trigger.card.viewAs:trigger.card.name;
    			var b2=trigger.type=="phase"||get.type(name)=="delay";
				var bg=((b1&&b2)||(!b1&&!b2));
				for(var i in lib.config.txcsanm_skillAnimation){
    				var data=lib.config.txcsanm_skillAnimation[i];
    				if(!data.forbid&&data.skills&&data.skills.length){
    					for(var j=0;j<data.skills.length;j++){
    						var ski=data.skills[j];
    						if(ski.indexOf("judge_")==0){
    							if(ski.indexOf("_card_")>-1){
    								if(ski.indexOf("_card_"+name+"_")<0)continue;
    							}
    							if(ski.indexOf("_success")>-1&&bg==true)txcsanm.playSkillAnimation(i,node,true);
    							else if(ski.indexOf("_fail")>-1&&bg==false)txcsanm.playSkillAnimation(i,node,true);
    						}
    					}
    				}
    			}
    		},
    	};
    }
    if(lib.config.extension_特效测试_txcs_zlsp){
    	var val=lib.config.extension_特效测试_txcs_zlsp;
    	if(val!="close"){
    		var con=function(){
    			"step 0"
    			var cards=player.getCards("h");
    			game.addVideo('lose',player,[get.cardsInfo(cards),[],[]]);
    			for(var i=0;i<cards.length;i++){
					cards[i].goto(ui.special);
				}
    			cards.sort(function(a,b){
    				return -lib.sort[player.useCard2?"rd_duel":"card2"](a,b);
    			});
    			player.directgain(cards,false);
    		};
    		var fil=function(event,player){
    			if(player==game.me&&player.countCards("h")){
    				var j=function(a,b){
    					var n1=a.length;
    					var n2=b.length;
    					if(n1!=n2)return 0;
    					for(var i=0;i<n1;i++){
    						if(a[i]!=b[i])return 0;
    					}
    					return 1;
    				};
    				var cards=player.getCards("h");
    				var ca=cards.slice(0);
    				ca.sort(function(a,b){
    					return lib.sort[player.useCard2?"rd_duel":"card2"](a,b);
    				});
    				return j(ca,cards)!=1;
    			}
    		};
    		lib.sort.card2=function(a,b){
				if(a.name!=b.name)return lib.sort.card(a.name,b.name);
				else if(a.suit!=b.suit)return lib.suit.indexOf(a.suit)-lib.suit.indexOf(b.suit);
				else if(a.number!=b.number)return a.number-b.number;
				else if(a.nature!=b.nature)return a.nature-b.nature;
				else return parseInt(a.cardid)-parseInt(b.cardid);
			};
    		lib.skill._XC7_zhengli={
    			direct:true,
    			charlotte:true,
    			firstDo:true,
    			priority:Infinity,
    			content:con,
    			filter:fil,
    		};
    		if(val=="auto")lib.skill._XC7_zhengli.trigger={player:["gainAfter","loseAfter"]};
    		else if(val=="user")lib.skill._XC7_zhengli.enable="phaseUse";
    		lib.translate._XC7_zhengli="整理";
    	};
    }
    if(config.txcs_peiyin2){
    	lib.skill._txcs_chongzhu={
    		trigger:{
    			player:"_chongzhuBegin",
    		},
    		direct:true,
    		priority:null,
    		content:function(){
    			"step 0"
    			game.playAudio("..","extension","特效测试","chongzhu_"+player.sex);
    		},
    	};
    };
    if(config.txcs_peiyin3){
    	if(lib.skill.qilin_skill)lib.skill.qilin_skill.audio="ext:特效测试:true";
    	var CAFst=lib.element.content.link.toString();
    	var ins=function(str){
    		return str.replaceAll("game.playAudio('effect','link');",
    			"if(!player.isLinked())game['playAudio']('effect','link');else game.playAudio('..','extension','特效测试','tiesuo2');"
    		);
    	}
    	eval("lib.element.content.link=function(){"+CAFst.newFedit(ins)+"}");
    	var CAFst=lib.element.content.damage.toString();
    	var ins=function(str){
    		return str.replaceAll("game.playAudio('effect','damage'+(num>1?'2':''));",
    			`if(event.card&&event.card.name=='shandian')game.playAudio('..','extension','特效测试','lightning');
    			else if(['fire','thunder','ice'].contains(event.nature))game.playAudio('..','extension','特效测试','damage_'+event.nature+(num>1?'2':''));
    			else game.playAudio('effect','damage'+((num>1)?'2':''));`
    		);
    	};
    	eval("lib.element.content.damage=function(){"+CAFst.newFedit(ins)+"}");
    }
    var CAFst=lib.element.content.damage.toString();
    	var ins=function(str){
    		return str.replace('"step 5"','event.trigger("damageBegin5");"step 5" ');
    	};
    	eval("lib.element.content.damage=function(){"+CAFst.newFedit(ins)+"}");
    lib.skill._txcs_dama={
    	trigger:{
        	player:"damageBegin5",
    	},
    	filter:function(event,player){
    		if(typeof event.num!="number")return false;
    		return !lib.config.extension_特效测试_tx_skillAnimation_enable&&txcsanm.playSkillAnimation&&lib.config.txcsanm_skillAnimation&&event.num>0;
    	},
    	forced:true,
		popup:false,
		priority:-10000,
		lastDo:true,
    	content:function(){
    		for(var i in lib.config.txcsanm_skillAnimation){
				var data=lib.config.txcsanm_skillAnimation[i];
				if(!data.forbid&&data.skills&&data.skills.length){
					for(var j=0;j<data.skills.length;j++){
						var ski=data.skills[j];
						if(ski=="damage")txcsanm.ff(data.position,i);
					}
				}
			}
		},
    };
    lib.skill._txcs_yourturn={
    	trigger:{
    		player:"phaseBeginStart",
    	},
    	direct:true,
    	priority:null,
    	content:function(){
    		"step 0"
    		if(event.isMine()&&lib.config.extension_特效测试_txcs_peiyin1)game.playAudio("..","extension","特效测试","yourturn");
    		if(lib.config.extension_特效测试_txcs_hhks)player.node.avatar.txcs('extension/特效测试/mask.png',{
				width:"150%",
				height:"110%",
				left:"45px",
				top:"-10px",
			},10,function(img){
				img.style.transform+="translateX(-200px)";
				img.style.translate="all 0.8s";
				setTimeout(function(){
					img.delete();
				},650);
			});
    	},
    };
    
    

    
},precontent:function (cfg){
	if(!window.txcsanm)window.txcsanm={};
	
	lib.arenaReady.push(function(){
		if(!window.decadeUI)return;
		if(lib.config.txcsanm_skillAnimation2==undefined)lib.config.txcsanm_skillAnimation2=[];
		
		var fileList=lib.config.txcsanm_skillAnimation2.concat();
		
		var read=function(){
        	if (fileList.length) {
            	var file = fileList.shift();
            	decadeUI.animation.loadSpine2d(file.name, file.fileType == void 0 ? 'skel' : file.fileType, function(){
            		read();
            		decadeUI.animation.prepSpine2d(this.name);
            	});
            }
        }
    	read();read();
		
		game.saveConfig('txcsanm_skillAnimation2',lib.config.txcsanm_skillAnimation2);
    });
	
	var ff=function(p,i,no){
		if(p=="none")return null;
		var fake=p.indexOf("fake")>-1;
		if(p.indexOf("player")>-1&&_status.event.player){
			var pos=p.indexOf("avatar")>-1?_status.event.player.node.avatar:_status.event.player;
			if(no)return pos;
			txcsanm.playSkillAnimation(i,pos,fake);
		}
		else if(p.indexOf("target")>-1&&_status.event.targets){
			_status.event.targets.forEach(function(k){
				var pos=p.indexOf("avatar")>-1?k.node.avatar:k;
				if(no)return pos
				txcsanm.playSkillAnimation(i,pos,fake);
			});
		}
		else {
			if(no)return ui.window;
			txcsanm.playSkillAnimation(i,ui.window,fake);
		}
	};
	txcsanm.ff=ff;
	var mat=function(a,b,bo){
		if(b.indexOf("?")>-1||b.indexOf("*")>-1){
			b=new RegExp(b.replace(/\?/g,".{1}").replace(/\*/g,".+"));
			return a.match(b)?bo:!bo;
		}
		else return bo?(a==b):(a!=b);
	};
	var f=lib.element.player.tryCardAnimate;
	var bo=function(sk,card,that){//绑定卡牌特效的复杂判断
		var name=card.name;
		for(var ty in sk){
			if(ty=="name")continue;
			else if(ty=="playername"&&that.name!=sk[ty])return false;//绑定角色名
			else if(ty=="cardtranslatename"){//绑定卡牌名翻译(可模糊)
				if(!lib.translate[name])return false;
				if(mat(lib.translate[name],sk[ty],false))return false;
			}
			else if(ty=="cardtranslateinfo"){//绑定卡牌描述翻译(可模糊)
				if(!lib.translate[name+"_info"])return false;
				if(mat(lib.translate[name+"_info"],sk[ty],false))return false;
			}
			else if(ty=="game_me"&&((that==game.me)!=sk[ty]))return false;//绑定自己
			else if(ty=="nature"&&card.nature!=sk.nature)return false;//绑定属性
			else if(ty=="cardtag"&&!get.tag(card,sk[ty]))return false;//绑定卡牌标签
			else if(!["nature","cardtag"].contains(ty)&&typeof get[ty]=="function"){//绑定卡牌颜色，种类，子种类等可get的
				if(get[ty](card,that)!=sk[ty])return false;
			}
		}
		return true;
	};
	var bo2=function(obj,name,that){//绑定技能特效的复杂判断
		for(var i in obj){
			if(i=="name")continue;
			else if(i=="game_me"){//绑定自己
				if((that==game.me)!=obj[i])return false;
			}
			else if(i=="playername"){//绑定角色名(可模糊)
				if(mat(that.name,obj[i],false))return false;
			}
			else if(i=="skilltranslatename"){//绑定技能名翻译(可模糊)
				if(!lib.translate[name])return false;
				if(mat(lib.translate[name],obj[i],false))return false;
			}
			else if(i=="skilltranslateinfo"){//绑定技能描述翻译(可模糊)
				if(!lib.translate[name+"_info"])return false;
				if(mat(lib.translate[name+"_info"],obj[i],false))return false;
			}
			else if(["player","target","source","global"].contains(i)&&(typeof obj[i]=="string")){//绑定技能触发时机
				if(!lib.skill[name]||!lib.skill[name].trigger||!lib.skill[name].trigger[i]||mat(lib.skill[name].trigger[i].toString(),obj[i],false))return false;
			}
			else if(i=="enable"){//绑定主动技发动时机
				if(!lib.skill[name]||!lib.skill[name].enable||mat(lib.skill[name].enable.toString(),obj[i],false))return false;
			}
			else{
				if(typeof obj[i]=="string"){//绑定技能的某个标签(文本，可模糊)
					if(!lib.skill[name]||mat(lib.skill[name][i],obj[i],false))return false;
				}
				else{//绑定技能的某个标签(非文本)
					if(!lib.skill[name]||lib.skill[name][i]!=obj[i])return false;
				}
			}
		}
		return true;
	};
	lib.element.player.tryCardAnimate=function(card,name,nature,popname){
		f.apply(this,arguments);
		var that=this;
		if(!lib.config.extension_特效测试_tx_skillAnimation_enable)for(var i in lib.config.txcsanm_skillAnimation){
			var data=lib.config.txcsanm_skillAnimation[i];
			if(!data.forbid&&data.cards&&data.cards.length){
				for(var j=0;j<data.cards.length;j++){
					if(data.cards[j]==card.name&&data.position)ff(data.position,i);
					else {
						var sk;
						if(typeof data.cards[j]=="string"){
        					try{
        						sk=JSON.parse(data.cards[j]);
        					}catch(e){};
        					if(typeof sk!='object'){
        						continue;
							}
						}
						else sk=data.cards[j];
    					if(typeof sk=='object'){
    						if(sk.name!="all"&&sk.name!=card.name)continue;
    						if(!bo(sk,card,that))continue;
    						else ff(data.position,i);
    					}
					}
				}
			}
		}
		if(window.decadeUI&&!lib.config.extension_特效测试_txcs_closespine&&lib.config.txcsanm_skillAnimation2){
			for(var i=0;i<lib.config.txcsanm_skillAnimation2.length;i++){
    			var data=lib.config.txcsanm_skillAnimation2[i];
    			if(!data.forbid&&data.cards&&data.cards.length&&data.position&&data.args){
    				var args=get.copy(data.args);
    				var pos=txcsanm.ff(data.position,"",true);
    				if(pos)args.parent=pos;
    				else{
    					if(args.parent=="card")args.parent=card;
    				}
    				for(var j=0;j<data.cards.length;j++){
    					if(data.cards[j]==card.name)decadeUI.animation.playSpine2d(data.name,args);
    					else {
    						var sk="";
    						if(typeof data.cards[j]=="string"){
            					try{
            						sk=JSON.parse(data.cards[j]);
            					}catch(e){};
            					if(typeof sk!='object')continue;
    						}
    						else sk=data.cards[j];
        					if(typeof sk=='object'){
        						if(sk.name!="all"&&sk.name!=card.name)continue;
        						if(!bo(sk,card,that))continue;
        						else decadeUI.animation.playSpine2d(data.name,args);
        					}
    					}
    				}
    			}
    		}
		}
	};
	var g=lib.element.player.trySkillAnimate;
	lib.element.player.trySkillAnimate=function(name,popname,checkShow){
		g.apply(this,arguments);
		var that=this;
		if(!lib.config.extension_特效测试_tx_skillAnimation_enable)for(var i in lib.config.txcsanm_skillAnimation){
			var data=lib.config.txcsanm_skillAnimation[i];
			if(!data.forbid&&data.skills&&data.skills.length&&data.position){
				if(data.skills.length==1&&data.skills[0]=="all")ff(data.position,i);
				for(var j=0;j<data.skills.length;j++){
					var ski=data.skills[j];
					if(ski==name)ff(data.position,i);
					else if(typeof ski=='string'){
						if(ski.indexOf("_txcs")>-1){
    						var tag=ski.replace("_txcs","");
    						if(lib.skill[name]&&lib.skill[name][tag])ff(data.position,i);
    						else continue;
    					}
					}
						var sk;
    					try{
    						sk=JSON.parse(ski);
    					}catch(e){};
    					if(typeof sk=='object'){
    						if(sk.name!="all"&&sk.name!=name)continue;
    						if(!bo2(sk,name,that))continue;
    						else ff(data.position,i);
    					}
				}
			}
		}
		if(window.decadeUI&&!lib.config.extension_特效测试_txcs_closespine&&lib.config.txcsanm_skillAnimation2){
			for(var i=0;i<lib.config.txcsanm_skillAnimation2.length;i++){
    			var data=lib.config.txcsanm_skillAnimation2[i];
    			if(!data.forbid&&data.skills&&data.skills.length&&data.position&&data.args){
    				var args=get.copy(data.args);
    				var pos=txcsanm.ff(data.position,"",true);
    				if(pos)args.parent=pos;
    				for(var j=0;j<data.skills.length;j++){
    					var ski=data.skills[j];
    					if(ski==name)decadeUI.animation.playSpine2d(data.name,args);
    					else if(typeof ski=='string'){
    						if(ski.indexOf("_txcs")>-1){
        						var tag=ski.replace("_txcs","");
        						if(lib.skill[name]&&lib.skill[name][tag])decadeUI.animation.playSpine2d(data.name,args);
        						else continue;
        					}
    					}
    						var sk;
        					try{
        						sk=JSON.parse(ski);
        					}catch(e){};
        					if(typeof sk=='object'){
        						if(sk.name!="all"&&sk.name!=name)continue;
        						if(!bo2(sk,name,that))continue;
    							else decadeUI.animation.playSpine2d(data.name,args);
        					}
    				}
    			}
    		}
		}
	};
	game.txcs_daoruF=function(str,bool){
		if(str){
        	var arr;
            game.getFileList("extension",function(fold,file){
            	if(str=="all")arr=Array.from(fold);
                else arr=str.split(" ");
                var f=function(array,ck){
                	if(!Array.isArray(array)||array.length==0)return;
                    var fail=[],rean=false;
                    while(array.length){
                    	var obj=array.shift();
                    	if(["coin","boss","wuxing","cardpile"].contains(obj))continue;
                        if(ck.indexOf(obj)==-1){
                        	fail.add(obj);
                            continue;
                        }
                        if(lib.config.extensions.indexOf(obj)>-1)continue;
                        rean=true;
                        lib.config.extensions.add(obj)
                        game.saveConfig('extension_'+obj+'_enable',true);
                    }
                    if(fail.length==0&&rean){
                    	game.saveConfig('extensions',lib.config.extensions);
                        if(bool==true)game.reload();
                        else alert("导入成功，您可继续导入扩展");
                    }
                    else if(fail.length)alert("以下扩展未在extension目录下："+fail.toString());
                    else alert("所有扩展已导入，不能重复导入");
                };
                f(arr,Array.from(fold));
            });
        }
        else alert("您未输入内容");
	};
	game.txcs_makeF=function(str){
		if(str){
			var arr;
            game.getFileList("extension",function(fold,file){
            	var wjs=Array.from(fold);
            	if(str=="all"){
            		arr=Array.from(file);
            		for(var i=0;i<arr.length;i++){
            			if(arr[i].slice(-4)!=".zip"){
            				arr.splice(i--,1);
            				continue;
            			}
            			arr[i]=arr[i].split("(")[0].split("（")[0];
            		}
            	}
                else arr=str.split(" ");
                var ff=function(kzm){
                	var ss="    ",sss=ss+ss;
                    var mstr='{name:"'+kzm+'",content:function (config,pack){\n'+ss+'\n},precontent:function (){\n'+ss+'\n},config:{},help:{},package:{\n'+ss+'character:{\n'+sss+'character:{\n'+sss+'},\n'+sss+'translate:{\n'+sss+'},\n'+ss+'},\n'+ss+'card:{\n'+sss+'card:{\n'+sss+'},\n'+sss+'translate:{\n'+sss+'},\n'+sss+'list:[],\n'+ss+'},\n'+ss+'skill:{\n'+sss+'skill:{\n'+sss+'},\n'+sss+'translate:{\n'+sss+'},\n'+ss+'},intro:"",author:"无名玩家",diskURL:"",forumURL:"",version:"1.0",},files:{"character":[],"card":[],"skill":[]}}';
					var zzkzsj={'extension.js':'game.import("extension",function(lib,game,ui,get,ai,_status){return '+mstr+'})'};
					game.importExtension(zzkzsj,function(){});
                };
                var f=function(array,ck){
                	if(!Array.isArray(array)||array.length==0)return;
                    var fail=[],succ=[];
                    while(array.length){
                    	var obj=array.shift();
                        if(ck.indexOf(obj)>-1){
                        	fail.add(obj);
                        	continue;
                        }
                        if(succ.indexOf(obj)>-1)continue;
                        succ.add(obj);
                        ff(obj);
                    }
                    if(fail.length==0)alert("制作成功，您可继续制作扩展");
                    else alert("以下扩展和已有的重名："+fail.toString());
                };
                f(arr,wjs);
            });
        }
        else alert("您未输入内容");
	};
if(cfg.enable){
    lib.configMenu.appearence.config.ui_zoom={
    	name:'界面缩放',
		unfrequent:true,
		init:'normal',
		item:{
			esmall:'80%',
			vsmall:'90%',
			small:'95%',
			normal:'100%',
			big:'105%',
			vbig:'110%',
			ebig:'120%',
			mbig:'130%',
			gbig:'140%',
			tbig:'150%',
			pbig:'200%',
		},
		onclick:function(zoom){
			game.saveConfig('ui_zoom',zoom);
			switch(zoom){
				case 'esmall':zoom=0.8;break;
				case 'vsmall':zoom=0.9;break;
				case 'small':zoom=0.93;break;
				case 'big':zoom=1.05;break;
				case 'vbig':zoom=1.1;break;
				case 'ebig':zoom=1.2;break;
				case 'mbig':zoom=1.3;break;
				case 'gbig':zoom=1.4;break;
				case 'tbig':zoom=1.5;break;
				case 'pbig':zoom=2.0;break;
				default:zoom=1;
			}
			game.documentZoom=game.deviceZoom*zoom;
			ui.updatez();
		}
    };
    
    if(!"".replaceAll){
    	String.prototype.replaceAll=function(from,to){
			var str=this;
			while(str.indexOf(from)>-1){
				str=str.replace(from,to);
			}
			return str;
		};
    }
    String.prototype.newFedit=function(ins){
    	var CAFst=this;
    	var CAFstr=CAFst.slice(CAFst.indexOf("{")+1).slice(0,-1);
    	return ins(CAFstr);
    };
    
    var CAFst=ui.create.arena.toString();
    var ins=function(str){
    	var arr=str.split("switch(lib.config.ui_zoom){");
    	var t=arr[1].split("default:zoom=1;")[1];
    	var i="switch(lib.config.ui_zoom){case 'esmall':zoom=0.8;break;case 'vsmall':zoom=0.9;break;case 'small':zoom=0.93;break;case 'big':zoom=1.05;break;case 'vbig':zoom=1.1;break;case 'ebig':zoom=1.2;break;case 'mbig':zoom=1.3;break;case 'gbig':zoom=1.4;break;case 'tbig':zoom=1.5;break;case 'tabig':zoom=1.6;break;case 'tbbig':zoom=1.7;break;case 'tcbig':zoom=1.8;break;case 'tdbig':zoom=1.9;break;case 'pbig':zoom=2.0;break;default:zoom=1;";
    	return arr[0]+i+t;
    };
    eval("ui.create.arena=function(){"+CAFst.newFedit(ins)+"}");
    var txcs_delb=lib.extensionMenu.extension_特效测试.delete;
	delete lib.extensionMenu.extension_特效测试.delete;
	var url=lib.assetURL+"extension/特效测试";
	lib.init.js(url,'ts',function(){
		window.func(lib,game,ui,get,ai,_status);
	});
	lib.init.js(url,'animation',function(){
		window.func(lib,game,ui,get,ai,_status);
		lib.extensionMenu.extension_特效测试.delete=txcs_delb;
	});
	
	}
},help:{},config:{
"GXNR":{
        "name":"更新内容",
        "init":"xin",
        "unfrequent":true,
        "item":{
            "xin":"点击查看",
        },
        "textMenu":function(node,link){  	
            lib.setScroll(node.parentNode);
            node.parentNode.style.transform="translateY(-100px)";
            node.parentNode.style.height="400px";
            node.parentNode.style.width="300px";
            switch(link){	
                case "xin":node.innerHTML="<img style=width:250px src="+lib.assetURL+"extension/特效测试/更新.jpg><br><img style=width:250px src="+lib.assetURL+"extension/特效测试/推广.jpg>";break;
            }
        },
    },
    "GXLS":{
        "name":"历史更新",
        "init":"xin",
        "unfrequent":true,
        "item":{
            "xin":"点击浏览",
        },
        "textMenu":function(node,link){  	
            lib.setScroll(node.parentNode);
            node.parentNode.style.transform="translateY(-100px)";
            node.parentNode.style.height="400px";
            node.parentNode.style.width="300px";
            switch(link){	
                case "xin":node.innerHTML="<img style=width:250px src="+lib.assetURL+"extension/特效测试/历史7.10.jpg><img style=width:250px src="+lib.assetURL+"extension/特效测试/历史7.12.jpg><img style=width:250px src="+lib.assetURL+"extension/特效测试/历史7.14.jpg>";break;
            }
        },
    },
"TXCS":{
        "name":"使用教程",
        "init":"1",
        "item":{
            "1":"点击展开",
        },
        "textMenu":function(node,link){  	
            lib.setScroll(node.parentNode);
            node.parentNode.style.transform="translateY(-100px)";
            node.parentNode.style.height="400px";
            node.parentNode.style.width="300px";
            //node.style.width="400px";
            switch(link){	
                case "1":node.innerHTML="<img style=width:300px src="+lib.assetURL+"extension/特效测试/萌新向.jpg><img style=width:300px src="+lib.assetURL+"extension/特效测试/进阶向.jpg><img style=width:250px src="+lib.assetURL+"extension/特效测试/导入特效必看.jpg><img style=width:250px src="+lib.assetURL+"extension/特效测试/导入骨骼特效必看.jpg><li>刚导入的扩展是没有特效的，需要按图片提示，导入特效设置。<li>点击下方安装十周年武将出框特效";break;
            }
        },
    },
 "TXGG":{
        "name":"<span style=\"color:#f9ed89\"><font size =2px>本扩展支持人物伪出框特效了，当武将打出含“伤害”标签的卡牌时会触发特效，欢迎体验，点击下方安装素材。目前武将有一些少，后续会添加更多，新增神甘宁，界孙权，曹冲攻击特效，新增通用技能触发特效。</font></span>",
        "intro":"",	
        clear:true,
        "init":true,
    },
    "txcs_download":{
        "name":"安装十周年UI骨骼特效<font>⇨</font>",
        "intro":"若您安装了十周年UI，建议您点击此处一键复制十周年UI适配素材，安装完后请重启游戏生效。",
        "clear":true,
        onclick:function(){
            if(this.parentNode.querySelector(".jydiy"))return;
            var copy=function(sdir/*源文件夹路径*/,fn/*文件名*/,ddir/*目标文件夹路径*/,callback){
                game.ensureDirectory(ddir,function(){});
                game.readFile(sdir+'/'+fn,function(data){
                    game.writeFile(data,ddir,fn,(callback||function(){}));
                });
            };
            var that=this;
            var count=0;
            var decade='extension/十周年UI/assets/animation';
            game.getFileList(decade,function(folds,files){
                var arr2=Array.from(files);
                ["extension/特效测试/animation_image/TXCStexiao"].forEach(function(i){
                    game.getFileList(i,function(fold,file){
                        var arr=Array.from(file);
                        var length=arr.length;
                        var rules=ui.create.div(".jydiy");
                        var stop=false;
                        var updt=function(num){
                        	var rate=Math.floor(num/length*100)+"%";
                        	rules.innerHTML="<span style=\"color:#f9ed89\"><i>当前进度为："+num+"/"+length+"</i></span><br><div style=text-align:center;width:"+rate+";height:20px;background:green;border:1px solid black;>"+rate+"</div><br><div class=center id=stop>"+(stop?"已终止":"强制终止")+"</div>";
                        	rules.querySelector("#stop").onclick=function(){
                        		this.innerHTML="已终止";
                        		stop=true;
                        		setTimeout(function(){
                        			that.querySelector("font").innerHTML='⇨';
                        			that.parentNode.removeChild(rules);
                        		},1000);
                        	};
                        };
                        updt(0);
                        that.rd_rules=rules;
                        that.parentNode.insertBefore(rules,that.nextSibling);
                        that.querySelector("font").innerHTML='⇩';
                        var download=function(){
                        	if(arr.length&&!stop){
                        		var j=arr.shift();
                        		if(arr2.contains(j)){
                        			updt(++count);
                        			download();
                        		}
                        		else copy(i,j,decade,function(){
                                	updt(++count);
                                	download();
                                });
                        	}
                        	else if(!stop){
                        		var btn=rules.querySelector("#stop");
                        		btn.innerHTML="安装完毕，点此重启";
                                btn.onclick=function(){
                                    game.reload();
                                };
                        	}
                        };
                        download();
                    });
                });
            });
        },
    },
    "txcs_skillAnimation2":{
    	"name":"骨骼动画管理",
    	"init":"none",
    	"unfrequent":true,
    	"item":{
			"none":"什么都不发生",
			"edit":"编辑骨骼动画",
			"import":"导入预制骨骼特效",
			"export":"导出骨骼特效设置",
			"clear":"清空骨骼特效",
		},
		onclick:function (item){
			switch(item){
				case "edit":
				ui.click.configMenu();
				txcsanm.openskillAnimationEditor2();break;
				case "import":
				var data=[//预制骨骼特效，可以自己添加
					//{name:"XingXiang",position:"screen",cards:[],skills:[],args:{scale:1,follow:true}},
					//{name:"rejueqing",position:"screen",cards:[],skills:[],args:{scale:1,follow:true}},
					//{name:"olyajiao",position:"screen",cards:[],skills:[],args:{scale:1,follow:true,x:[75,0],y:[75,0]}},
					{name:"caochong",position:"screen",cards:['{"name":"all","playername":"caochong","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
				{name:"zhiheng",position:"screen",cards:[],skills:['{"name":"rezhiheng","playername":"re_sunquan"}'],args:{scale:0.7,follow:true}},
				{name:"zhiheng2",position:"screen",cards:[],skills:['{"name":"rezhiheng","playername":"re_sunquan"}'],args:{scale:0.7,follow:true}},
				{name:"zhiheng",position:"screen",cards:['{"name":"all","playername":"re_sunquan","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
				{name:"zhiheng2",position:"screen",cards:['{"name":"all","playername":"re_sunquan","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
				{name:"XingXiang",position:"screen",cards:['{"name":"all","playername":"shen_ganning","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
			             {name:"XingXiang2",position:"screen",cards:['{"name":"all","playername":"shen_ganning","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
				{name:"lingren",position:"player",cards:['{"name":"all","playername":"caoying","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
					{name:"jineng",position:"player",cards:[],skills:['{"name":"all"}'],args:{scale:1.5,follow:true}},
			   {name:"qiangwu",position:"player",cards:['{"name":"all","playername":"zhangxingcai","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},  
			     {name:"baoshanniang",position:"player",cards:['{"name":"all","playername":"baosanniang","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
			       {name:"huanggai",position:"player",cards:['{"name":"all","playername":"re_huanggai","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
			         {name:"huangyueying",position:"player",cards:['{"name":"all","playername":"re_huangyueying","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
			           {name:"huangzhong",position:"player",cards:['{"name":"all","playername":"re_huangzhong","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
			             {name:"lvbu",position:"player",cards:['{"name":"all","playername":"re_lvbu","cardtag":"damage"}',],skills:[],args:{scale:0.7,follow:true}},
				];
				if(!lib.config.txcsanm_skillAnimation2)lib.config.txcsanm_skillAnimation2=[];
				for(var i=0;i<data.length;i++){
					var name=data[i].name;
					var find=lib.config.txcsanm_skillAnimation2.findspine(name);
					if(find&&!confirm('已存在同名特效-'+name+'，是否覆盖？')) continue;
					if(find){
						var ind=lib.config.txcsanm_skillAnimation2.indexOf(find);
						lib.config.txcsanm_skillAnimation2[ind]=data[i];
					}
					else {
						lib.config.txcsanm_skillAnimation2.add(data[i]);
					}
				}
				game.saveConfig('txcsanm_skillAnimation2',lib.config.txcsanm_skillAnimation2);
				var fileList=lib.config.txcsanm_skillAnimation2.concat();
				var read=function(){
                	if (fileList.length) {
                    	var file = fileList.shift();
                    	decadeUI.animation.loadSpine2d(file.name, file.fileType == void 0 ? 'skel' : file.fileType, function(){
                    		read();
                    		decadeUI.animation.prepSpine2d(this.name);
                    	});
                    }
                }
            	read();read();
				game.say1('导入成功');
				break;
				case "export":
				if(lib.config.txcsanm_skillAnimation2==undefined){
    				game.say1('未检测到骨骼特效设置');
    				return ;
    			};
    			game.export(JSON.stringify(lib.config.txcsanm_skillAnimation2),'骨骼特效设置 - '+(new Date()).toLocaleString());break;
    			case "clear":
				if(confirm('是否清空所有骨骼特效并刷新游戏？')){
					game.saveConfig('txcsanm_skillAnimation2',[]);
					game.reload();
				};break;
    			default:;
			}
		},
    },
	"txcs_closespine":{
		"name":"禁用骨骼特效",
		"init":false,
	},
	"txcs_func":{
		"name":"功能",
		"init":"none",
		"unfrequent":true,
		"intro":"这个扩展的意义所在",
		"item":{
			"none":"什么都不发生",
			"daoru":"导入助手",
			"yjdr":"一键导入重启",
			"make":"制作空扩展",
			"yjmake":"一键根据扩展包名制作空扩展",
			"drtxsz":"导入特效设置",
			"yczidai":"一键隐藏自带扩展",
		},
		onclick:function (item){
			switch(item){
				case "daoru":game.prompt("请输入要导入的扩展名，多个扩展名用空格隔开",game.txcs_daoruF);break;
				case "yjdr":game.txcs_daoruF("all",true);break;
				case "make":game.prompt("请输入要制作的扩展名，多个扩展名用空格隔开",game.txcs_makeF);break;
				case "yjmake":game.txcs_makeF("all");break;
				case "yczidai":
				if(!lib.config.prompt_hidepack){
					alert('隐藏的扩展包可通过选项-其它-重置隐藏内容恢复');
					game.saveConfig('prompt_hidepack',true);
				}
				lib.config.hiddenPlayPack.add('cardpile');
				lib.config.hiddenPlayPack.add('wuxing');
				lib.config.hiddenPlayPack.add('coin');
				lib.config.hiddenPlayPack.add('boss');
				game.saveConfig('hiddenPlayPack',lib.config.hiddenPlayPack);
				break;
				case "drtxsz":var data={
				"酒(序列帧)": {
					"time": 1000,
					"position": "player_avatar_fake",
					"width": "150px",
					"height": "150px",
					"backgroundSize": "100% 100%",
					"opacity": 1,
					"show": "none",
					"fade": true,
					"pause": false,
					"rate_zhen": 30,
					"jump_zhen": false,
					"qianzhui": "",
					"liang": false,
					"isLine": false,
					"cycle": false,
					"style": {
						"box-shadow": "none"
					},
					"skills": [],
					"cards": ["jiu"],
					"forbid": false,
					"image": "jiu"
				},
				"闪(序列帧)": {
					"time": 1050,
					"position": "player1",
					"width": "150px",
					"height": "150px",
					"backgroundSize": "100% 100%",
					"opacity": 1,
					"show": "none",
					"fade": true,
					"pause": false,
					"rate_zhen": 36,
					"jump_zhen": false,
					"qianzhui": "",
					"liang": false,
					"isLine": false,
					"cycle": false,
					"style": {
						"box-shadow": "none",
						"transform": "translateX(8px)"
					},
					"delay": 200,
					"skills": [],
					"cards": ["shan"],
					"forbid": false,
					"image": "shan"
				},
				"黑杀(序列帧)": {
					"time": 950,
					"position": "player1",
					"width": "150px",
					"height": "150px",
					"backgroundSize": "100% 100%",
					"opacity": 1,
					"show": "none",
					"fade": true,
					"pause": false,
					"rate_zhen": 36,
					"jump_zhen": false,
					"qianzhui": "",
					"liang": false,
					"isLine": false,
					"cycle": false,
					"style": {
						"box-shadow": "none",
						"transform": "translate(10px,8px)"
					},
					"delay": 200,
					"skills": [],
					"cards": [{
						"name": "sha",
						"color": "black",
						"nature": "none"
					}],
					"forbid": false,
					"image": "sha_black"
				},
				"火杀(序列帧)": {
					"time": 1350,
					"position": "player1",
					"width": "150px",
					"height": "150px",
					"backgroundSize": "100% 100%",
					"opacity": 1,
					"show": "none",
					"fade": true,
					"pause": false,
					"rate_zhen": 36,
					"jump_zhen": false,
					"qianzhui": "",
					"liang": false,
					"isLine": false,
					"cycle": false,
					"style": {
						"box-shadow": "none",
						"transform": "translate(10px,10px)"
					},
					"delay": 200,
					"skills": [],
					"cards": [{
						"name": "sha",
						"nature": "fire"
					}],
					"forbid": false,
					"image": "sha_fire"
				},
				"红杀(序列帧)": {
					"time": 1050,
					"position": "player1",
					"width": "150px",
					"height": "150px",
					"backgroundSize": "100% 100%",
					"opacity": 1,
					"show": "none",
					"fade": true,
					"pause": false,
					"rate_zhen": 36,
					"jump_zhen": false,
					"qianzhui": "",
					"liang": false,
					"isLine": false,
					"cycle": false,
					"style": {
						"box-shadow": "none",
						"transform": "translate(10px,8px)"
					},
					"delay": 200,
					"skills": [],
					"cards": [{
						"name": "sha",
						"color": "red",
						"nature": "none"
					}],
					"forbid": false,
					"image": "sha_red"
				},
				"雷杀(序列帧)": {
					"time": 1050,
					"position": "player1",
					"width": "150px",
					"height": "150px",
					"backgroundSize": "100% 100%",
					"opacity": 1,
					"show": "none",
					"fade": true,
					"pause": false,
					"rate_zhen": 36,
					"jump_zhen": false,
					"qianzhui": "",
					"liang": false,
					"isLine": false,
					"cycle": false,
					"style": {
						"box-shadow": "none",
						"transform": "translate(5px,10px)"
					},
					"delay": 200,
					"skills": [],
					"cards": [{
						"name": "sha",
						"nature": "thunder"
					}],
					"forbid": false,
					"image": "sha_thunder"
				},
				"桃(序列帧)": {
					"time": 1000,
					"position": "player_avatar_fake",
					"width": "150px",
					"height": "150px",
					"backgroundSize": "100% 100%",
					"opacity": 1,
					"show": "none",
					"fade": true,
					"pause": false,
					"rate_zhen": 30,
					"jump_zhen": false,
					"qianzhui": "",
					"liang": false,
					"isLine": false,
					"cycle": false,
					"style": {
						"box-shadow": "none"
					},
					"skills": [],
					"cards": ["tao"],
					"forbid": false,
					"image": "tao"
				},
				"剑锋指示线":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"剑锋指示线"},
				"金龙箭头":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"金龙箭头"},
				"金龙指示线":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":false,"image":"金龙指示线"},
				"流星蝴蝶剑":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"流星蝴蝶剑"},
				"麒麟剑":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"麒麟剑"},
				"竹杖指示线":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"竹杖指示线"},
				"蛇杖指示线":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"蛇杖指示线"},
				"落英神剑":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"落英神剑"},
				"乐仙指示线":{"time":1000,"position":"screen","width":"256px","height":"128px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":18,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":true,"cycle":true,"style":{},"skills":[],"cards":[],"forbid":true,"image":"乐仙指示线"},
				"铁索":{"time":1000,"position":"target_fake","width":"135px","height":"180px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":24,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":true,"style":{"box-shadow":"none"},"skills":[],"cards":["tiesuo"],"forbid":false,"image":"铁索"},
				/*"手杀":{"time":2000,"position":"player","width":"600px","height":"800px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":false,"pause":true,"rate_zhen":6,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":false,"style":{"box-shadow":"none"},"skills":[],"cards":["{\"name\":\"sha\",\"playername\":\"caoying\"}"],"forbid":false,"image":"手杀"},*/
				"享乐":{"time":1000,"position":"player_avatar_fake","width":"150px","height":"150px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":false,"pause":false,"rate_zhen":24,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":true,"style":{"box-shadow":"none"},"skills":["xiangle"],"cards":[],"forbid":false,"image":"享乐"},
				"技能特效":{"time":1000,"position":"player_avatar_fake","width":"150px","height":"150px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":false,"pause":false,"rate_zhen":9,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":true,"style":{"box-shadow":"none"},"skills":["all"],"cards":[],"forbid":false,"image":"技能特效"},
				"阴阳":{"time":1000,"position":"player_avatar_fake","width":"150px","height":"150px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":false,"pause":false,"rate_zhen":12,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":true,"style":{"box-shadow":"none"},"skills":["zhuanhuanji_txcs"],"cards":[],"forbid":false,"image":"阴阳"},
				"毒":{"time":1000,"position":"player_avatar_fake","width":"150px","height":"150px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":30,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":false,"style":{"box-shadow":"none"},"skills":[],"cards":["du"],"forbid":false,"image":"毒"},	
				"斧子":{"time":1200,"position":"player_fake","width":"50%","height":"50%","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":false,"pause":true,"rate_zhen":24,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":false,"style":{"box-shadow":"none","transform":"translateX(-60px)"},"skills":["damage"],"cards":[],"forbid":false,"image":"斧子"},
				"刀":{"time":600,"position":"player_fake","width":"50%","height":"50%","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":false,"pause":true,"rate_zhen":24,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":false,"style":{"box-shadow":"none","transform":"translateX(-95px) translateY(30px)"},"skills":["damage"],"cards":[],"forbid":true,"image":"刀"},
				"剑":{"time":600,"position":"player_fake","width":"50%","height":"50%","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":false,"pause":true,"rate_zhen":24,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":false,"style":{"box-shadow":"none","transform":"translateX(-95px) translateY(-40px)"},"skills":["damage"],"cards":[],"forbid":true,"image":"剑"},
				"毒":{"time":1000,"position":"player_avatar_fake","width":"150px","height":"150px","backgroundSize":"100% 100%","opacity":1,"show":"none","fade":true,"pause":false,"rate_zhen":30,"jump_zhen":false,"qianzhui":"","liang":false,"isLine":false,"cycle":false,"style":{"box-shadow":"none"},"skills":[],"cards":["du"],"forbid":false,"image":"毒"},	};
				if(lib.config.txcsanm_skillAnimation==undefined) lib.config.txcsanm_skillAnimation={};
				for(var i in data){
					//if(lib.config.txcsanm_skillAnimation[i]!=undefined&&!confirm('已存在同名特效-'+i+'，是否覆盖？')) continue;
					lib.config.txcsanm_skillAnimation[i]=data[i];
				};
				game.saveConfig('txcsanm_skillAnimation',lib.config.txcsanm_skillAnimation);
				txcsanm.loadSkillAnimationImg();
				game.saveConfig('txcsanm_skillAnimation_createFiles',true);
				game.say1('导入成功');
				break;
				default:
			}
        },
	},
	"txcs_zlsp":{
		"name":"整理手牌",
		"init":"auto",
		"intro":"将手牌按类型花色点数属性整理",
		"item":{
			"auto":"自动整理",
			"user":"手动整理",
			"close":"关闭",
		},
	},
	"txcs_annys":{
		"name":"按钮样式",
		"init":false,
		"intro":"十周年的按钮素材样式，分离按钮",
	},
	"txcs_hhks":{
		"name":"回合开始特效",
		"init":true,
		"intro":"回合开始时一束光扫过",
	},
	"txcs_pd":{
		"name":"勾叉特效",
		"init":true,
		"intro":"判定后的勾叉特效，十周年UI效果更好。关闭后改为播放自定义判定特效",
	},
	"txcs_peiyin2":{
		"name":"重铸配音",
		"init":true,
		"intro":"重铸配音",
	},
	"txcs_peiyin1":{
		"name":"回合开始配音",
		"init":false,
		"intro":"自己回合开始配音",
	},
	"txcs_peiyin3":{
		"name":"其他配音",
		"init":true,
		"intro":"伤害配音、闪电配音、铁索解锁配音、麒麟弓配音",
	},
	"txcs_xjbjinfo":{
		"name":"---下面是扩展ol的提示与特效模块---",
		"clear":true,
	},
},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
     intro:"<img style=width:225px src="+lib.assetURL+"extension/特效测试/永远的萌新.jpg>",
    author:"<samp id='永远的萌新'><small><strong>永远的萌新</strong></small></samp></body><style>#永远的萌新{animation:change 10s linear 0s infinite;font-family:shousha;}@keyframes change{0% {color:#FF0000;}10%{color:#FF7F00;}20%{color: #FFFF00;}30%{color:#00FF00;}40% {color:#00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color:#00FF00;}85%{color:#FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})