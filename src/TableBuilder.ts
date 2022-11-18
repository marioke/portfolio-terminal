export class TableBuilder {
  private columns: Record<string, string> = {};
  private title?: string;
  private static letterSpace = 3;
  private static lineMaxLength = 60;

  public addColumn(name: string, value: string): this {
    this.columns[name] = value;
    return this;
  }

  public withTitle(title: string): this {
    this.title = title;
    return this;
  }

  public toArray(): Array<string> {
    const list: Array<string> = ["<br>"];

    if (this.title) {
      list.push(`<b>${this.title}</b>`);
      list.push("<br>");
    }

    if (window.innerWidth < 768) {
      for (const [name, value] of Object.entries(this.columns)) {
        list.push(`${name}<br>`);
        list.push(`${value}`);
        list.push("<br>");
      }
    } else {
      const longestKeyLength = Object.keys(this.columns).reduce((a, b) =>
        a.length > b.length ? a : b
      ).length;

      Object.keys(this.columns).forEach((key) => {
        const value = this.columns[key];
        const valueParts = value.split(" ");

        let line = `${key.padEnd(longestKeyLength + TableBuilder.letterSpace)}`;
        valueParts.forEach((part) => {
          if (line.length + part.length > TableBuilder.lineMaxLength) {
            list.push(line);
            line = " ".repeat(longestKeyLength + TableBuilder.letterSpace);
          }
          line += part + " ";
        });
        list.push(line);
        list.push("<br>");
      });
    }

    return list;
  }
}
