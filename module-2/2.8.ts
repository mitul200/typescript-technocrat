{
  interface ToDos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const getToDo = async (): Promise<ToDos> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  getToDo();

  interface Somethings {
    something: "something";
  }

  const creatPromis = (): Promise<Somethings> => {
    return new Promise((resolve, reject) => {
      const data: Somethings = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("faild to lode data");
      }
    });
  };

  // calling create promise functon
  const showData = async (): Promise<Somethings> => {
    const data: Somethings = await creatPromis();
    console.log(data);
    return data;
  };
  showData();
}
