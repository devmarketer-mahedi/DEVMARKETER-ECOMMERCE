import { stackServerApp } from "@/stack";

export const GET = async (request) => {
  return await stackServerApp.handleRequest(request);
};

export const POST = async (request) => {
  return await stackServerApp.handleRequest(request);
};
