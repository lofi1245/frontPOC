import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

/*
 * NOTE: (CDG) esse é um arquivo exemplo onde são criados "endpoints" tRPC,
 * se for interessante da pra criar um arquivo pra cada ator, mas deixamos esse pensamento pra dps
 */

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  teste: publicProcedure.query(() => {
    return "Lembre de apagar essa página"
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  createExample: publicProcedure.query(({ctx}) => {
    return ctx.prisma.usuario.create({
      data: {
        nome_completo: "Amintas Gomes de Moraes Neto",
        login: "netorubok14@gmail.com",
        senha: "1234"
      }
    })
  }),
});
