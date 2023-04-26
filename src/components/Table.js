import React, { useEffect, useState } from "react";

const Table = ({ data, setData }) => {
  // const [filteredData, setFilteredData] = useState(data);
  // const [searched, setSearched] = useState("");

  const [filteredData, setFilteredData] = useState({
    searchKey: "",
    isSorted: true,
    data: data,
  });

  const handleDeleteData = (index) => {
    if (window.confirm("Are you sure?")) {
      const newData = data.filter((item) => item != data[index]);
      setData(newData);
    }
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setFilteredData({ ...filteredData, searchKey: e.target.value });
    if (e.target.value == "") {
      setFilteredData({ ...filteredData, data: data });
    } else {
      const newData = data.filter(
        (item) =>
          item.firstName
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase()) ||
          item.lastName
            .toLowerCase()
            .startsWith(
              e.target.value.toLowerCase() ||
                (item.lastName + " " + item.firstName)
                  .toLowerCase()
                  .startsWith(e.target.value.toLowerCase())
            )
      );
      setFilteredData({ ...filteredData, data: newData });
    }
    console.log(filteredData);
  };

  const handleSort = () => {
    let newData = [...data];
    newData.sort((a, b) => {
      if (
        (a.firstName + a.lastName).toLowerCase() >
        (b.firstName + b.lastName).toLowerCase()
      ) {
        return 1;
      }
      return -1;
    });
    if (filteredData.isSorted) {
      setFilteredData({
        ...filteredData,
        isSorted: !filteredData.isSorted,
        data: newData,
      });
    } else {
      setFilteredData({
        ...filteredData,
        isSorted: !filteredData.isSorted,
        data: newData.reverse(),
      });
    }
    console.log(filteredData);
  };

  useEffect(() => {
    setFilteredData({ ...filteredData, data });
  }, [data]);

  return (
    <section className="result-outer">
      <div className="searchbar inputField">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          // value={filteredData.searchKey}
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {filteredData.data.length != 0 ? (
        <table>
          <thead>
            <tr>
              <th>SN.</th>
              <th className="sort-button" onClick={() => handleSort()}>
                Name
                <i id="sort-icon" className="fa-solid fa-sort-down"></i>
              </th>
              <th>Contact</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.data.map(
              ({ firstName, lastName, contact }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{firstName + " " + lastName}</td>
                  <td>{contact}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteData(index)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <div>No user found</div>
      )}
    </section>
  );
};

export default Table;
