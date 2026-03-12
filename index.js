jQuery(async () => {
    window.unicoNpcAttitudes = {};

    const buttonHtml = `<div id="unico-btn" class="menu_button" title="专属设定面板"><i class="fa-solid fa-wand-magic-sparkles" style="color: #f48fb1; font-size: 1.2em;"></i></div>`;
    $('#top-bar').append(buttonHtml);

    // 所有的选项词库
    const data = {
        bg: ["顶级财阀","老牌世家","豪门新贵","破产千金/少爷","真假千金/少爷","隐世宗门","皇室贵族","权臣世家","簪缨世家","书香门第","军政世家","烈士遗孤","商业巨头","普通小康","工薪阶层","流浪儿","单亲家庭","重男轻女家庭","离异重组","寄人篱下","神秘实验体","天生天养","创世神造物","天煞孤星","皇室弃子","亡国公主","亡国太子","没落贵族","罪臣之后","世代忠良","满门抄斩(唯一幸存)","将门虎女","将门犬子","暴发户之子","丐帮少帮主","武林世家","魔教余孽","隐世高人徒弟","弃婴","狼孩","孤儿院一霸","实验室唯一存活体","克隆人","仿生人","赛博朋克贫民窟","废土拾荒者","地下城原住民","星际难民","宇宙流浪者后裔","虫族混血","纯种人类(稀有)","基因改造失败品","基因改造完美体","神明私生子","恶魔契约者","天使堕落转世","轮回转世者","异世界穿越者","重生者","穿书者","系统携带者","气运之子","天道宠儿","锦鲤附体","被献祭的圣女","被诅咒的血脉","吸血鬼混血","精灵混血","龙族混血","九尾狐后裔","饕餮血脉","穷奇血脉","上古神兽幼崽","仙界下凡历劫","魔界卧底","妖界质子","冥界关系户","财阀千金"],
        era: ["现代都市","古代架空","西方奇幻","赛博朋克","蒸汽朋克","废土末世","星际科幻","民国旧影","中世纪","维多利亚时代","修真仙侠","无限流","克苏鲁神话","大航海时代","原始部落","未来乌托邦","末法时代","灵气复苏"],
        hc: ["银白","鸦青","墨黑","铂金","玫瑰金","樱花粉","雾霾蓝","薄荷绿","亚麻色","巧克力色","琥珀棕","金发","苍青","酒红","渐变色","挑染","雪白","火红"],
        hs: ["黑长直","大波浪卷","双马尾","高马尾","慵懒低马尾","丸子头","双丸子头(哪吒头)","齐耳短发","锁骨发","羊毛卷","法式烫","木马卷","蛋卷头","姬发式(公主切)","妹妹头","齐刘海","空气刘海","八字刘海","侧分长刘海","狼尾(Wolf Cut)","鲻鱼头(Mullet)","大背头(All Back)","三七分","中分","偏分","寸头","光头","优雅低盘发","贵族复古盘发","鱼骨辫","侧边麻花辫","田园风丝带编发","蝴蝶结半扎发","脏辫(Dreadlocks)","爆炸头","刺猬头","及腰长发","及踝长发","微卷披肩发","凌乱碎发","湿发造型","麦穗烫","锡纸烫","纹理烫","摩根烫","水母头","半披半扎","花苞头","复古手推波纹"],
        ec: ["曜石黑","琥珀金","琉璃蓝","翡翠绿","鸽血红","紫水晶","银灰","异色瞳","星空眸","玫瑰红","冰蓝","深海蓝","浅金","竖瞳","盲眼(灰白)","机械义眼","猩红","幽绿","苍青"],
        look: ["清秀佳人","骨感纤细","雌雄莫辨","异域风情","眼角泪痣","唇畔梨涡","妩媚狐狸眼","含情桃花眼","凌厉丹凤眼","三白眼","无辜狗狗眼","完美建模脸","高冷厌世脸","幼态童颜","成熟韵味","战损斑驳","精灵尖耳","异族犄角","神秘鳞片","毛茸茸兽尾","九尾妖狐","深海触手","神圣光环","堕落黑羽","苍白病态","阳光黑皮","健康小麦色","冷白皮","天生丽质","其貌不扬","面色红润","形销骨立","八块腹肌","性感人鱼线","马甲线","娇小玲珑","魁梧巨汉","雌雄同体","精灵般空灵","吸血鬼贵族气质","狼人野性","深海眷族","赛博改造体","半机械化","布满刺青","神秘古老咒印","左眼失明","戴单眼罩","无框眼镜","眉骨断痕","嘴角伤疤","断臂武士","冰冷义肢","盲人","坐轮椅","病弱美人","绝世容颜","倾国倾城","平平无奇","路人脸","大众脸","五官深邃","混血颜","古典清雅","现代摩登","未来科技感","复古胶片感","非主流","杀马特","清冷孤傲","清纯可人","妖媚动人","外表妖艳","仙风道骨","神明降临","恶魔附体","书中走出的仙子","不可名状的恐惧","神采奕奕","目光如炬","眼神拉丝","空洞无神","眼底乌青","熬夜修仙党","唇红齿白"],
        clo: ["极简风","赛博朋克","废土生存","洛丽塔(Lolita)","JK制服","DK制服","汉服","新中式","马面裙","优雅旗袍","复古唐装","哥特风(Gothic)","蒸汽朋克","机能风(Techwear)","Y2K千禧风","高街运动","西装暴徒","商务精英","斯文败类装","医生白大褂","军装制服","警察制服","女仆装","执事服","神职人员袍","修女服","道士袍","僧侣服","魔法师长袍","刺客夜行衣","重甲骑士","轻甲剑客","游侠披风","睡衣出街","纯欲风","甜酷风","辣妹风","BM风","法式慵懒","英伦复古","美式街头","日系盐系","森女风","波西米亚","海岛度假风","华丽晚礼服","高定秀场款","华丽宫廷服","巴洛克风","洛可可风","暗黑系","魔法少女装"],
        pers: ["白切黑","疯批美人","清冷师尊","偏执狂","腹黑","傲娇","绿茶","万人迷","钓系","爹系男友","笨蛋美女","咸鱼","卷王","摸鱼达人","社恐","社牛","病娇","直球","小作精","高岭之花","阳光开朗","阴暗爬行","满级大佬","扮猪吃虎","戏精","毒舌","面瘫","呆萌","元气","铁血冷酷","禁欲系","痞帅","女王","御姐","搞笑女","搞笑男","乐天派","悲观主义","完美主义","护短","财迷","颜控","声控","手控","毛绒控","脑补帝","吐槽役","锦鲤体质","倒霉蛋","傲骨","圣母(褒义)","妹控","弟控","宠妻狂魔","恋爱脑","事业脑","铁树开花","洁癖","路痴","毒医","鬼畜","忠犬","狂犬","疯狗","鉴茶达人","狂傲不羁","温润如玉","谦谦君子","桀骜不驯","没心没肺","敏感多疑","占有欲爆棚","控制狂","没安全感","厌世","救赎者","慕强","恃宠而骄","嘴硬心软","笑面虎","纯情","闷骚","明骚","记仇","护犊子","理性至上","务实","莽夫","智性恋","白莲花(黑化前)","伪善","阴鸷","狠辣","佛口蛇心","知心姐姐","霸道","深情舔狗","摆烂王","端水大师","假正经","斯文败类","妈粉","圣父","怯懦","讨好型人格","戏精本精","伪音大佬","细节控","强迫症晚期","拖延症","社交悍匪","社交恐怖分子","糊弄学大师","鸽王","杠精","键盘侠","懂王","糊涂蛋","佛系青年","狼狗","奶狗","清冷感","破碎感","宿命感","纯爱战神","乐子人","谜语人","阴阳怪气","懂事得让人心疼","乖乖女","中二病","口嫌体正直","铁面无私","刚正不阿","虚无主义者","享乐主义者","守财奴","主角光环","万人嫌","炮灰","背景板","白月光","意难平"],
        job: ["霸道总裁","娱乐圈顶流","影帝/影后","糊咖","练习生","站姐/代拍","经纪人","狗仔","法医","刑警","律师","心理咨询师","医生","护士","大学教授","学霸","学渣","校草/校花","天才黑客","全栈程序员","UI设计师","网文作者","自由插画师","虚拟主播","电竞大神","游戏主播","收租房东","拆二代","外卖神王","霸总特助","豪门管家","私家侦探","雇佣兵","金牌杀手","特工/间谍","赛车手","宇航员","疯狂科学家","考古学家","财阀掌权人","破产千金","剑修","法修","医修","符修","阵法师","炼丹宗师","御兽师","魔尊","仙尊","妖王","鬼王","冥界帝王","堕落神明","吸血鬼亲王","狼人首领","精灵王","龙族太子","人鱼","虫母","星际海盗","帝国元帅","联邦上将","机甲单兵","机甲制造师","药剂师","精神力向导","顶级哨兵","废柴流主角","退婚流主角","无限流老玩家","副本NPC","恐怖游戏主神","时空局探员","穿书局员工","反派扮演者","全息网游大神","生活职业宗师","地下城主","冒险者","吟游诗人","圣骑士","亡灵法师","占星师","风水先生","龙虎山天师","赶尸人","苗疆蛊师","摸金校尉","军阀","民国戏子","王女","锦衣卫","东厂督主","帝王","太子","摄政王","权臣","大将军","冷宫废后","暗卫/影卫","情报阁主","魔教圣女","宗门掌门","真传弟子","外门杂役","隐世高人","扫地僧","魔法少女","炼金术士","赏金猎人","龙骑士","牧师","祭司","神官","异端审判者","刺客","召唤师","傀儡师","阴阳师","除妖师","猎魔人","审判长","典狱长","狱警","敛骨人","守墓人","摆渡人","妖帝","神帝","创世神","破坏神","堕天使","矮人国王","地精商人","龙族长老","海神","森林之神","大地之母","太阳神","月神","星神","时空管理者","快穿宿主","系统精灵","主神空间掌控者","隐藏boss","守关boss","新手村村长","裁缝","鉴定师","拍卖师","商会会长"],
        npc: ["父亲","母亲","哥哥","弟弟","姐姐","妹妹","青梅竹马","天降系","宿敌","导师","挚友","初恋","前任","暗恋者","死对头","忠诚下属","神秘保护者","竞争对手","契约伴侣"],
        att: ["溺爱","严厉","表面冷漠内心关心","极度厌恶","利用工具","病娇占有","默默守护","相爱相杀","敬畏","嫉妒","无条件信任","欢喜冤家","盲目崇拜","暗中打压","视如己出","互相救赎"]
    };

    const genOpts = (arr, type, name) => arr.map(v => `<label class="u-label"><input type="${type}" name="${name}" value="${v}"><span class="u-tag ${name==='u-npc'?'u-tag-plus':''}">${name==='u-npc'?'+ ':''}${v}</span></label>`).join('');

    const panelHtml = `
        <div id="unico-panel" style="display:none; position:fixed; top:5%; left:50%; transform:translateX(-50%); width:90%; max-width:650px; height:85%; background:#fff9fc; border:3px dashed #ffcce0; border-radius:20px; z-index:99998; padding:20px; box-shadow:0 10px 30px rgba(255,182,193,0.5); overflow-y:auto; font-family:sans-serif; color:#555;">
            <div style="text-align:right;"><button id="unico-close" style="background:none; border:none; font-size:24px; color:#f06292; cursor:pointer;">✖</button></div>
            <div style="text-align:center; margin-bottom:20px;">
                <div style="display:inline-block; background:linear-gradient(135deg,#e0c3fc 0%,#8ec5fc 100%); width:40px; height:40px; border-radius:50%; line-height:40px; color:white; font-size:20px; margin-bottom:10px;">🤍</div>
                <h2 style="color:#f48fb1; margin:0; text-shadow:1px 1px 2px #fff;">为你生成专属的设定</h2>
            </div>
            <style>
                .u-card { background:#fff; border:2px dashed #ffcce0; border-radius:15px; padding:15px; margin-bottom:15px; }
                .u-title { color:#f06292; font-size:16px; font-weight:bold; margin-bottom:12px; }
                .u-input { width:100%; border:1px dashed #ffcce0; padding:10px; border-radius:8px; outline:none; color:#555; margin-top:10px; font-size:13px; background:#fffafc; box-sizing:border-box;}
                .u-tags { display:flex; flex-wrap:wrap; gap:8px; max-height:300px; overflow-y:auto; padding-bottom:5px; }
                .u-tags::-webkit-scrollbar { width:5px; } .u-tags::-webkit-scrollbar-thumb { background:#ffcce0; border-radius:5px; }
                .u-label input { display:none; }
                .u-tag { display:inline-block; padding:6px 12px; border:1px dashed #b3e5fc; border-radius:20px; font-size:13px; color:#78909c; cursor:pointer; transition:all 0.2s; background:#fff; user-select:none; }
                .u-label input:checked + .u-tag { border-color:#f06292; color:#f06292; background:#fce4ec; font-weight:bold; }
                .u-tag-rnd { border-color:#a5d6a7; color:#4caf50; background:#e8f5e9; }
                .u-tag-plus { border-color:#ce93d8; color:#ab47bc; background:#f3e5f5; }
            </style>
            <div class="u-card"><div class="u-title">📝 基础信息</div>
                <input type="text" class="u-input" id="u-name" placeholder="输入姓名...">
                <div style="display:flex; gap:10px; margin-top:5px;"><input type="text" class="u-input" id="u-gender" value="女" placeholder="性别..."><input type="number" class="u-input" id="u-age" value="22" placeholder="年龄..."></div>
                <input type="number" class="u-input" id="u-wordcount" value="5000" placeholder="期望字数...">
            </div>
            <div class="u-card"><div class="u-title">🏡 原生家庭/背景 (多选)</div><div class="u-tags"><label class="u-label"><input type="checkbox" name="u-bg" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.bg, 'checkbox', 'u-bg')}</div><input type="text" class="u-input u-custom" placeholder="自定义背景..."></div>
            <div class="u-card"><div class="u-title">🌍 时代背景 (单选)</div><div class="u-tags"><label class="u-label"><input type="radio" name="u-era" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.era, 'radio', 'u-era')}</div><input type="text" class="u-input u-custom" placeholder="自定义时代..."></div>
            <div class="u-card"><div class="u-title">🎨 发色 (单选)</div><div class="u-tags"><label class="u-label"><input type="radio" name="u-hc" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.hc, 'radio', 'u-hc')}</div><input type="text" class="u-input u-custom" placeholder="自定义发色..."></div>
            <div class="u-card"><div class="u-title">💇‍♀️ 发型 (单选)</div><div class="u-tags"><label class="u-label"><input type="radio" name="u-hs" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.hs, 'radio', 'u-hs')}</div><input type="text" class="u-input u-custom" placeholder="自定义发型..."></div>
            <div class="u-card"><div class="u-title">👁️ 瞳色 (单选)</div><div class="u-tags"><label class="u-label"><input type="radio" name="u-ec" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.ec, 'radio', 'u-ec')}</div><input type="text" class="u-input u-custom" placeholder="自定义瞳色..."></div>
            <div class="u-card"><div class="u-title">🌸 外貌特征 (多选)</div><div class="u-tags"><label class="u-label"><input type="checkbox" name="u-look" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.look, 'checkbox', 'u-look')}</div><input type="text" class="u-input u-custom" placeholder="自定义外貌..."></div>
            <div class="u-card"><div class="u-title">👗 穿衣风格 (多选)</div><div class="u-tags"><label class="u-label"><input type="checkbox" name="u-clo" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.clo, 'checkbox', 'u-clo')}</div><input type="text" class="u-input u-custom" placeholder="自定义穿衣..."></div>
            <div class="u-card"><div class="u-title">🎭 性格特征 (多选)</div><div class="u-tags"><label class="u-label"><input type="checkbox" name="u-pers" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.pers, 'checkbox', 'u-pers')}</div><input type="text" class="u-input u-custom" placeholder="自定义性格..."></div>
            <div class="u-card"><div class="u-title">💼 职业与身份 (多选)</div><div class="u-tags"><label class="u-label"><input type="checkbox" name="u-job" value="随机"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.job, 'checkbox', 'u-job')}</div><input type="text" class="u-input u-custom" placeholder="自定义身份/职业..."></div>
            <div class="u-card"><div class="u-title">👥 配角关系 (点击弹窗设定态度)</div><div class="u-tags" id="npc-container"><label class="u-label"><input type="checkbox" name="u-npc" value="随机" class="npc-checkbox"><span class="u-tag u-tag-rnd">🎲 随机</span></label>${genOpts(data.npc, 'checkbox', 'u-npc').replace(/name="u-npc"/g, 'name="u-npc" class="npc-checkbox"')}</div><input type="text" class="u-input u-custom" placeholder="+ 自定义角色..."></div>
            
            <button id="unico-send" style="width:100%; background:#fce4ec; color:#d86c99; font-weight:bold; border:2px dashed #ffcce0; border-radius:10px; padding:15px; cursor:pointer; font-size:16px; margin-bottom:20px;">✨ 一键填入聊天框 ✨</button>
        </div>

        <div id="unico-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.8); z-index:99999; backdrop-filter:blur(5px);">
            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:85%; max-width:400px; background:#fff; border:2px dashed #f48fb1; border-radius:20px; padding:20px; box-shadow:0 10px 25px rgba(244,143,177,0.3);">
                <div style="display:flex; justify-content:space-between; margin-bottom:15px;"><div style="color:#d86c99; font-weight:bold;">♡ 设定配角态度</div><button id="modal-close" style="background:none; border:none; font-size:20px; color:#ccc; cursor:pointer;">✖</button></div>
                <div style="font-size:12px; color:#888; margin-bottom:5px;">角色身份</div><div id="modal-role-name" style="background:#fce4ec; color:#d86c99; padding:8px; border-radius:8px; font-weight:bold; margin-bottom:15px; text-align:center;"></div>
                <div style="font-size:12px; color:#888; margin-bottom:10px;">对你的态度 (多选)</div><div class="u-tags" style="margin-bottom:20px;">${genOpts(data.att, 'checkbox', 'modal-att')}</div>
                <button id="modal-save" style="width:100%; background:linear-gradient(135deg,#f48fb1 0%,#8ec5fc 100%); color:#fff; font-weight:bold; border:none; border-radius:10px; padding:12px;">保存设定</button>
            </div>
        </div>
    `;
    $('body').append(panelHtml);

    $('#unico-btn').on('click', () => $('#unico-panel').fadeIn());
    $('#unico-close').on('click', () => $('#unico-panel').fadeOut());

    $('.npc-checkbox').on('change', function() {
        let roleName = $(this).val();
        if(roleName === '随机') return;
        if(this.checked) {
            $('#modal-role-name').text(roleName);
            $('input[name="modal-att"]').prop('checked', false);
            $('#unico-modal').fadeIn();
        } else { delete window.unicoNpcAttitudes[roleName]; }
    });

    $('#modal-close').on('click', () => {
        $(`.npc-checkbox[value="${$('#modal-role-name').text()}"]`).prop('checked', false);
        $('#unico-modal').fadeOut();
    });

    $('#modal-save').on('click', () => {
        let role = $('#modal-role-name').text();
        let atts = []; $('input[name="modal-att"]:checked').each(function(){ atts.push($(this).val()); });
        window.unicoNpcAttitudes[role] = atts.length > 0 ? atts.join('、') : "态度不明";
        $('#unico-modal').fadeOut();
    });

    $('#unico-send').on('click', () => {
        let sum = [`[要求]姓名:${$('#u-name').val()||"无"}，性别:${$('#u-gender').val()}，年龄:${$('#u-age').val()}，期望字数:${$('#u-wordcount').val()}`];
        const cats = {'u-bg':'背景','u-era':'时代','u-hc':'发色','u-hs':'发型','u-ec':'瞳色','u-look':'外貌','u-clo':'穿搭','u-pers':'性格','u-job':'职业'};
        for (let k in cats) {
            let v = []; $(`input[name="${k}"]:checked`).each(function(){ v.push($(this).parent().text().replace('🎲 随机','随机').trim()); });
            if(v.length>0) sum.push(`[${cats[k]}] ${v.join('、')}`);
        }
        let npcs = [];
        for (let n in window.unicoNpcAttitudes) npcs.push(`${n}(态度:${window.unicoNpcAttitudes[n]})`);
        if(npcs.length>0) sum.push(`[配角关系] ${npcs.join('，')}`);
        
        let cst = []; $('.u-custom').each(function(){ if($(this).val().trim()!=='') cst.push($(this).val().trim()); });
        if(cst.length>0) sum.push(`[补充] ${cst.join('、')}`);

        let chatInput = document.getElementById('send_textarea');
        if (chatInput) {
            chatInput.value = "系统指令：请根据以下属性设定与我展开对话：\n" + sum.join(' | ');
            chatInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        $('#unico-panel').fadeOut();
    });
});

