export function getTopics(file) {
  const lines = file.trim().split("\n");
  const topics = [];
  lines.forEach((line) => {
    if (line.startsWith("# ")) {
      const topic = line.split(" ").slice(1).join(" ");
      topics.push({
        heading: 1,
        topic,
      });
    } else if (line.startsWith("## ")) {
      const topic = line.split(" ").slice(1).join(" ");
      topics.push({
        heading: 2,
        topic,
      });
    } else if (line.startsWith("### ")) {
      const topic = line.split(" ").slice(1).join(" ");
      topics.push({
        heading: 3,
        topic,
      });
    } else if (line.startsWith("#### ")) {
      const topic = line.split(" ").slice(1).join(" ");
      topics.push({
        heading: 4,
        topic,
      });
    } else if (line.startsWith("##### ")) {
      const topic = line.split(" ").slice(1).join(" ");
      topics.push({
        heading: 5,
        topic,
      });
    } else if (line.startsWith("###### ")) {
      const topic = line.split(" ").slice(1).join(" ");
      topics.push({
        heading: 6,
        topic,
      });
    }
  });
  return `${topics
    .map((topic) => {
      let result = ``;
      for (let i = 1; i < topic.heading; i++) {
        result += `  `;
      }
      // change space into - and let capital letter to lower case
      result += `- [${topic.topic}](#${topic.topic
        .replaceAll(" ", "-")
        .toLowerCase()})<br>`;
      return result;
    })
    .join("\n")}`;
}
