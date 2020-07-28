import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';
import Button from '../Button';
import './styles.css';

const ImageGrid = props => {
  const { images, error, isLoading, loadImages } = props;

  useEffect(() => {
    props.loadImages();
  }, []);

  return (
    <div className="content">
      <section className="grid">
        {images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      {error && <div className="error">{JSON.stringify(error)}</div>}
      <Button loading={isLoading} onClick={() => !isLoading && loadImages()}>
        Load More
      </Button>
    </div>
  );
};

const mapStateToProps = props => {
  return {
    isLoading: props.isLoading,
    images: props.images,
    error: props.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadImages: () => dispatch(loadImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
