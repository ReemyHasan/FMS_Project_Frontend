// import React, { createContext, useContext, useEffect, useState } from "react";

// const NotificationContext = createContext(null);

// export function NotificationProvider(props: { children: React.ReactNode }) {
//   const [data, setData] = useState([]);
//   const [source, setSource] = useState(null);

//   useEffect(() => {
//     const eventSource = new EventSource("http://localhost:6647/api/notifications");

//     eventSource.onopen = () => {
//       console.log("SSE opened!");
//     };

//     eventSource.onmessage = (e) => {
//       console.log(e.data);
//       const newData = JSON.parse(e.data);
//       setData(newData);
//     };

//     eventSource.onerror = (e) => {
//       console.error("Error: ", e);
//     };

//     setSource(eventSource);

//     return () => {
//       console.error("SSE closed");
//       eventSource.close();
//     };
//   }, []);

//   return (
//     <NotificationContext.Provider value={{ data: data }}>
//       {props.children}
//     </NotificationContext.Provider>
//   );
// }

// export function useNotification() {
//   return useContext(NotificationContext);
// }
// // import React, { useEffect, useState, useContext } from 'react';
// // import { useCookies } from "react-cookie";
// // import DataContext from "../context/trap-context"
// // import MainUtils from '../utils/main';
// // // const SSEDataContext = createContext([]);
// // const SSEService = ({ children }:any) => {
// //   const [data, setData] = useState([]);
// //   const [eventSource, setEventSource] = useState(null);
// //   const [new_val, setNewVal] = useState([]);
// //    const [cookies] = useCookies([]);
// //   const contextValue = React.useMemo(() => ({ data, setData, setNewVal, eventSource, setEventSource }), [
// //     data, 
// //     setData,
// //     setNewVal,
// //     eventSource,
// //     setEventSource
// //   ]);
// //   useEffect(() => {
// //     if (eventSource) {
// //       // Close the existing SSE connection if it exists (to avoid duplicates)
// //       eventSource.close();
// //       setEventSource(null);
// //     }
// //     // const headers = {
// //     //     Authorization: `Bearer ${cookies["token"]}`, // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
// //     //   };
    
// //     console.log("token "+cookies["token"]);
// //     // if (!MainUtils.isEmptyValue(cookies["token"])) {
// //       const newEventSource = new EventSource('http://localhost:6647/api/notifications'
// //       //, { withCredentials: true }
// //       );
// //       setEventSource(newEventSource);
// //       newEventSource.onmessage = (event:any) => {
// //       const message = JSON.parse(event.data);
// //        console.log("rrr "+message.new_val.severity);
// //       if (message.new_val != null) {
// //         const newData = message.new_val;
// //         const transformedData = {
// //           flag:'0',
// //           id: newData.id,
// //           timestamp: newData.timestamp,
// //           agentAddress: newData.agentAddress,
// //           severity: newData.severity,
// //           specificTrap: newData.specificTrap,
// //           genericTrap: newData.genericTrap,
// //           variableBindings: newData.variableBindings,
// //         };
// //         // console.log("eeee"+transformedData.genericTrap);
// //         if (!data.some((item) => item.id === newData.id)) {
// //           setData((prevData) => [...prevData, newData]);
// //         }
// //         setNewVal(transformedData);
// //         setData((prevData: any) => [...prevData, newData]);
// //       }
// //       else{
// //         setNewVal({id:message.old_val.id,flag:-1,});
// //       }
// //     };
// //   // }
// //   }, [cookies["token"]]);

// //   useEffect(() => {
// //     // Close the SSE connection when the component unmounts
// //     return () => {
// //       if (eventSource) {
// //         eventSource.close();
// //         setEventSource(null);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <DataContext.Provider value={contextValue}>
// //       {children}
// //     </DataContext.Provider>
// //   );
// // };

// // export default SSEService;