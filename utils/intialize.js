//Codeforces : cf
//Codechef : cc
//Topcoder : tp
//USACO : us
//SPOJ : sp
//Facebook: fb
//Google  : go
//Hackerrank: hr
//Hackerearth: he
//Atcoder: at
//LeetCode : lc

const intialiaze = () => {
    idToResource.set('1','cf');
    idToResource.set('2','cc');
    idToResource.set('12','tp');
    idToResource.set('25','us');
    idToResource.set('26','sp');
    idToResource.set('29','fb');
    idToResource.set('35','go');
    idToResource.set('63','hr');
    idToResource.set('73','he');
    idToResource.set('93','at');
    idToResource.set('102','lc');

    resourceToId.set('cf',1);
    resourceToId.set('cc',2);
    resourceToId.set('tp',12);
    resourceToId.set('us',25);
    resourceToId.set('sp',26);
    resourceToId.set('fb',29);
    resourceToId.set('go',35);
    resourceToId.set('hr',63);
    resourceToId.set('he',73);
    resourceToId.set('at',93);
    resourceToId.set('lc',102);
}

export default intialiaze;