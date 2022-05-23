import React from "react";
import { HttpTransportType, HubConnectionBuilder } from "@microsoft/signalr";
import { getTagsData } from "./utils";
function ScalabilityTest() {
  const [data, setData] = React.useState([]);
  const [connection, setConnection] = React.useState(null);
  React.useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl("http://10.84.70.80:8085/websockethub", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();
    connection
      .start()
      .then(() => {
        setConnection(connection);
      })
      .catch((e) => console.error("Có lỗi", e));
  }, []);
  const handleClick = () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      Promise.all([
        getTagsData(
          connection,
          "as",
          ["lr1", "lr2", "lr3", "lr4", "lr5"],
          [
            ["LR1.MachineStatus", "LR1.CurrentValue"],
            ["LR2.MachineStatus", "LR2.CurrentValue"],
            ["LR3.MachineStatus", "LR3.CurrentValue"],
            ["LR4.MachineStatus", "LR4.CurrentValue"],
            ["LR5.MachineStatus", "LR5.CurrentValue"],
          ]
        ),
        getTagsData(
          connection,
          "ps",
          ["dg1", "dg2", "dg3", "dg4", "dg5", "dg6"],
          [
            ["DG1.ErrorProduct", "DG1.CompletedProduct", "DG1.MachineStatus"],
            ["DG2.ErrorProduct", "DG2.CompletedProduct", "DG2.MachineStatus"],
            ["DG3.ErrorProduct", "DG3.CompletedProduct", "DG3.MachineStatus"],
            ["DG4.ErrorProduct", "DG4.CompletedProduct", "DG4.MachineStatus"],
            ["DG5.ErrorProduct", "DG5.CompletedProduct", "DG5.MachineStatus"],
            ["DG6.ErrorProduct", "DG6.CompletedProduct", "DG6.MachineStatus"],
          ]
        ),
        getTagsData(
          connection,
          "imm",
          ["l10", "l6", "l7", "l8", "l9"],
          [
            [
              `L10.CycleTime`,
              `L10.OpenTime`,
              `L10.CounterShot`,
              `L10.SetCycle`,
              `L10.MachineStatus`,
            ],
            [
              `L6.CycleTime`,
              `L6.OpenTime`,
              `L6.CounterShot`,
              `L6.SetCycle`,
              `L6.MachineStatus`,
            ],
            [
              `L7.CycleTime`,
              `L7.OpenTime`,
              `L7.CounterShot`,
              `L7.SetCycle`,
              `L7.MachineStatus`,
            ],
            [
              `L8.CycleTime`,
              `L8.OpenTime`,
              `L8.CounterShot`,
              `L8.SetCycle`,
              `L8.MachineStatus`,
            ],
            [
              `L9.CycleTime`,
              `L9.OpenTime`,
              `L9.CounterShot`,
              `L9.SetCycle`,
              `L9.MachineStatus`,
            ],
          ]
        ),
      ])
        .then((res) => {
          let b = new Date();
          console.log("Kết thúc vào lúc", b.getTime());
          console.log("Độ trễ: ", b - a, "ms");
          setData(res);
        })
        .catch((e) => console.error("Có lỗi", e));
    }
  };
  return (
    <>
      <div>
        SCALABILITY TEST: Thực hiện một lần query 3 node, tối đa device và tối
        đa tag, cùng lúc, đưa vào promise all và kiểm tra thời gian thực hiện
        xong
      </div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <button onClick={handleClick}>Thực hiện kiểm tra</button>
    </>
  );
}

export default ScalabilityTest;
