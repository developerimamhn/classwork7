import Header from "./component/Header";
import Body from "./component/Body";
import LenisProvider from "./LenisProvider";

export default function Home() {
  return (
    <div className="relative">
      <LenisProvider>
      <Header />
      <Body />
      </LenisProvider>
    </div>
  );
}
