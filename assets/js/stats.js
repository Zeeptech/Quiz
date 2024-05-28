export const stats = {
};

export function addStats(stat,points){
    if(stats[stat]){
        stats[stat] += points;
    }
    else{
        stats[stat] = points;
    }
};

