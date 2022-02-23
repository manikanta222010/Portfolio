// import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../blogsStyle.css';
import '../prism.css';
import pp from '../Images/pp.jpeg';
import promise1 from '../Images/promise1.png';
import promise2 from '../Images/promise2.png';
import callback from '../Images/callback.png';
import asyncawait from '../Images/asyncawait.png';
import ccfc from '../Images/ccfc.png';
import ccfc2 from '../Images/ccfc2.png';

export function Blog1() {
    const history = useHistory()
    return (
        <section>
            <div className="back" onClick={() => history.push("/blogs")}><i class="fa-solid fa-arrow-left"></i></div>
            <div className="container">
                <h1>React Component Lifecycle Methods</h1>
                <div className="blog-personal">
                    <div className="blog-personal1">
                        <img src={pp} alt="profile-pic" width="30px" className="ppsmall" />
                        <span>Manikanta Srinivas / January 25, 2022</span>
                    </div>
                    <span>3 min read</span>
                </div>
                <img className="laptop" src="https://tsh.io/wp-content/uploads/2020/03/react-component-lifecycle-methods-graphic_.png" alt="react lifecycle methods cover pic" />
                <p>Almost everything in the universe revolves around a cycle. </p>
                <p>Consider trees: they are born, flourish, and eventually die. Components in React are the same everywhere. They are generated – mounted on the DOM — grow through updating, and finally vanish – unmount on the DOM.</p>
                <p>The lifecycle of a component is referred to as this. React supports several lifecycle methods depending on the stage of a component's life. Lifecycle methods are unique methods that are invoked automatically when our component reaches certain milestones.</p>
                <h3>In React, each component has a lifecycle that includes three phases:</h3>
                <ul>
                    <li>&nbsp;&nbsp;Mounting</li>
                    <li>&nbsp;&nbsp;Updating</li>
                    <li>&nbsp;&nbsp;Unmounting</li>
                </ul>
                <p>In the React class component, the react lifecycle method is used. It aids us in the creation and modification of our states.</p>
                <p>But it doesn't stop there, to maximize your productivity, you can create a custom code snippet in your project!</p>
                <img className="laptop" src="https://miro.medium.com/max/1400/1*Gl8VbwsXmNxUAjmHNZuXxg.png" alt="react lifecycle methods" />
                <h2>Mounting</h2>
                <p>Mounting refers to the process of inserting elements into the DOM. To store all of the items in memory, React employs virtual DOM. It features four techniques for mounting a component built-in, including</p>
                <ul>
                    <li>&nbsp;&nbsp;constructor()</li>
                    <li>&nbsp;&nbsp;getDerivedStateFromProps()</li>
                    <li>&nbsp;&nbsp;render()</li>
                    <li>&nbsp;&nbsp;componentDidMount()</li>
                </ul>
                <h3>component()</h3>
                <p>When the component is started, the function Object() &#x0007B; [native code] &#x0007D;() method is invoked, and it's the perfect location to set up our state. The function Object() &#x0007B; [native code] &#x0007D; method takes props as a parameter and calls super(props) first before doing anything else.</p>


                <p>Let's say you have some thing very specific in your project that you repeat over and over again,</p>
                <p>In my case, inside my React Native project all my screens have this design.</p>
                <p>So, I have to repeat this code everytime I create a new screen.</p>
                <p>We can create a custom snippet for that!</p>
                <p>Creating a custom code snippet is very easy, you can go to https://snippet-generator.app/, give the description, tab trigger, and your code!</p>
                <p>One thing to note here is I used , which returns the current file name! It's one of the most common snippets variable in VSCode.</p>




                <div>
                    <pre class="language-js line-numbers" tabindex="0">    <code class="language-js">
                        <br /><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

                        <br /><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                        <br />   <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                        <br />      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
                        <br />   <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#x0007B;</span>
                        <br />       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Constructor Method'</span>
                        <br />   <span class="token punctuation">&#x0007D;</span>
                        <br /><span class="token punctuation">&#x0007D;</span>
                        <br /><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                        <br />   <span class="token keyword">return</span> <span class="token punctuation">(</span>
                        <br />       <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                        <br />           <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> This is a <span class="token punctuation">&#x0007B;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">&#x0007D;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                        <br />       <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                        <br />   <span class="token punctuation">)</span>
                        <br /><span class="token punctuation">&#x0007D;</span>
                        <br /><span class="token punctuation">&#x0007D;</span>
                    </code></pre>
                </div>



                <h3>getDerivedStateFromProps()</h3>
                <p>Before rendering the element in our DOM, the getDerivedStateFromProps function is invoked. It takes two arguments: props and state, and returns an object with state changes.</p>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

                    <br /><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ChildComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
                    <br />      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#x0007B;</span>
                    <br />          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Constructor Method'</span>
                    <br />      <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>

                    <br />  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span> <span class="token punctuation">&#x0007B;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> props<span class="token punctuation">.</span>nameFromParent <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span> <span class="token punctuation">(</span>

                    <br />          This is a <span class="token punctuation">&#x0007B;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">&#x0007D;</span>

                    <br />      <span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>

                    <br /><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">getDerivedStateFromPropsMethod</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>

                    <br />  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span> <span class="token punctuation">(</span>

                    <br />      <span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                </code></pre>


                <h3>Render()</h3>
                <p>This is the sole method that the React framework requires. This method is in charge of converting our JSX to DOM.</p>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

                    <br /><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">renderMethod</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <br />          <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                    <br />              This is a render method
                    <br />          <span class="token operator">&lt;/</span><span class="token operator">&gt;</span>
                    <br />      <span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                </code>
                </pre>


                <h3>componentDidMount()</h3>
                <p>componentDidMount is the most popular and commonly used lifecycle method. After the component has been rendered, this function is invoked. This function can also be used to access external data from the API.</p>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

                    <br /><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">componentDidMountMethod</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
                    <br />      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#x0007B;</span>
                    <br />          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'This name will change in 5 sec'</span>
                    <br />      <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#x0007B;</span>
                    <br />        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">&#x0007B;</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"This is a componentDidMount Method"</span><span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span>
                    <br />        <span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>

                    <br />    <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />    <span class="token keyword">return</span> <span class="token punctuation">(</span>

                    <br />        <span class="token punctuation">&#x0007B;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">&#x0007D;</span>

                    <br />    <span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>

                </code></pre>


                <h3>Update</h3>
                <p>The React lifecycle is now in its second phase. When the state and props of a component change, it is updated. React includes five built-in methods that are invoked when the components are update.</p>
                <ul>
                    <li>getDerivedStateFromProps()</li>
                    <li>shouldComponentUpdate()</li>
                    <li>render()</li>
                    <li>getSnapshotBeforeUpdate()</li>
                    <li>componentDidUpdate()</li>
                </ul>

                <p>Let's talk about the remaining methods now that we've covered getDerivedStateFromProps() and render().</p>


                <h3>Shouldcomponenetupdate()</h3>
                <p>When you want your state or props to update or not, you utilise this lifecycle method. This function returns a boolean value indicating whether or not rendering should be performed. True is the default value.</p>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

                    <br /><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">shouldComponentUpdateMethod</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                    <br />   <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />       <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
                    <br />       <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#x0007B;</span>
                    <br />           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shouldComponentUpdate Method'</span>
                    <br />       <span class="token punctuation">&#x0007D;</span>
                    <br />   <span class="token punctuation">&#x0007D;</span>
                    <br />   <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />       <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <br />   <span class="token punctuation">&#x0007D;</span>

                    <br />   <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />       <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#x0007B;</span>
                    <br />           <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">&#x0007B;</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"componentDidMount Method"</span><span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span>
                    <br />       <span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
                    <br />   <span class="token punctuation">&#x0007D;</span>
                    <br />   <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />       <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <br />           <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    <br />               <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>This is a <span class="token punctuation">&#x0007B;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">&#x0007D;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                    <br />           <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <br />       <span class="token punctuation">)</span>
                    <br />   <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>

                </code></pre>


                <h3>componentDidUpdate()</h3>
                <p>After the component has been updated in the DOM, the componentDidUpdate function is called. This is the best area to update the DOM in response to props and state changes.</p>


                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

                    <br /><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">componentDidUpdateMethod</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
                    <br />      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#x0007B;</span>
                    <br />          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'from previous state'</span>
                    <br />      <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#x0007B;</span>
                    <br />          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">&#x0007B;</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"to current state"</span><span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span>
                    <br />      <span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevState</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">if</span><span class="token punctuation">(</span>prevState<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />          document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'statechange'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"Yes the state is changed"</span>
                    <br />      <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <br />          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    <br />              State was changed <span class="token punctuation">&#x0007B;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">&#x0007D;</span>
                    <br />              <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"statechange"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
                    <br />          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <br />      <span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>

                </code></pre>


                <h2>Unmounting</h2>
                <p>Unmounting is the last step in the react lifecycle. When a component is deleted from the DOM, this is used. When a component is unmounted, React only has one built-in method that is invoked.</p>

                <ul>
                    <li>componentWillUnmount()</li>
                </ul>
                <h3>componentWillUnmount()</h3>
                <p>Any cleanup activities, such as cancelling API calls or deleting storage caches, can be performed in the componentWillUnmount function. Because the component will never be re-rendered, you can't use setState inside this method.</p>


                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

                    <br /><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">componentWillUnmount</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
                    <br />      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#x0007B;</span>
                    <br />          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <br />      <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <br />          <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                    <br />              <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">&#x0007B;</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show <span class="token operator">?</span> <span class="token operator">&lt;</span>Child<span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">&#x0007D;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                    <br />              <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">&#x0007B;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">&#x0007B;</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">&#x0007B;</span><span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show<span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007D;</span><span class="token punctuation">&#x0007D;</span><span class="token operator">&gt;</span>Click me to toggle<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                    <br />          <span span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
                    <br />      <span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'This will unmount'</span><span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span><span class="token punctuation">(</span>
                    <br />          <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                    <br />              <span class="token constant">I</span> am a child component
                    <br />          <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
                    <br />      <span class="token punctuation">)</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>



                    <code /></code></pre>

            </div>
        </section>
    )
}

export function Blog2() {
    const history = useHistory()
    return (
        <section>
            <div className="back" onClick={() => history.push("/blogs")}><i class="fa-solid fa-arrow-left"></i></div>
            <div className="container">
                <h1>Promises in JavaScript</h1>
                <div className="blog-personal">
                    <div className="blog-personal1">
                        <img src={pp} alt="pofile-pic" width="30px" className="ppsmall" />
                        <span>Manikanta Srinivas / January 25, 2022</span>
                    </div>
                    <span>3 min read</span>
                </div>
                <img className="laptop" src={promise1} alt="promise cover pic" />
                <p>"Producing code" refers to code that takes some time to create. The term "consuming code" refers to code that must wait for a result.</p>
                <p>A Promise is a JavaScript object that connects the code that produces and the code that consumes it.</p>
                <h2>JavaScript Promise Object</h2>
                <p>The producing code and calls to the consuming code are both contained in a JavaScript Promise object</p>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <span class="token keyword">let</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">isResolved<span class="token punctuation">,</span> isRejected</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token comment">// "Producing Code" (May take some time)</span>
                    <br />  <span class="token function">isResolved</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// when successful</span>
                    <br />  <span class="token function">isRejected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// when error</span>
                    <br /><span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><br />
                    <span class="token comment">// "Consuming Code" (Must wait for a fulfilled Promise)</span>
                    <br />myPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
                    <br />  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span> <span class="token comment">/* code if successful */</span> <span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span>
                    <br />  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span> <span class="token comment">/* code if some error */</span> <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>
                <p>When the producing code receives the result, one of the two callbacks should be called.</p>
                <h2>Promise Object Properties</h2>
                <p>A JavaScript Promise object can be:</p>
                <ul>
                    <li> Pending</li>
                    <li> Fulfilled</li>
                    <li> isRejected</li>
                </ul>
                <img className="laptop" src={promise2} alt="promise chain" />
                <ul id="list">
                    <li> &nbsp;The state and outcome properties are supported by the Promise object</li>
                    <li> &nbsp;The result of a Promise object while it is "pending" (working) is unknown.</li>
                    <li> &nbsp;The consequence of a Promise object being "fulfilled" is a value</li>
                    <li> &nbsp;When a Promise object is "isRejected," an error object is returned.</li>
                    <br />
                    <li> &nbsp;The Promise properties state and outcome are inaccessible.</li>
                    <li> &nbsp;To handle promises, you must utilise the Promise method.</li>
                </ul>
                <h2>How to use promise method</h2>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <br />myPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
                    <br />  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span> <span class="token comment">/* code if successful */</span> <span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span>
                    <br />  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span> <span class="token comment">/* code if some error */</span> <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">)</span><span class="token punctuation">;</span>
                </code></pre>
                <ul>
                    <li>Promise. then() takes two arguments: a success callback and a failure callback.</li>
                    <li>Both are optional, so you can specify whether you want a callback for success or failure.</li>
                </ul>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <br /><span class="token keyword">let</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">isResolved<span class="token punctuation">,</span> isRejected</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                    <br />
                    <br />  <span span class="token comment">// The producing code (this may take some time)</span>
                    <br />
                    <br />  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token function">isResolved</span><span class="token punctuation">(</span><span class="token string">"OK"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span> <span class="token keyword">else</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token function">isRejected</span><span class="token punctuation">(</span><span class="token string">"Error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />
                    <br />myPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
                    <br />  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span><span class="token function">myDisplayer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span>
                    <br />  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span><span class="token function">myDisplayer</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>
                <p>We'll utilise the callback examples from the previous chapter to explain the use of promises:</p>
                <ul>
                    <li>Waiting for a Timeout</li>
                    <li>Waiting for a File</li>
                </ul>

                <h3>Example using Promise1:</h3>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <br /><span class="token keyword">let</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">isResolved<span class="token punctuation">,</span> isRejected</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span> <span class="token function">isResolved</span><span class="token punctuation">(</span><span class="token string">"I love You !!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>

                <h3>Example using Promise2:</h3>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <br /><span class="token keyword">let</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">isResolved<span class="token punctuation">,</span> isRejected</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />   <span class="token keyword">let</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />   req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">"mycar.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />   req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />   <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />       <span class="token function">isResolved</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />   <span class="token punctuation">&#x0007D;</span> <span class="token keyword">else</span> <span class="token punctuation">&#x0007B;</span>
                    <br />       <span class="token function">isRejected</span><span class="token punctuation">(</span><span class="token string">"File not Found"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />   <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span><span class="token punctuation">;</span>
                    <br />req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />
                    <br />myPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
                    <br />   <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span><span class="token function">myDisplayer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">&#x0007D;</span><span class="token punctuation">,</span>
                    <br />   <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span><span class="token function">myDisplayer</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>


            </div>
        </section>
    )
}

export function Blog3() {
    const history = useHistory()

    return (
        <section>
            <div className="back" onClick={() => history.push("/blogs")}><i class="fa-solid fa-arrow-left"></i></div>
            <div className="container">
                <h1>Callbacks in JavaScript</h1>
                <div className="blog-personal">
                    <div className="blog-personal1">
                        <img src={pp} alt="profile pic" width="30px" className="ppsmall" />
                        <span>Manikanta Srinivas / January 25, 2022</span>
                    </div>
                    <span>3 min read</span>
                </div>
                <img className="laptop" src={callback} alt="callback cover pic" />
                <ul>
                    <li>A callback is a function that is sent to another function as an argument.</li>
                    <li>A function can use this technique to invoke another function.</li>
                    <li>After another function has completed, a callback function can be called.</li>
                </ul>
                <h2>FUNCTIONAL SEQUENCE:</h2>
                <p>The sequence in which JavaScript functions are called determines how they are executed. Not in the order in which they are listed.</p>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <span class="token keyword">function</span> <span class="token function">firstFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">myDisplayer</span><span class="token punctuation">(</span><span class="token string">"Good morning"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br />
                    <br /><span class="token keyword">function</span> <span class="token function">secondFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">myDisplayer</span><span class="token punctuation">(</span><span class="token string">"Good night"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br />
                    <br /><span class="token function">firstFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token function">secondFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>
                <p>"Good night" will be displayed as a result of this example.</p>
                <h2>SEQUENCE CONTROL:</h2>
                <ul>
                    <li>You might wish to have more control over when a function is executed.</li>
                    <li>Let's say you want to perform a calculation and then show the outcome.</li>
                    <li>You may use a calculator function (myCalculator), save the result, and then show it using another function (myDisplayer).</li>
                </ul>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <span class="token keyword">function</span> <span class="token function">displayer</span><span class="token punctuation">(</span><span class="token parameter">some</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> some<span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br /> <br /><span class="token keyword">function</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token keyword">let</span> sum <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
                    <br />  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br /> <br /><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token function">displayer</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>
                <p>Alternatively, you might call a calculator function (myCalculator) and have it call the display function (myDisplayer)</p>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <span class="token keyword">function</span> <span class="token function">displayer</span><span class="token punctuation">(</span><span class="token parameter">some</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> some<span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br />
                    <br /><span class="token keyword">function</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token keyword">let</span> sum <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
                    <br />  <span class="token function">displayer</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br />
                    <br /><span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>

                <ul>
                    <li>The issue with the first example is that in order to display the result, you must call two functions.</li>
                    <li>The issue with the second case is that you can't stop the calculator from displaying the result.</li>
                    <li>It's now time to make a callback.</li>
                </ul>

                <h2>JAVASCRIPT CALLBACKS:</h2>
                <p>You might use a callback to call the calculator function (myCalculator) and have the calculator function run the callback once the calculation is complete.</p>

                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">

                    <span class="token keyword">function</span> <span class="token function">displayer</span><span class="token punctuation">(</span><span class="token parameter">some</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />   document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> some<span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br /><br /><span class="token keyword">function</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> myCallback</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />   <span class="token keyword">let</span> sum <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
                    <br />   <span class="token function">myCallback</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br /><br /><span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> displayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>

                <ul>
                    <li>In the example above, myDisplayer is the name of a function.</li>
                    <li>It is supplied as an argument to myCalculator().</li>
                </ul>
                <h3>WHERE CALLBACKS MUST BE USED?</h3>
                <p>Asynchronous functions, where one function must wait for another, are where callbacks really shine (like waiting for a file to load).</p>
            </div>
        </section>
    )
}

export function Blog4() {
    const history = useHistory()

    return (
        <section>
            <div className="back" onClick={() => history.push("/blogs")}><i class="fa-solid fa-arrow-left"></i></div>
            <div className="container">
                <h1>Async/Await in JavaScript</h1>
                <div className="blog-personal">
                    <div className="blog-personal1">
                        <img src={pp} alt="profile pic" width="30px" className="ppsmall" />
                        <span>Manikanta Srinivas / January 25, 2022</span>
                    </div>
                    <span>3 min read</span>
                </div>
                <img className="laptop" src={asyncawait} alt="async await cover pic" />
                <p>"Promises are easier to write using async and await"</p>
                <p>If you don't know what promises are, check <span className="explore" onClick={() => history.push("/blog/2")}>Promises in JavaScript</span></p>
                <p>The async keyword causes a function to return a Promise.</p>
                <p>The await keyword causes a function to wait for a Promise.</p>
                <h2>Async Syntax</h2>
                <p>When you use the keyword async before a function, it will return a promise</p>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <br /><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />   <span class="token keyword">return</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                </code></pre>
                <p>It is same as:</p>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <br /><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                </code></pre>
                <h2>Await Syntax</h2>
                <p>The term await is used before a function to make it wait for a promise</p>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <br /><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">await</span> promise<span class="token punctuation">;</span>
                </code></pre>
                <p>Only async functions are allowed to utilise the await keyword.</p>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <br /><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">displayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token keyword">let</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"Task completed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">await</span> myPromise<span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br />
                    <br /><span class="token function">displayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                </code></pre>
                <ul id="list">
                    <li> &nbsp;JavaScript has pre-defined the two arguments (resolve and reject).</li>
                    <li> &nbsp;We won't create them; instead, when the executor function is ready, we'll call one of them.</li>
                    <li> &nbsp;We won't require a reject function very often.</li>
                </ul>
                <h3>Example without reject:</h3>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <br /><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token keyword">let</span> myPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"Task completed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">await</span> myPromise<span class="token punctuation">;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                    <br />
                    <br /><span class="token function">myDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                </code></pre>


            </div>
        </section>
    )
}

export function Blog5() {
    const history = useHistory()

    return (
        <div>
            <div className="back" onClick={() => history.push("/blogs")}><i class="fa-solid fa-arrow-left"></i></div>
            <div className="container">
                <h1>Functional Components vs Class Components in React</h1>
                <div className="blog-personal">
                    <div className="blog-personal1">
                        <img src={pp} alt="profile pic" width="30px" className="ppsmall" />
                        <span>Manikanta Srinivas / January 25, 2022</span>
                    </div>
                    <span>3 min read</span>
                </div>
                <img className="laptop" src={ccfc} alt="class components vs functional compoents" />
                <p>Components are the fundamental elements of a React application. They allow you to divide down UI into reusable sections that may be reused and interacted with separately.</p>
                <p>There are two main components in REACT :</p>
                <ul>
                    <li>FUNCTIONAL COMPONENTS</li>
                    <li>CLASS COMPONENTS</li>
                </ul>
                <p>The differences between class and functional components, as well as how to choose between them, will be discussed in this article. If you're a React developer or new to React, this article will help you understand the differences between these two sorts of React components.</p>
                <img className="laptop" src={ccfc2} alt="class components functional components comparision" />
                <h2>FUNCTIONAL COMPONENTS</h2>
                <ul>
                    <li>Basic JavaScript functions make up functional components. These are usually arrow functions, but the ordinary function keyword can also be used.</li>
                    <li>Components that accept data and display it in some manner are sometimes referred to as "dumb" or "stateless" components because they are primarily responsible for rendering UI.</li>
                    <li>ComponentDidMount, for example, is a React lifecycle method that cannot be used in functional components.</li>
                    <li>In functional components, there is no render method.</li>
                    <li>These are often presentational solely and are mostly responsible for UI (For example, a Button component).</li>
                    <li>Props can be accepted and used by functional components.</li>
                    <li>If you don't need to use React state, functional components should be preferred.</li>
                </ul>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <br /><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
                    <br /><br /><span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
                    <br />  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    <br />      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span>props<span class="token punctuation">.</span>name<span class="token punctuation">&#x0007D;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
                    <br />  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <br /><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br /><span class="token keyword">export</span> <span class="token keyword">default</span> Person<span class="token punctuation">;</span>
                </code></pre>
                <h2>CLASS COMPONENTS</h2>
                <ul>
                    <li>In React, class components employ ES6 classes and extend the Component class.</li>
                    <li>Because they implement logic and state, they are sometimes referred to as "smart" or "stateful" components.</li>
                    <li>Inside class components, React lifecycle methods can be used (for example, componentDidMount).</li>
                    <li>This is how you pass props down to class components and get access to them.</li>
                </ul>
                <pre class="language-js line-numbers" tabindex="0"><code class="language-js">
                    <br /><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#x0007B;</span> Component <span class="token punctuation">&#x0007D;</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
                    <br /><br /><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#x0007B;</span>
                    <br />  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#x0007B;</span>
                    <br />          <span class="token literal-property property">myState</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                    <br />      <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br />  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#x0007B;</span>
                    <br />      <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <br />          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    <br />              <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello Person<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
                    <br />          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <br />      <span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <br />  <span class="token punctuation">&#x0007D;</span>
                    <br /><span class="token punctuation">&#x0007D;</span>
                </code></pre>


            </div>
        </div>
    )
}




