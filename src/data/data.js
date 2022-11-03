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

const data = {
    aether_anemo: { img: "aether", ...aether, element: "Anemo" },
    aether_dendro: { img: "aether", ...aether, element: "Dendro", releasedate: "2022-08-24", releaseversion: "3.0" },
    aether_geo: { img: "aether", ...aether, element: "Geo" },
    aether_electro: { img: "aether", ...aether, element: "Electro", releasedate: "2021-07-21", releaseversion: "2.0" },
    albedo: { img: "albedo", ...albedo },
    aloy: { img: "aloy", ...aloy },
    amber: { img: "amber", ...amber },
    aratakiitto: { img: "aratakiitto", ...aratakiitto },
    barbara: { img: "barbara", ...barbara },
    beidou: { img: "beidou", ...beidou },
    bennett: { img: "bennett", ...bennett },
    candace: { img: "candace", ...candace },
    chongyun: { img: "chongyun", ...chongyun },
    collei: { img: "collei", ...collei },
    cyno: { img: "cyno", ...cyno },
    diluc: { img: "diluc", ...diluc },
    diona: { img: "diona", ...diona },
    dori: { img: "dori", ...dori },
    eula: { img: "eula", ...eula },
    fischl: { img: "fischl", ...fischl },
    ganyu: { img: "ganyu", ...ganyu },
    gorou: { img: "gorou", ...gorou },
    hutao: { img: "hutao", ...hutao },
    jean: { img: "jean", ...jean },
    kaedeharakazuha: { img: "kaedeharakazuha", ...kaedeharakazuha },
    kaeya: { img: "kaeya", ...kaeya },
    kamisatoayaka: { img: "kamisatoayaka", ...kamisatoayaka },
    kamisatoayato: { img: "kamisatoayato", ...kamisatoayato },
    keqing: { img: "keqing", ...keqing },
    klee: { img: "klee", ...klee },
    kujousara: { img: "kujousara", ...kujousara },
    kukishinobu: { img: "kukishinobu", ...kukishinobu },
    lisa: { img: "lisa", ...lisa },
    lumine_anemo: { img: "lumine", ...lumine, element: "Anemo" },
    lumine_dendro: { img: "lumine", ...lumine, element: "Dendro", releasedate: "2022-08-24", releaseversion: "3.0" },
    lumine_geo: { img: "lumine", ...lumine, element: "Geo" },
    lumine_electro: { img: "lumine", ...lumine, element: "Electro", releasedate: "2021-07-21", releaseversion: "2.0" },
    mona: { img: "mona", ...mona },
    nahida: { img: "nahida", ...nahida },
    nilou: { img: "nilou", ...nilou },
    ningguang: { img: "ningguang", ...ningguang },
    noelle: { img: "noelle", ...noelle },
    qiqi: { img: "qiqi", ...qiqi },
    raidenshogun: { img: "raidenshogun", ...raidenshogun },
    razor: { img: "razor", ...razor },
    rosaria: { img: "rosaria", ...rosaria },
    sangonomiyakokomi: { img: "sangonomiyakokomi", ...sangonomiyakokomi },
    sayu: { img: "sayu", ...sayu },
    shenhe: { img: "shenhe", ...shenhe },
    shikanoinheizou: { img: "shikanoinheizou", ...shikanoinheizou },
    sucrose: { img: "sucrose", ...sucrose },
    tartaglia: { img: "tartaglia", ...tartaglia },
    thoma: { img: "thoma", ...thoma },
    tighnari: { img: "tighnari", ...tighnari },
    venti: { img: "venti", ...venti },
    xiangling: { img: "xiangling", ...xiangling },
    xiao: { img: "xiao", ...xiao },
    xingqiu: { img: "xingqiu", ...xingqiu },
    xinyan: { img: "xinyan", ...xinyan },
    yaemiko: { img: "yaemiko", ...yaemiko },
    yanfei: { img: "yanfei", ...yanfei },
    yelan: { img: "yelan", ...yelan },
    yoimiya: { img: "yoimiya", ...yoimiya },
    yunjin: { img: "yunjin", ...yunjin },
    zhongli: { img: "zhongli", ...zhongli },
};

export default data;
