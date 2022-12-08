import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function LifecycleDemo() {
  // Pass useEffect a function
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');     //bk: Called only during unmounting.
    //Why is it “unmounting” with every render? 
    //BK: regarding the  above retrun:  
    //BK: Well, the cleanup function you can (optionally) return 
    //BK: from useEffect isn’t only called when the component is unmounted.
    //BK: It’s called every time before that effect runs – to clean up from the last run. 

    //Prevent useEffect From Running Every Render:
    //BK: If you want your effects to run less often, you can provide a second argument – an array of values. Think of them as the dependencies for that effect. If one of the dependencies has changed since the last time, the effect will run again.

    //useEffect Does Not Actively “Watch”
    //BK: When you call useEffect in your component, this is effectively queuing or scheduling an effect to maybe run, after the render is done.
    //After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.

    //Only Run Once, on Mount
    //BK:You can pass the special value of empty array [] as a way of saying “only run on mount, and clean up on unmount”.

  })   // Make it look like this  }, []) for Run once on mount.

  return "I'm a lifecycle demo";
}

function AppUseEffect() {
  // Set up a piece of state, so that we have
  // a way to trigger a re-render.
  const [random, setRandom] = useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo/>}
    </>
  );
}

export default  AppUseEffect;