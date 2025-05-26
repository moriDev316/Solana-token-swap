import { Context } from "telegraf";
import {SplTokenSwap} from "../../services/tokenBuySell";

export const buyCommand = async (ctx: Context) => {
  await ctx.reply("Please enter the amount you want to buy:");
};
