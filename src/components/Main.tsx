import cn from "classnames";
import {FC} from "react";

const Main: FC<{active: boolean}> = ({active}) => {
  return (
    <main
      className={cn(
        "bg-light transform min-h-screen origin-top-left transition-[transform]",
        active && "rotate-[-30deg]"
      )}
    >
      <div className="p-12 mx-auto prose-sm prose md:prose-base prose-indigo">
        <h1 className="underline decoration-wavy decoration-primary">
          Rotating Navigation
        </h1>
        <p>
          This is an example of a navigation with rotating animation. If you
          click the button at the top left of the screen, the page will rotate
          and the nav links will appear to the left. The minimum height for this
          to work is around 400px.
        </p>
        <p>
          If you want to chat, find me on{" "}
          <a href="https://twitter.com/bdocoder">Twitter</a> and{" "}
          <a href="https://github.com/bdocoder">GitHub</a>
        </p>
        <p>To finish the post, here is a photo of a cat:</p>
        <img
          src="https://source.unsplash.com/gKXKBY-C-Dk"
          alt="a cat photo found on unsplash.com"
        />
      </div>
    </main>
  );
};

export default Main;
