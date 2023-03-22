import { zeroleft } from "./zero-left";

export function secondsToTime(seconds:number):string{
    const hours=zeroleft(seconds/3600);
    const min=zeroleft((seconds/60)%60);
    const sec=zeroleft((seconds%60)%60)
    return `${hours}:${min}:${sec}`;
}