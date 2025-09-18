import { v } from "convex/values";
import {mutation, query} from "./_generated/server";

export const getMany= query({
    args: {},
    handler: async (ctx) => {
        const users =  await ctx.db.query("users").collect();
        return users;
    }
});

export const addUser = mutation({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect();
        const user = await ctx.db.insert("users", { name: `New User${users.length + 1}` });
        return user;
    }
})