import RGL, { WidthProvider } from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { LayoutArray, selectLayout, setLayout } from "store/layoutSlice";

interface LayoutProps {
    className: string
    cols: number
    rowHeight: number
    onLayoutChange?(layout: LayoutArray[]): void;
}

const Props: LayoutProps = {
  className: "layout",
  cols: 12,
  rowHeight: 280,
  onLayoutChange: ()=>{},
}

const WidgetsLayout = () => {
  const dispatch = useAppDispatch;
  const WidgetGridLayout = WidthProvider(RGL);
  const actualLayout = useAppSelector(selectLayout);


  const onLayoutChange = (layout: typeof actualLayout) => {

    //saveToLS("layout", layout);
    //dispatch(setLayout(layout));//this.props.onLayoutChange(layout); // updates status display
  }

    return (
        <WidgetGridLayout
          {...Props}
          layout={actualLayout}
          onLayoutChange={onLayoutChange}
        >
          <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
            <span className="text">1</span>
          </div>
          <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
            <span className="text">2</span>
          </div>
          <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
            <span className="text">3</span>
          </div>
          <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0 }}>
            <span className="text">4</span>
          </div>
          <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0 }}>
            <span className="text">5</span>
          </div>
        </WidgetGridLayout>
    );
}

function getFromLS(key:string) {
  let ls = {};
  if (global.localStorage) {
    try {
      //ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  //return ls[key];
}

function saveToLS(key:string, value:  LayoutArray[]) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value
      })
    );
  };
};

export default WidgetsLayout;
