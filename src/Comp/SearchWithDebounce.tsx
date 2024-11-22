import axios from "axios";
import React, { useEffect, useState } from "react";
import 'animate.css'; 

// const mockFetchData = (searchTerm) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res([
//         { name: `${searchTerm} result 1` },
//         { name: `${searchTerm} result 2` },
//         { name: `${searchTerm} result 3` },
//       ]);
//     }, 1000);
//   });
// };

function SearchWithDebounce() {
  const [queryStr, setQueryStr] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState<string>("");

  const fetcherFunc = async (queryStr: string) => {
    setLoading(true);
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

      const apiResp = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${queryStr}&appid=${API_KEY}`
      );

      if (apiResp.status === 200) {
        setError("");
        setData(apiResp.data);
      } else {
        throw new Error("Something went wrong in api calling!");
      }
    } catch (err) {
      if (err.status === 404) {
        setError("City not found!");
      } else {
        setError(err.message);
      }
      setData([]);
    }

    setLoading(false);
  };

  const convertDate = (timestamp: number) => {
    // Convert to milliseconds (multiply by 1000)
    const date = new Date(timestamp * 1000);

    // Convert to a valid time format
    const time = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return time;
  };

  useEffect(() => {
    let timeOutId: any;
    if (queryStr) {
      timeOutId = setTimeout(() => {
        fetcherFunc(queryStr);
      }, 100);
    } else {
      setData("");
      setError("");
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [queryStr]);
  console.log(data);
  return (
    <div style={{ color: "white" }}>
      <input
        style={{
          backgroundColor: "#7CFC0025",
          border: "1px solid #7CFC00",
          fontSize: "29px",
          padding: "10px",
          color: "#7CFC00",
          fontWeight: "bolder",
          textTransform: "capitalize",
        }}
        name={"searchQuery"}
        placeholder="Search Here...."
        value={queryStr}
        onChange={(e) => setQueryStr(e.target.value)}
        autoComplete="off"
      />
      <br />
      {!loading ? (
        error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            {data && data.length !== 0 && (
              <>
                <div
                  style={{
                    width: "77%",
                    height: "70px",
                    padding: "0px 10px",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundColor: "#7CFC0050",
                    marginTop: "20px",
                    gap: "10px",
                    border: "1px solid #7CFC00",
                    borderRadius: "10px",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>
                    Country : {data?.city?.country}
                  </p>{" "}
                  <p style={{ fontWeight: "bold" }}>
                    Population : {data?.city?.population}
                  </p>{" "}
                  <p style={{ fontWeight: "bold" }}>
                    Sunrise :{" "}
                    {data?.city?.sunrise && convertDate(data?.city?.sunrise)}
                  </p>{" "}
                  <p style={{ fontWeight: "bold" }}>
                    Sunset :{" "}
                    {data?.city?.sunset && convertDate(data?.city?.sunset)}
                  </p>
                </div>
                {data.list?.length > 0 && (
                  <table
                    border={2}
                    style={{
                      width: "97%",
                      height: "70px",
                      margin: "auto",
                      backgroundColor: "#7CFC0025",
                      marginTop: "20px",
                      gap: "10px",
                      border: "5px solid #7CFC0050",
                      borderRadius: "10px",
                    color:"lime"
                    }}
                  >
                    <thead style={{fontWeight:"bold",textTransform:"capitalize"}}>
                      <tr>
                      <th style={{ padding: "15px",fontWeight:"bold" }}>S No.</th>
                        <th style={{ padding: "15px" }}>dt_txt</th>
                        <th style={{ padding: "15px" }}>clouds</th>
                        <th style={{ padding: "15px" }}>feels_like</th>
                        <th style={{ padding: "15px" }}>humidity</th>
                        <th style={{ padding: "15px" }}>grnd_level</th>
                        <th style={{ padding: "15px" }}>pressure</th>
                        <th style={{ padding: "15px" }}>sea_level</th>
                        <th style={{ padding: "15px" }}>temp</th>
                        <th style={{ padding: "15px" }}>temp_kf</th>
                        <th style={{ padding: "15px" }}>temp_max</th>
                        <th style={{ padding: "15px" }}>temp_min</th>
                        <th style={{ padding: "15px" }}>weather</th>
                        <th style={{ padding: "15px" }}>wind</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.list.map((elm,index) => (
                        <tr key={index}>
                           <td className="animate__animated animate__bounce  animate__jello">{index+1}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.dt_txt}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.clouds?.all}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.feels_like}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.humidity}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.grnd_level}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.pressure}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.sea_level}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.temp}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.temp_kf}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.temp_max}</td>
                          <td className="animate__animated animate__bounce  animate__jello">{elm?.main?.temp_min}</td>
                          <td className="animate__animated animate__bounce  animate__jello">
                            {"Main :" +
                              " " +
                              elm?.weather?.[0].main +
                              ", Description :" +
                              " " +
                              elm?.weather?.[0].description}
                          </td>
                          <td className="animate__animated animate__bounce  animate__jello">
                            {"Speed :" +
                              " " +
                              elm?.wind?.speed +
                              ", Gust :" +
                              " " +
                              elm?.wind?.gust +
                              ", Deg :" +
                              " " +
                              elm?.wind?.deg}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}
          </>
        )
      ) : (
        <p>Fetching Results...</p>
      )}
    </div>
  );
}

export default SearchWithDebounce;
