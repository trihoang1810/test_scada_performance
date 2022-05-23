import React from "react";
import { HttpTransportType, HubConnectionBuilder } from "@microsoft/signalr";
import { getTagsData } from "./utils";

function LoadTest() {
  const [connection, setConnection] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [packingData, setPackingData] = React.useState([]);
  const [assemblyData, setAssemblyData] = React.useState([]);
  React.useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://10.84.70.80:8085/websockethub", {
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
  const startOneDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
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
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startTwoDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "imm",
        ["l10", "l6"],
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
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startThreeDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "imm",
        ["l10", "l6", "l7"],
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
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startFourDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "imm",
        ["l10", "l6", "l7", "l8"],
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
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startFiveDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
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
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);

  const startOneTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "imm",
        ["l10"],
        [
          [
            `L10.CycleTime`,
            // `L10.OpenTime`,
            // `L10.CounterShot`,
            // `L10.SetCycle`,
            // `L10.MachineStatus`,
          ],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startTwoTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "imm",
        ["l10"],
        [
          [
            `L10.CycleTime`,
            `L10.OpenTime`,
            // `L10.CounterShot`,
            // `L10.SetCycle`,
            // `L10.MachineStatus`,
          ],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startThreeTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "imm",
        ["l10"],
        [
          [
            `L10.CycleTime`,
            `L10.OpenTime`,
            `L10.CounterShot`,
            // `L10.SetCycle`,
            // `L10.MachineStatus`,
          ],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startFourTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "imm",
        ["l10"],
        [
          [
            `L10.CycleTime`,
            `L10.OpenTime`,
            `L10.CounterShot`,
            `L10.SetCycle`,
            // `L10.MachineStatus`,
          ],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startFiveTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
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
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setData(rawData);
    }
  }, [connection]);
  const startOnePackingTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "ps",
        ["dg1"],
        [
          [
            "DG1.ErrorProduct",
            // "DG1.CompletedProduct",
            // "DG1.MachineStatus"
          ],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startTwoPackingTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "ps",
        ["dg1"],
        [
          [
            "DG1.ErrorProduct",
            "DG1.CompletedProduct",
            // "DG1.MachineStatus"
          ],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startThreePackingTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "ps",
        ["dg1"],
        [["DG1.ErrorProduct", "DG1.CompletedProduct", "DG1.MachineStatus"]]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startTwoPackingDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "ps",
        ["dg1", "dg2"],
        [
          ["DG1.ErrorProduct", "DG1.CompletedProduct", "DG1.MachineStatus"],
          ["DG2.ErrorProduct", "DG2.CompletedProduct", "DG2.MachineStatus"],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startThreePackingDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "ps",
        ["dg1", "dg2", "dg3"],
        [
          ["DG1.ErrorProduct", "DG1.CompletedProduct", "DG1.MachineStatus"],
          ["DG2.ErrorProduct", "DG2.CompletedProduct", "DG2.MachineStatus"],
          ["DG3.ErrorProduct", "DG3.CompletedProduct", "DG3.MachineStatus"],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startFourPackingDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "ps",
        ["dg1", "dg2", "dg3", "dg4"],
        [
          ["DG1.ErrorProduct", "DG1.CompletedProduct", "DG1.MachineStatus"],
          ["DG2.ErrorProduct", "DG2.CompletedProduct", "DG2.MachineStatus"],
          ["DG3.ErrorProduct", "DG3.CompletedProduct", "DG3.MachineStatus"],
          ["DG4.ErrorProduct", "DG4.CompletedProduct", "DG4.MachineStatus"],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startFivePackingDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "ps",
        ["dg1", "dg2", "dg3", "dg4", "dg5"],
        [
          ["DG1.ErrorProduct", "DG1.CompletedProduct", "DG1.MachineStatus"],
          ["DG2.ErrorProduct", "DG2.CompletedProduct", "DG2.MachineStatus"],
          ["DG3.ErrorProduct", "DG3.CompletedProduct", "DG3.MachineStatus"],
          ["DG4.ErrorProduct", "DG4.CompletedProduct", "DG4.MachineStatus"],
          ["DG5.ErrorProduct", "DG5.CompletedProduct", "DG5.MachineStatus"],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startSixPackingDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
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
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setPackingData(rawData);
    }
  }, [connection]);
  const startOneAssemblyTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "as",
        ["lr1"],
        [["LR1.MachineStatus"]]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setAssemblyData(rawData);
    }
  }, [connection]);
  const startTwoAssemblyTagTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "as",
        ["lr1"],
        [["LR1.MachineStatus", "LR1.CurrentValue"]]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setAssemblyData(rawData);
    }
  }, [connection]);
  const startTwoAssemblyDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "as",
        ["lr1", "lr2"],
        [
          ["LR1.MachineStatus", "LR1.CurrentValue"],
          ["LR2.MachineStatus", "LR2.CurrentValue"],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setAssemblyData(rawData);
    }
  }, [connection]);
  const startThreeAssemblyDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "as",
        ["lr1", "lr2", "lr3"],
        [
          ["LR1.MachineStatus", "LR1.CurrentValue"],
          ["LR2.MachineStatus", "LR2.CurrentValue"],
          ["LR3.MachineStatus", "LR3.CurrentValue"],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setAssemblyData(rawData);
    }
  }, [connection]);
  const startFourAssemblyDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
        connection,
        "as",
        ["lr1", "lr2", "lr3", "lr4"],
        [
          ["LR1.MachineStatus", "LR1.CurrentValue"],
          ["LR2.MachineStatus", "LR2.CurrentValue"],
          ["LR3.MachineStatus", "LR3.CurrentValue"],
          ["LR4.MachineStatus", "LR4.CurrentValue"],
        ]
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setAssemblyData(rawData);
    }
  }, [connection]);
  const startFiveAssemblyDeviceTest = React.useCallback(async () => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      const rawData = await getTagsData(
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
      );
      let b = new Date();
      console.log("Kết thúc vào lúc", b.getTime());
      console.log("Độ trễ: ", b - a, "ms");
      setAssemblyData(rawData);
    }
  }, [connection]);
  const startInjectionMultiQueryWithOneTag = React.useCallback(() => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      Promise.all([
        getTagsData(connection, "imm", ["l6"], [[`L6.MachineStatus`]]),
        getTagsData(connection, "imm", ["l7"], [[`L7.MachineStatus`]]),
        getTagsData(connection, "imm", ["l8"], [[`L8.MachineStatus`]]),
        getTagsData(connection, "imm", ["l9"], [[`L9.MachineStatus`]]),
        getTagsData(connection, "imm", ["l10"], [[`L10.MachineStatus`]]),
      ])
        .then((res) => {
          let b = new Date();
          console.log("Kết thúc vào lúc", b.getTime());
          console.log("Độ trễ: ", b - a, "ms");
          setData(res);
        })
        .catch((e) => console.error("Có lỗi", e));
    }
  }, [connection]);
  const startPackingMultiQueryWithOneTag = React.useCallback(() => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      Promise.all([
        getTagsData(connection, "ps", ["dg1"], [[`DG1.MachineStatus`]]),
        getTagsData(connection, "ps", ["dg2"], [[`DG2.MachineStatus`]]),
        getTagsData(connection, "ps", ["dg3"], [[`DG3.MachineStatus`]]),
        getTagsData(connection, "ps", ["dg4"], [[`DG4.MachineStatus`]]),
        getTagsData(connection, "ps", ["dg5"], [[`DG5.MachineStatus`]]),
        getTagsData(connection, "ps", ["dg6"], [[`DG6.MachineStatus`]]),
      ])
        .then((res) => {
          let b = new Date();
          console.log("Kết thúc vào lúc", b.getTime());
          console.log("Độ trễ: ", b - a, "ms");
          setData(res);
        })
        .catch((e) => console.error("Có lỗi", e));
    }
  }, [connection]);
  const startAssemblyMultiQueryWithOneTag = React.useCallback(() => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      Promise.all([
        getTagsData(connection, "as", ["lr1"], [[`LR1.MachineStatus`]]),
        getTagsData(connection, "as", ["lr2"], [[`LR2.MachineStatus`]]),
        getTagsData(connection, "as", ["lr3"], [[`LR3.MachineStatus`]]),
        getTagsData(connection, "as", ["lr4"], [[`LR4.MachineStatus`]]),
        getTagsData(connection, "as", ["lr5"], [[`LR5.MachineStatus`]]),
      ])
        .then((res) => {
          let b = new Date();
          console.log("Kết thúc vào lúc", b.getTime());
          console.log("Độ trễ: ", b - a, "ms");
          setData(res);
        })
        .catch((e) => console.error("Có lỗi", e));
    }
  }, [connection]);
  const startPackingOneQueryWithOneTag = React.useCallback(() => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      getTagsData(
        connection,
        "ps",
        ["dg1", "dg2", "dg3", "dg4", "dg5", "dg6"],
        [
          [`DG1.MachineStatus`],
          [`DG2.MachineStatus`],
          [`DG3.MachineStatus`],
          [`DG4.MachineStatus`],
          [`DG5.MachineStatus`],
          [`DG6.MachineStatus`],
        ]
      )
        .then((res) => {
          let b = new Date();
          console.log("Kết thúc vào lúc", b.getTime());
          console.log("Độ trễ: ", b - a, "ms");
          setData(res);
        })
        .catch((e) => console.error("Có lỗi", e));
    }
  }, [connection]);
  const startAssemblyOneQueryWithOneTag = React.useCallback(() => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      getTagsData(
        connection,
        "as",
        ["lr1", "lr2", "lr3", "lr4", "lr5"],
        [
          [`LR1.MachineStatus`],
          [`LR2.MachineStatus`],
          [`LR3.MachineStatus`],
          [`LR4.MachineStatus`],
          [`LR5.MachineStatus`],
        ]
      )
        .then((res) => {
          let b = new Date();
          console.log("Kết thúc vào lúc", b.getTime());
          console.log("Độ trễ: ", b - a, "ms");
          setData(res);
        })
        .catch((e) => console.error("Có lỗi", e));
    }
  }, [connection]);
  const startInjectionOneQueryWithOneTag = React.useCallback(() => {
    console.clear();
    let a = new Date();
    console.log("Bắt đầu vào lúc", a.getTime());
    if (connection) {
      getTagsData(
        connection,
        "as",
        ["l6", "l7", "l8", "l9", "l10"],
        [
          [`L6.MachineStatus`],
          [`L7.MachineStatus`],
          [`L8.MachineStatus`],
          [`L9.MachineStatus`],
          [`L10.MachineStatus`],
        ]
      )
        .then((res) => {
          let b = new Date();
          console.log("Kết thúc vào lúc", b.getTime());
          console.log("Độ trễ: ", b - a, "ms");
          setData(res);
        })
        .catch((e) => console.error("Có lỗi", e));
    }
  }, [connection]);
  return (
    <>
      <div>
        LOAD TEST: Thực hiện nhiều lần, mỗi lần một node, một device sẽ tăng dần
        từ 1 tag lên tối đa tags, Khi đã tối đa tags, thực hiện tăng từ 1 lên
        đến 5 devices. Ghi lại độ trễ cập nhật.
      </div>
      <div>KHU VUC MAY EP</div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
        <div>Quan sát console để xem bài test</div>
      </pre>
      <div>Test kết quả truy xuất các tags</div>
      <button onClick={startOneDeviceTest}>Chạy một device</button>
      <button onClick={startTwoDeviceTest}>Chạy hai device</button>
      <button onClick={startThreeDeviceTest}>Chạy ba device</button>
      <button onClick={startFourDeviceTest}>Chạy bốn device</button>
      <button onClick={startFiveDeviceTest}>Chạy năm device</button>
      <div>Test kết quả truy xuất các devices</div>
      <button onClick={startOneTagTest}>Chạy một tag</button>
      <button onClick={startTwoTagTest}>Chạy hai tag</button>
      <button onClick={startThreeTagTest}>Chạy ba tag</button>
      <button onClick={startFourTagTest}>Chạy bốn tag</button>
      <button onClick={startFiveTagTest}>Chạy năm tag</button>
      <div>KHU VUC DONG GOI</div>
      <pre>
        <code>{JSON.stringify(packingData, null, 2)}</code>
        <div>Quan sát console để xem bài test</div>
      </pre>
      <div>Test kết quả truy xuất các tags</div>
      <button onClick={startOnePackingTagTest}>Chạy một tag</button>
      <button onClick={startTwoPackingTagTest}>Chạy hai tag</button>
      <button onClick={startThreePackingTagTest}>Chạy ba tag</button>
      <div>Test kết quả truy xuất các devices</div>
      <button onClick={startThreePackingTagTest}>Chạy một device</button>
      <button onClick={startTwoPackingDeviceTest}>Chạy hai device</button>
      <button onClick={startThreePackingDeviceTest}>Chạy ba device</button>
      <button onClick={startFourPackingDeviceTest}>Chạy bốn device</button>
      <button onClick={startFivePackingDeviceTest}>Chạy năm device</button>
      <button onClick={startSixPackingDeviceTest}>Chạy sáu device</button>
      <div>KHU VUC LAP RAP</div>
      <pre>
        <code>{JSON.stringify(assemblyData, null, 2)}</code>
        <div>Quan sát console để xem bài test</div>
      </pre>
      <div>Test kết quả truy xuất các tags</div>
      <button onClick={startOneAssemblyTagTest}>Chạy một tag</button>
      <button onClick={startTwoAssemblyTagTest}>Chạy hai tag</button>
      <div>Test kết quả truy xuất các devices</div>
      <button onClick={startTwoAssemblyTagTest}>Chạy một device</button>
      <button onClick={startTwoAssemblyDeviceTest}>Chạy hai device</button>
      <button onClick={startThreeAssemblyDeviceTest}>Chạy ba device</button>
      <button onClick={startFourAssemblyDeviceTest}>Chạy bốn device</button>
      <button onClick={startFiveAssemblyDeviceTest}>Chạy năm device</button>
      <div>QUERY 1 TAG NHIỀU DEVICE ĐA LUỒNG</div>
      <button onClick={startPackingMultiQueryWithOneTag}>
        KHU VUC DONG GOI
      </button>
      <button onClick={startAssemblyMultiQueryWithOneTag}>
        KHU VUC LAP RAP
      </button>
      <button onClick={startInjectionMultiQueryWithOneTag}>
        KHU VUC MAY EP
      </button>
      <div>QUERY 1 TAG NHIỀU DEVICE 1 LUỒNG PHỤ</div>
      <button onClick={startPackingOneQueryWithOneTag}>KHU VUC DONG GOI</button>
      <button onClick={startAssemblyOneQueryWithOneTag}>KHU VUC LAP RAP</button>
      <button onClick={startInjectionOneQueryWithOneTag}>KHU VUC MAY EP</button>
    </>
  );
}

export default LoadTest;
