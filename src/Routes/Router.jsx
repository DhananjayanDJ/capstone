import React from "react";
import {  Route } from "react-router-dom";
import { Routes  } from "react-router-dom"
import MoviePage from "../Pages/moviePage/MoviePage";
import { HomePage } from '../Pages/HomePage'
import SeeAll from "../Pages/SeeAll";
import { BookTicketsPage } from '../Pages/BookTicketsPage';
import { BookingHistory } from "../Components/BookingHistory";

const Router = () => {
    return (
        <div>
            <Routes >
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/ncr/movies">
                    <SeeAll />
                </Route>
                <Route exact path="/booktickets/:id">
                    <BookTicketsPage />
                </Route>
                <Route exact path="/movies/:id">
                    <MoviePage></MoviePage>
                </Route>
                <Route exact path="/profile/booking-history">
                    <BookingHistory />
                </Route>
                <Route>
                    <div>404. Page not found</div>
                </Route>
            </Routes >
        </div>
    );
};

export default Router;