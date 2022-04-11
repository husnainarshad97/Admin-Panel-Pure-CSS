import React from "react";
// import "../css/general.css";
// import "../css/usertable.css";

//Libraries
import Select from "react-select";

function userTable() {
  const options = [
    { value: "chocolate", label: "Ended" },
    { value: "strawberry", label: "Start" },
    { value: "vanilla", label: "Close" },
    { value: "vanilla", label: "Completed" },
    { value: "vanilla", label: "Deleted" },
    { value: "End", label: "End" },
  ];
  return (
     <div>
   <table class="content-table">
          <caption>Table</caption>
          <thead>
          <tr >
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Votes</th>
            <th>Start Time</th>
            <th>Period</th>
            <th>Price</th>
            <th>Photo Count</th>
            <th>Challenge State</th>
            <th>Edit</th>
            <th>Award</th>
            <th>Details</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain Arshad</td>
            <td className="decTD">
              Dreams dont Work unless you do..
             
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
          <tr>
            <td>Hasnain</td>
            <td>
              Dreams dont Work unless you do, So Start working on your dreams.
              “You can get everything in life you want if you will just help
              enough other people get what they want.” — ... “Inspiration does
              exist, but it must find you working.” — ... “Don't settle for
              average. ... “Show up, show up, show up, and after a while the
              muse shows up, too.”
            </td>
            <td>Success</td>
            <td>2019-09-13 07:40:57</td>
            <td>2 Weeks</td>
            <td>500$</td>
            <td>50</td>
            <td>50</td>
            <td>
              <Select className="dropdown" options={options} />
            </td>
            <td>
              {" "}
              <button>Edit</button>
            </td>
            <td>
              {" "}
              <button>Award</button>
            </td>
            <td>
              <button>Veiw</button>
            </td>
          </tr>
        
          </tbody>
        </table>
    
  </div>
  );
}

export default userTable;
