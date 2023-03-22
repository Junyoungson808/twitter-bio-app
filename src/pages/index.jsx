import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [description, setDescription] = useState("");
  const [output, setOutput] = useState("");

  async function handleRequest() {
    if (!description.trim()) {
      alert("Description cannot be empty");
      return;
    }
    
    const JSONData = JSON.stringify({ description: description });

    const response = await fetch("/api/ai_request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    });
    const result = await response.json();

    setOutput(result.data);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main Screen */}
      <main className="h-full w-full display flex">
        <div className="m-auto mt-60 justify-center text-center">
          <h1 className="text-5xl font-bold text-indigo-400 mb-10 drop-shadow-xl">
            Twitter Bio Generator
          </h1>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRequest();
              }}>
              <p className="mb-5 p-2">
                {
                  "Give us a description of yourself, and we'll generate a Twitter bio for you!"
                }
              </p>

              <div class="flex flex-col items-center">
                <label for="input-box" className="font-bold mb-2">
                  Description{" "}
                </label>
                <input
                  className="w-500 px-4 py-2 border rounded-md mb-4 row-span-4"
                  type="text"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
            {output && <div className="w-500 flex-wrap">{output}</div>}
          </div>
        </div>
      </main>
    </>
  );
}
