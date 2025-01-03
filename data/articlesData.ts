import TRPCImage from "@/public/trpc-article.webp";
import MockImage from "@/public/mock-article.webp";
import FibonacciImage from "@/public/fibonacci-article.webp";

const data = {
  data: [
    {
      title: "Using OpenAPI to detect breaking changes in tRPC",
      subtitle: "Keep your API in check with OpenAPI and schema validation",
      url: "https://medium.com/@fralle/harnessing-openapi-to-track-and-domesticate-wild-trpc-changes-050b24b33a76",
      image: TRPCImage,
      meta: "Medium - 2023",
      tags: ["API", "tRPC", "OpenAPI", "Automation"],
    },
    {
      title: "Mocking tRPC Routes with Type Safety in TypeScript",
      subtitle: "Ensure your mocks always align with your original routes using advanced TypeScript patterns",
      url: "https://medium.com/@fralle/mocking-trpc-routes-with-type-safety-in-typescript-8b8dbc1281b2",
      image: MockImage,
      meta: "Medium - 2023",
      tags: ["API", "tRPC", "Mock", "Testing", "TypeScript"],
    },
    {
      title: "Overengineering the Fibonacci Sequence in JavaScript",
      subtitle: "From a straightforward approach towards more sophisticated and optimized versions",
      url: "https://medium.com/@fralle/overengineering-the-fibonacci-sequence-in-javascript-e209a9e7db2f",
      image: FibonacciImage,
      meta: "Medium - 2023",
      tags: ["Memoization", "Closure", "Algorithms", "JavaScript"],
    },
  ],
};

export default data;
