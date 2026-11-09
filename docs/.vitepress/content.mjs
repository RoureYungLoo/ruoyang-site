export const srcExclude = [
  "package-testing/**",
  "source-code/reading/redis/**",
  "computer-science-fundamentals/algorithm-analysis-and-design/01.md",
  "computer-science-fundamentals/algorithm-analysis-and-design/02.md",
  "computer-science-fundamentals/algorithm-analysis-and-design/algorithm_analysis_and_design.md",
  "computer-science-fundamentals/data-structures/data_structures.md",
  "computer-science-fundamentals/data-structures/hash_table.md",
  "computer-science-fundamentals/data-structures/search.md",
  "computer-science-fundamentals/data-structures/sort.md",
  "computer-science-fundamentals/computer-networks/network.md",
  "computer-science-fundamentals/operating-systems/operating_systems.md",
  "computer-science-fundamentals/computer-organization/principles_of_computers.md",
  "databases/non-relational/valkey/index.md",
  "databases/relational/microsoft-sql-server/index.md",
  "interviews/java/annotation.md",
  "interviews/java/concurrency.md",
  "interviews/java/extends.md",
  "interviews/java/io.md",
  "interviews/java/polymorphism.md",
  "interviews/java/proxy.md",
  "interviews/java/reflection.md",
  "interviews/fundamentals/index.md",
  "programming-languages/c-sharp/index.md",
  "programming-languages/go/index.md",
  "programming-languages/structured-query-language/index.md",
  "programming-languages/typescript/index.md",
  "programming-languages/c-plus-plus/10-C++新特性.md",
  "programming-languages/java/Java.md",
  "message-queues/activemq/index.md",
  "message-queues/apollo/index.md",
  "message-queues/rabbitmq/index.md",
  "message-queues/zeromq/index.md",
  "open-source-projects/index.md",
  "search-engines/elasticsearch/index.md",
  "search-engines/lucene/index.md",
  "version-control/subversion/index.md",
];

const excludedFiles = new Set(
  srcExclude.filter((pattern) => !pattern.endsWith("/**")),
);

const excludedDirectories = srcExclude
  .filter((pattern) => pattern.endsWith("/**"))
  .map((pattern) => pattern.slice(0, -3));

export function isSourceExcluded(sourcePath) {
  const normalizedPath = sourcePath.replaceAll("\\", "/");

  return (
    excludedFiles.has(normalizedPath) ||
    excludedDirectories.some(
      (directory) =>
        normalizedPath === directory ||
        normalizedPath.startsWith(`${directory}/`),
    )
  );
}
