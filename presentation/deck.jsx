import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  lg: require("./lg.png"),
  sourcejs: require("./sourcebg.png"),
  sourcejsLogo: require("./sourcejs.svg"),
  libraries: require("./libraries.jpg"),
  libraryBg: require("./library-bg.jpg"),
  materialUI: require("./material-ui.png"),
  materialUIGH: require("./material-ui-gh.png"),
  reactSelect: require("./react-select.png"),
  componetizing: require("./componetizing.jpg"),
  react: require("./react.png"),
  composable: require("./composable.jpg"),
  playground: require("./playground.png"),
  github: require("./github.svg"),
  puzzle: require("./puzzle.jpg"),
  reactAmsterdam: require("./react-amsterdam.png"),
  tools: require("./tools.jpg")
};

preloader([images.lg]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide", "spin"]} transitionDuration={800} progress={"bar"}>
        <Slide transition={["zoom"]} bgColor="primary" width={1200px}>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Building React
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Component Library
          </Heading>
          <Text textAlign="left" textSize="3em" margin="2em 0px 0px" bold>Robert Haritonov</Text>
          <Text textAlign="left" textSize="3em" margin="0 0px 0px" bold>@operatino</Text>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary" align="flex-start flex-start">
          <Image src={images.lg.replace("/", "")} margin="70px auto 30px" height="300px"/>
          <Text textSize="4em" bold>Front-end Lead at Liberty Global</Text>
        </Slide>


        <Slide bgImage={images.sourcejs.replace("/", "")}>
          <Image src={images.sourcejsLogo} margin="0 0 30px" width="800px"/>
          <Text textSize="4em" textColor="white" bold>Author of the Style Guide Platform</Text>
        </Slide>


        <Slide transition={["slide"]} bgColor="#2D2D2D" align="flex-start center">
          <Image src={images.libraries.replace("/", "")} width="100%"/>
        </Slide>


        <Slide bgColor="black" bgImage={images.libraryBg.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} caps fit textColor="primary" margin="-60px 0 0">
            What is
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="tertiary">
              A Component Library
            </Heading>
          </Appear>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" align="flex-start center">
          <List margin="-100px 0 0" textSize="1.5em">
            <ListItem>A set of re-usable modules</ListItem>
            <ListItem><Appear fid="1">Searchable library</Appear></ListItem>
            <ListItem><Appear fid="2">Rendered examples and docs</Appear></ListItem>
          </List>
        </Slide>


        <Slide bgColor="white" align="flex-start flex-start">
          <Image src={images.materialUI.replace("/", "")} width="100%"/>
        </Slide>


        <Slide bgColor="white" align="flex-start flex-start">
            <Image src={images.reactSelect.replace("/", "")} width="100%" />
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" align="flex-start center">
          <List margin="-100px 0 0" textSize="1.5em">
            <ListItem><Link href="http://callemall.github.io/material-ui" textColor="primary">Material
              UI</Link></ListItem>
            <ListItem><Link href="http://nikgraf.github.io/belle"
                            textColor="primary">Belle</Link></ListItem>
            <ListItem><Link href="http://elemental-ui.com/" textColor="primary">Elemental
              UI</Link></ListItem>
            <ListItem><Link href="http://react-components.com/" textColor="primary">React Components
              (collection)</Link></ListItem>
          </List>
        </Slide>


        <Slide bgColor="white" align="flex-start flex-start">
          <Image src={images.materialUIGH.replace("/", "")} width="100%"/>
        </Slide>


        <Slide bgColor="black" transition={["slide"]} bgImage={images.componetizing.replace("/", "")}
               bgDarken={0.75}>
          <Heading size={1} caps fit textColor="primary" margin="-60px 0 0">
            Componetizing
          </Heading>
          <Heading size={2} caps fit textColor="tertiary">
            The web
          </Heading>
        </Slide>


        <Slide bgColor="#2D2D2D" transition={["slide"]} align="flex-start center">
          <Image src={images.react.replace("/", "")} width="500px"/>
        </Slide>


        <Slide bgColor="black" transition={["slide"]} bgImage={images.composable.replace("/", "")}
               bgDarken={0.75}>

          <Heading size={3} caps fit textColor="tertiary">
            Patterns
          </Heading>
        </Slide>


        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Container Components</Heading>
          <Appear fid="1">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Smart
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Dumb
                </Heading>
              </Fill>
            </Layout>
          </Appear>
        </Slide>


        <Slide transition={["slide"]} transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./container-component.example")}
            margin="20px auto"/>
        </Slide>


        <Slide transition={["slide"]} transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./dumb-component.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="black">
          <Heading>
            and...
          </Heading>
        </Slide>


        <Slide transition={["fade"]} bgColor="black">
          <BlockQuote>
            <Quote textSize="3em" style={{lineHeight: "1.3"}}>I want you to take a moment and forget
              everything you know about web development.<br/>
              Keep an open mind.</Quote>
            <Cite>Christopher Chedeau @vjeux</Cite>
          </BlockQuote>
        </Slide>


        <Slide bgColor="secondary" textColor="primary" align="flex-start center">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            CSS in JS
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="tertiary">
              For isolated widgets
            </Heading>
            <Heading size={2} caps fit textColor="tertiary">
              and complex UI's
            </Heading>
          </Appear>
        </Slide>


        <Slide transition={["slide"]} transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./inline-css.example")}
            margin="20px auto"/>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" align="flex-start center">
          <List margin="-100px 0 0" textSize="1.5em">
            <ListItem><Link href="http://projects.formidablelabs.com/radium/"
                            textColor="primary">Radium</Link></ListItem>
            <ListItem><Link href="https://github.com/js-next/react-style" textColor="primary">React
              Style</Link></ListItem>
            <ListItem><Link href="https://github.com/jsstyles/jss" textColor="primary">JSS</Link></ListItem>
          </List>
        </Slide>


        <Slide bgColor="black" transition={["slide"]} bgImage={images.tools.replace("/", "")} bgDarken={0.75}>
          <Heading size={3} caps fit textColor="primary">
            Tools
          </Heading>
        </Slide>


        <Slide bgColor="secondary" textColor="primary" align="flex-start center">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Workbench
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="tertiary">
              Isolated development
            </Heading>
            <Heading size={2} caps fit textColor="tertiary">
              With hot reload
            </Heading>
          </Appear>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" align="flex-start center">
          <List margin="-100px 0 0" textSize="1.5em">
            <ListItem>Fast set-up</ListItem>
            <ListItem><Appear fid="1">Focus on decomposition</Appear></ListItem>
            <ListItem><Appear fid="2">Advanced tooling support</Appear></ListItem>
          </List>
        </Slide>


        <Slide bgColor="white" align="flex-start flex-start">
          <Link href="http://projects.formidablelabs.com/component-playground/"><Image
            src={images.playground.replace("/", "")} width="80%"/></Link>
        </Slide>


        <Slide bgColor="secondary" textColor="primary" align="flex-start center"
               bgImage={images.puzzle.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Putting all together
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="primary">
              into own
            </Heading>
            <Heading size={2} caps fit textColor="primary">
              component library
            </Heading>
          </Appear>
        </Slide>


        <Slide bgColor="secondary" textColor="primary" align="flex-start center">
          <Text textColor="primary" textSize="5em">
            Demo time...
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" align="flex-start center">
          <List margin="-100px 0 0" textSize="1.5em">
            <ListItem>Organized components catalogs</ListItem>
            <ListItem>Live examples</ListItem>
            <ListItem>Automatic doc generation</ListItem>
            <ListItem>Hot module replacement</ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="white" align="flex-start flex-start">
          <Image src={images.reactAmsterdam.replace("/", "")} margin="70px auto 30px" height="300px"/>
          <Text textSize="4em" textColor="black" bold>Amsterdam React Conference</Text>
        </Slide>


        <Slide bgImage={images.sourcejs.replace("/", "")}>
          <Image src={images.github} width="250px"/>
          <Link href="http://bit.ly/sourcejs-loves-react"><Text textSize="4em" textColor="white" bold>bit.ly/sourcejs-loves-react</Text></Link>
          <Text textColor="white" textSize="3em" margin="1em 0px 0px">Robert Haritonov</Text>
          <Text textColor="white" textSize="3em" margin="0 0px 0px">@operatino, r@rhr.me</Text>
        </Slide>

      </Deck>
    );
  }
}
