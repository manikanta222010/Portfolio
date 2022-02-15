// import { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
import './Bpp.css';
import '../prism.css';
import pp from '../pp.jpeg';

export function Blog1({ id }) {

    return (
        <section>
            <div className="container">
                <h1>React Component Lifecycle Methods</h1>
                <div className="blog-personal">
                    <div className="blog-personal1">
                        <img src={pp} alt="" width="30px" className="ppsmall" />
                        <span>Manikanta Srinivas / January 25, 2022</span>
                    </div>
                    <span>3 min read</span>
                </div>
                <img className="laptop" src="https://tsh.io/wp-content/uploads/2020/03/react-component-lifecycle-methods-graphic_.png" alt="" />
                <p>Almost everything in the universe revolves around a cycle. </p>
                <p>Consider trees: they are born, flourish, and eventually die. Components in React are the same everywhere. They are generated – mounted on the DOM —, grow through updating, and finally vanish – unmount on the DOM.</p>
                <p>The lifecycle of a component is referred to as this. React supports several lifecycle methods depending on the stage of a component's life. Lifecycle methods are unique methods that are invoked automatically when our component reaches certain milestones.</p>
                <h3>In React, each component has a lifecycle that includes three phases:</h3>
                <ul>
                    <li>&nbsp;&nbsp;Mounting</li>
                    <li>&nbsp;&nbsp;Updating</li>
                    <li>&nbsp;&nbsp;Unmounting</li>
                </ul>
                <p>In the React class component, the react lifecycle method is used. It aids us in the creation and modification of our states.</p>
                <p>But it doesn't stop there, to maximize your productivity, you can create a custom code snippet in your project!</p>
                <img className="laptop" src="https://tsh.io/wp-content/uploads/2020/03/react-component-lifecycle-methods-graphic_.png" alt="" />
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

export function Blog2({ id }) {

    return (
        <div>
            <p>{id}</p>
            <p>Helllo 2 </p>
        </div>
    )
}
export function Blog3({ id }) {

    return (
        <div>
            <p>{id}</p>
            <p>Helllo 3</p>
        </div>
    )
}
export function Blog4({ id }) {

    return (
        <div>
            <p>{id}</p>
            <p>Helllo 4</p>
        </div>
    )
}
export function Blog5({ id }) {

    return (
        <div>
            <p>{id}</p>
            <p>Helllo 5</p>
        </div>
    )
}




