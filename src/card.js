import axios from "axios";
import React, { useEffect, useRef, useState } from "react"
import './App.css';


const Cards = () => {
  const [planArr, setPlanArr] = useState([])
  const [newUser, setNewUser] = useState([])
  const [showAllPromo, setShowAllPromo] = useState(true)

  const dragItem = useRef();
  const dragOverItem = useRef();

  const getAllPlans = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/484016a8-3cdb-44ad-97db-3e5d20d84298');
      // sorting response as per sequence
      response.data.sort((a, b) => a.sequence - b.sequence)
      localStorage.setItem("planData", JSON.stringify(response.data))
      setPlanArr(response.data)
      const newPromos = response.data.filter((promo) => promo.onlyNewCustomers === true)
      localStorage.setItem("newPromos", JSON.stringify(newPromos))
      return response.data;
    } catch (error) {
      console.log(error)
      return error;
    }
  }


  useEffect(() => {
    showAllPromo && document.getElementById("all").classList.add('prom-btn-active')
    const newPromos = JSON.parse(localStorage.getItem('newPromos'))
    newPromos ? setNewUser(newPromos) :
      getAllPlans()
    const planData = JSON.parse(localStorage.getItem('planData'))
    planData ? setPlanArr(planData) :
      getAllPlans()
  }, [showAllPromo])

  const handleClick = (e) => {
    const id = e.target.id
    const elementNew = document.getElementById("new")
    const elementAll = document.getElementById("all")
    if (id === 'new') {
      elementNew.classList.add('prom-btn-active')
      elementAll.classList.remove('prom-btn-active')
      setShowAllPromo(false)
    } else if (e.target.id === 'all') {
      elementAll.classList.add('prom-btn-active')
      elementNew.classList.remove('prom-btn-active')
      setShowAllPromo(true)
    }
  }

  const dragStart = (e, position) => {
    console.log(e, position)
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const modifiedList = [...planArr];
    const dragItemContent = modifiedList[dragItem.current];
    modifiedList.splice(dragItem.current, 1);
    modifiedList.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setPlanArr(modifiedList);
    localStorage.setItem("planData", JSON.stringify(modifiedList))
  };

  return (<div >
    <div className="prom-container" >
      <div className="d-flex main">
        <button className="prom-btn" id='all' onClick={(e) => handleClick(e)}>All Promotions</button>
        <button className="prom-btn" id='new' onClick={(e) => handleClick(e)}>New customers</button>
      </div>
    </div>
    <div className="main">
      <div className="grid-card">
        {!showAllPromo && newUser.map((ele, index) =>
          <div className="card-wrapper"
            key={index}
          >
            <div className="card">
              <img src={ele.heroImageUrl} alt='' className="card-img" />
              <div className="card-desc">
                <h3>{ele.name}</h3>
                <p>{ele.description}</p>
                <div className="button-container d-flex">
                  <button className="card-btn">{ele.termsAndConditionsButtonText}</button>
                  <button className="card-btn join-btn">{ele.joinNowButtonText}</button>
                </div>
              </div>
            </div>
          </div>)}

        {showAllPromo && planArr.map((ele, index) =>
          <div className="card-wrapper"
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            <div className="card">
              <img src={ele.heroImageUrl} alt='' className="card-img" />
              <div className="card-desc">
                <h3>{ele.name}</h3>
                <p>{ele.description}</p>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  </div>
  )
}

export default Cards