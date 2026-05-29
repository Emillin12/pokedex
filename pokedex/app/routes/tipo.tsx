import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Tipos } from "~/tipos/tipos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tipos de pokemon" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Tipos />;
}
