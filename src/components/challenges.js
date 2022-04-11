import React from "react";
// import "../css/general.css";
// import "../css/challenge.css";

function challenges() {
  var data = [
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },

       {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
    {
      title: "Picture",
      description: "This is my favroute picture",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <div >
      <h2>Challenges</h2>
      <p>This side navigation is of full height (100%) and always shown.</p>
      <p>
        Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius
        te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
        Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
      </p>
   
        <div className="mapdata">
          {data?.map((item, index) => (
            <tr className="tr">
               <td>
                <img className="image" src={item.image} alt="new" />
              </td>
              {/* <td>{index + 1}</td> */}
              {/* <td>{item.title}</td> */}
              <td>{item.description}</td>
             
              <td>
                {" "}
                <br></br>
              </td>
            </tr>
          ))}
        </div>
      </div>
    
  );
}

export default challenges;
