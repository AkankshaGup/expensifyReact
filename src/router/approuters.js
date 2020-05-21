import React from 'react';
import {BrowserRouter, Route,Switch, Link,NavLink } from 'react-router-dom';
import ExpenseDashboardPage from "../components/expensedashboardpage.js"
import AddExpensePage from "../components/addexpensepage.js"
import EditExpensePage from "../components/editexpensepage.js"
import HelpExpensePage from "../components/helppage.js"
import NotFoundPage from "../components/Notfoundpage.js"
import Header from "../components/header.js"



const Approuters=()=>(
  <BrowserRouter>
  <Header />
  <Switch>
  <Route path="/" component={ExpenseDashboardPage} exact={true} />
  <Route path="/create" component={AddExpensePage} />
  <Route path="/edit/:id" component={EditExpensePage} />
  <Route path="/help" component={HelpExpensePage} />
  <Route  component={NotFoundPage} />
  </Switch>
  </BrowserRouter>
)
export default Approuters;