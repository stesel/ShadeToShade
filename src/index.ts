type ZeroConfig = Readonly<{
  color: string;
}>;

const content: string = `
  <h1 style="color: green"}>ShadeToShade</h1>`;

function getComputedContent(content: string) {
  return content;
}

function createZeroConfig(): ZeroConfig {
  return { color: "green" };
}

document.getElementById("app").innerHTML = getComputedContent(content);
