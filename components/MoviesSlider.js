import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import MoviesSlide from "./MoviesSlide";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MoviesSlider = ({ movies }) =>
  movies ? (
    <Swiper
      showsPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
      autoplayTimeout={3}
    >
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MoviesSlide
              overview={movie.overview}
              voteAvg={movie.vote_average}
              title={movie.title}
              id={movie.id}
              backgroundPhoto={movie.backdrop_path}
              posterPhoto={movie.poster_path}
            />
          </View>
        ))}
    </Swiper>
  ) : null;

MoviesSlider.propTypes = {
  movies: PropTypes.array
};

export default MoviesSlider