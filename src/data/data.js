import aether from "./characters/aether.json";
import albedo from "./characters/albedo.json";
import aloy from "./characters/aloy.json";
import amber from "./characters/amber.json";
import aratakiitto from "./characters/aratakiitto.json";
import barbara from "./characters/barbara.json";
import beidou from "./characters/beidou.json";
import bennett from "./characters/bennett.json";
import candace from "./characters/candace.json";
import chongyun from "./characters/chongyun.json";
import collei from "./characters/collei.json";
import cyno from "./characters/cyno.json";
import diluc from "./characters/diluc.json";
import diona from "./characters/diona.json";
import dori from "./characters/dori.json";
import eula from "./characters/eula.json";
import fischl from "./characters/fischl.json";
import ganyu from "./characters/ganyu.json";
import gorou from "./characters/gorou.json";
import hutao from "./characters/hutao.json";
import jean from "./characters/jean.json";
import kaedeharakazuha from "./characters/kaedeharakazuha.json";
import kaeya from "./characters/kaeya.json";
import kamisatoayaka from "./characters/kamisatoayaka.json";
import kamisatoayato from "./characters/kamisatoayato.json";
import keqing from "./characters/keqing.json";
import klee from "./characters/klee.json";
import kujousara from "./characters/kujousara.json";
import kukishinobu from "./characters/kukishinobu.json";
import lisa from "./characters/lisa.json";
import lumine from "./characters/lumine.json";
import mona from "./characters/mona.json";
import nahida from "./characters/nahida.json";
import nilou from "./characters/nilou.json";
import ningguang from "./characters/ningguang.json";
import noelle from "./characters/noelle.json";
import qiqi from "./characters/qiqi.json";
import raidenshogun from "./characters/raidenshogun.json";
import razor from "./characters/razor.json";
import rosaria from "./characters/rosaria.json";
import sayu from "./characters/sayu.json";
import shenhe from "./characters/shenhe.json";
import sangonomiyakokomi from "./characters/sangonomiyakokomi.json";
import shikanoinheizou from "./characters/shikanoinheizou.json";
import sucrose from "./characters/sucrose.json";
import tartaglia from "./characters/tartaglia.json";
import thoma from "./characters/thoma.json";
import tighnari from "./characters/tighnari.json";
import venti from "./characters/venti.json";
import xiangling from "./characters/xiangling.json";
import xiao from "./characters/xiao.json";
import xingqiu from "./characters/xingqiu.json";
import xinyan from "./characters/xinyan.json";
import yaemiko from "./characters/yaemiko.json";
import yanfei from "./characters/yanfei.json";
import yelan from "./characters/yelan.json";
import yoimiya from "./characters/yoimiya.json";
import yunjin from "./characters/yunjin.json";
import zhongli from "./characters/zhongli.json";
import alhaitham from "./characters/alhaitham.json";
import baizhu from "./characters/baizhu.json";
import dehya from "./characters/dehya.json";
import faruzan from "./characters/faruzan.json";
import kaveh from "./characters/kaveh.json";
import layla from "./characters/layla.json";
import mika from "./characters/mika.json";
import wanderer from "./characters/wanderer.json";
import yaoyao from "./characters/yaoyao.json";

import extendedData from "./characters_extended.json";

const data = {
    alhaitham: { img: "alhaitham", ...alhaitham, ...extendedData.alhaitham },
    baizhu: { img: "baizhu", ...baizhu, ...extendedData.baizhu },
    dehya: { img: "dehya", ...dehya, ...extendedData.dehya },
    faruzan: { img: "faruzan", ...faruzan, ...extendedData.faruzan },
    kaveh: { img: "kaveh", ...kaveh, ...extendedData.kaveh },
    layla: { img: "layla", ...layla, ...extendedData.layla },
    mika: { img: "mika", ...mika, ...extendedData.mika },
    wanderer: { img: "wanderer", ...wanderer, ...extendedData.wanderer },
    yaoyao: { img: "yaoyao", ...yaoyao, ...extendedData.yaoyao },

    aether_anemo: { img: "aether", ...aether, ...extendedData.aether_anemo },
    aether_dendro: { img: "aether", ...aether, ...extendedData.aether_dendro },
    aether_geo: { img: "aether", ...aether, ...extendedData.aether_geo },
    aether_electro: { img: "aether", ...aether, ...extendedData.aether_electro },
    albedo: { img: "albedo", ...albedo, ...extendedData.albedo },
    aloy: { img: "aloy", ...aloy, ...extendedData.aloy },
    amber: { img: "amber", ...amber, ...extendedData.amber },
    aratakiitto: { img: "aratakiitto", ...aratakiitto, ...extendedData.aratakiitto },
    barbara: { img: "barbara", ...barbara, ...extendedData.barbara },
    beidou: { img: "beidou", ...beidou, ...extendedData.beidou },
    bennett: { img: "bennett", ...bennett, ...extendedData.bennett },
    candace: { img: "candace", ...candace, ...extendedData.candace },
    chongyun: { img: "chongyun", ...chongyun, ...extendedData.chongyun },
    collei: { img: "collei", ...collei, ...extendedData.collei },
    cyno: { img: "cyno", ...cyno, ...extendedData.cyno },
    diluc: { img: "diluc", ...diluc, ...extendedData.diluc },
    diona: { img: "diona", ...diona, ...extendedData.diona },
    dori: { img: "dori", ...dori, ...extendedData.dori },
    eula: { img: "eula", ...eula, ...extendedData.eula },
    fischl: { img: "fischl", ...fischl, ...extendedData.fischl },
    ganyu: { img: "ganyu", ...ganyu, ...extendedData.ganyu },
    gorou: { img: "gorou", ...gorou, ...extendedData.gorou },
    hutao: { img: "hutao", ...hutao, ...extendedData.hutao },
    jean: { img: "jean", ...jean, ...extendedData.jean },
    kaedeharakazuha: { img: "kaedeharakazuha", ...kaedeharakazuha, ...extendedData.kaedeharakazuha },
    kaeya: { img: "kaeya", ...kaeya, ...extendedData.kaeya },
    kamisatoayaka: { img: "kamisatoayaka", ...kamisatoayaka, ...extendedData.kamisatoayaka },
    kamisatoayato: { img: "kamisatoayato", ...kamisatoayato, ...extendedData.kamisatoayato },
    keqing: { img: "keqing", ...keqing, ...extendedData.keqing },
    klee: { img: "klee", ...klee, ...extendedData.klee },
    kujousara: { img: "kujousara", ...kujousara, ...extendedData.kujousara },
    kukishinobu: { img: "kukishinobu", ...kukishinobu, ...extendedData.kukishinobu },
    lisa: { img: "lisa", ...lisa, ...extendedData.lisa },
    lumine_anemo: { img: "lumine", ...lumine, ...extendedData.lumine_anemo },
    lumine_dendro: { img: "lumine", ...lumine, ...extendedData.lumine_dendro },
    lumine_geo: { img: "lumine", ...lumine, ...extendedData.lumine_geo },
    lumine_electro: { img: "lumine", ...lumine, ...extendedData.lumine_electro },
    mona: { img: "mona", ...mona, ...extendedData.mona },
    nahida: { img: "nahida", ...nahida, ...extendedData.nahida },
    nilou: { img: "nilou", ...nilou, ...extendedData.nilou },
    ningguang: { img: "ningguang", ...ningguang, ...extendedData.ningguang },
    noelle: { img: "noelle", ...noelle, ...extendedData.noelle },
    qiqi: { img: "qiqi", ...qiqi, ...extendedData.qiqi },
    raidenshogun: { img: "raidenshogun", ...raidenshogun, ...extendedData.raidenshogun },
    razor: { img: "razor", ...razor, ...extendedData.razor },
    rosaria: { img: "rosaria", ...rosaria, ...extendedData.rosaria },
    sangonomiyakokomi: { img: "sangonomiyakokomi", ...sangonomiyakokomi, ...extendedData.sangonomiyakokomi },
    sayu: { img: "sayu", ...sayu, ...extendedData.sayu },
    shenhe: { img: "shenhe", ...shenhe, ...extendedData.shenhe },
    shikanoinheizou: { img: "shikanoinheizou", ...shikanoinheizou, ...extendedData.shikanoinheizou },
    sucrose: { img: "sucrose", ...sucrose, ...extendedData.sucrose },
    tartaglia: { img: "tartaglia", ...tartaglia, ...extendedData.tartaglia },
    thoma: { img: "thoma", ...thoma, ...extendedData.thoma },
    tighnari: { img: "tighnari", ...tighnari, ...extendedData.tighnari },
    venti: { img: "venti", ...venti, ...extendedData.venti },
    xiangling: { img: "xiangling", ...xiangling, ...extendedData.xiangling },
    xiao: { img: "xiao", ...xiao, ...extendedData.xiao },
    xingqiu: { img: "xingqiu", ...xingqiu, ...extendedData.xingqiu },
    xinyan: { img: "xinyan", ...xinyan, ...extendedData.xinyan },
    yaemiko: { img: "yaemiko", ...yaemiko, ...extendedData.yaemiko },
    yanfei: { img: "yanfei", ...yanfei, ...extendedData.yanfei },
    yelan: { img: "yelan", ...yelan, ...extendedData.yelan },
    yoimiya: { img: "yoimiya", ...yoimiya, ...extendedData.yoimiya },
    yunjin: { img: "yunjin", ...yunjin, ...extendedData.yunjin },
    zhongli: { img: "zhongli", ...zhongli, ...extendedData.zhongli },
};

export default data;
