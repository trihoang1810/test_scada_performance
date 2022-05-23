import React from "react";
import { HttpTransportType, HubConnectionBuilder } from "@microsoft/signalr";
import { getTagsData } from "./utils";

function FlexibleTest() {
  const [connection, setConnection] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [comparedData, setComparedData] = React.useState([]);
  React.useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl(process.env.REACT_APP_BASE_HUB_URL, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();
    connect
      .start()
      .then(() => {
        setConnection(connect);
      })
      .catch((e) => console.error("Co loi", e));
    return () => {
      connect.stop();
    };
  }, []);
  const startCompare = async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      Promise.all([
        getTagsData(
          connection,
          "imm",
          ["l6"],
          [
            [
              `L6.CycleTime`,
              `L6.OpenTime`,
              `L6.CounterShot`,
              `L6.SetCycle`,
              `L6.MachineStatus`,
            ],
          ]
        ),
        getTagsData(
          connection,
          "imm",
          ["l7"],
          [
            [
              `L7.CycleTime`,
              `L7.OpenTime`,
              `L7.CounterShot`,
              `L7.SetCycle`,
              `L7.MachineStatus`,
            ],
          ]
        ),
        getTagsData(
          connection,
          "imm",
          ["l8"],
          [
            [
              `L8.CycleTime`,
              `L8.OpenTime`,
              `L8.CounterShot`,
              `L8.SetCycle`,
              `L8.MachineStatus`,
            ],
          ]
        ),
        getTagsData(
          connection,
          "imm",
          ["l9"],
          [
            [
              `L9.CycleTime`,
              `L9.OpenTime`,
              `L9.CounterShot`,
              `L9.SetCycle`,
              `L9.MachineStatus`,
            ],
          ]
        ),
        getTagsData(
          connection,
          "imm",
          ["l10"],
          [
            [
              `L10.CycleTime`,
              `L10.OpenTime`,
              `L10.CounterShot`,
              `L10.SetCycle`,
              `L10.MachineStatus`,
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
      // let b = new Date();
      // console.log("Bắt đầu truy xuất phương pháp 2 vào lúc", b.getTime());
      // getTagsData(
      //   connection,
      //   "imm",
      //   ["l10", "l6", "l7", "l8", "l9"],
      //   [
      //     [
      //       `L10.CycleTime`,
      //       `L10.OpenTime`,
      //       `L10.CounterShot`,
      //       `L10.SetCycle`,
      //       `L10.MachineStatus`,
      //     ],
      //     [
      //       `L6.CycleTime`,
      //       `L6.OpenTime`,
      //       `L6.CounterShot`,
      //       `L6.SetCycle`,
      //       `L6.MachineStatus`,
      //     ],
      //     [
      //       `L7.CycleTime`,
      //       `L7.OpenTime`,
      //       `L7.CounterShot`,
      //       `L7.SetCycle`,
      //       `L7.MachineStatus`,
      //     ],
      //     [
      //       `L8.CycleTime`,
      //       `L8.OpenTime`,
      //       `L8.CounterShot`,
      //       `L8.SetCycle`,
      //       `L8.MachineStatus`,
      //     ],
      //     [
      //       `L9.CycleTime`,
      //       `L9.OpenTime`,
      //       `L9.CounterShot`,
      //       `L9.SetCycle`,
      //       `L9.MachineStatus`,
      //     ],
      //   ]
      // ).then((res) => {
      //   let c = new Date();
      //   console.log("Kết thúc phương pháp 2 vào lúc", c.getTime());
      //   console.log("Độ trễ phương pháp 2: ", c - b, "ms");
      //   setComparedData(res);
      // });
    }
  };
  return (
    <>
      <div>
        FLEXIBLE TEST:
        <ul>
          <li>
            Thực hiện 5 lần query 5 máy ép (mỗi query một lần đưa vào
            Promise.all) một lúc cho khu vực máy ép, tương ứng với từng device,
            so sánh kết quả với khi thực hiện query 1 lần với 5 device
          </li>
        </ul>
      </div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <div>__________________________________________________</div>
      <pre>
        <code>{JSON.stringify(comparedData, null, 2)}</code>
      </pre>
      <button onClick={startCompare}>BẮT ĐẦU SO SÁNH</button>
      <div>Quan sát console</div>
    </>
  );
}

export default FlexibleTest;
