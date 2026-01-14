import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2Icon, FileType2Icon, LucideLanguages, Network } from "lucide-react";

export default function Training(){
    return (
      <div className="w-full mt-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-bold mt-4 text-center">
          We Training Students At
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 my-4 grid-cols-1 mt-12 px-4 py-4">
          <Card className="bg-blue-950/50 text-2xl text-gray-300 outline-1 border-blue-800 hover:bg-blue-950/10 duration-200 hover:scale-102 hover:z-10  ">
            <CardHeader>
              <CardTitle className="inline-block">
                <Code2Icon className="size-10 inline-block" /> web devlopment{" "}
              </CardTitle>
            </CardHeader>
            <CardDescription className="mx-2 text-xl text-gray-400 p-4 ">
              we train students at web devlopment full stok webdevlopment ,
              frontend webdevlopment , backend webdevlopment
            </CardDescription>
          </Card>

          <Card className="bg-blue-950/50 text-2xl text-gray-300 outline-1 border-blue-800 hover:bg-blue-950/10 duration-200 hover:scale-102 hover:z-10">
            <CardHeader>
              <CardTitle className="inline-block">
                <FileType2Icon className="size-10 inline-block" /> Programming
                Languages{" "}
              </CardTitle>
            </CardHeader>
            <CardDescription className="mx-2 text-xl text-gray-400 p-4 ">
              we train students at web devlopment full stok webdevlopment ,
              frontend webdevlopment , backend webdevlopment
            </CardDescription>
          </Card>

          <Card className="bg-blue-950/50 text-2xl text-gray-300 outline-1 border-blue-800 hover:bg-blue-950/10 duration-200 hover:scale-102 hover:z-10 ">
            <CardHeader>
              <CardTitle className="inline-block">
                <Network className="size-8 inline-block" /> Network{" "}
              </CardTitle>
            </CardHeader>
            <CardDescription className="mx-2 text-xl text-gray-400 p-4 ">
              we train students at Network : network CCIT , network CCNA ,
              network CCNP
            </CardDescription>
          </Card>
        </div>
      </div>
    );
}