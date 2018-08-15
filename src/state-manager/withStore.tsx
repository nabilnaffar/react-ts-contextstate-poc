import * as React from 'react';
import { Consumer } from '../state-manager/store';

// tslint:disable:max-classes-per-file
// tslint:disable:no-any

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Diff<T, K> = Omit<T, keyof K>;

type MapStateToProps<State, InjectedProps> = (state: State) => InjectedProps;

export const withStore = <State, OriginalProps, InjectedProps>(mapStateToProps: MapStateToProps<State, InjectedProps>) => (WrappedComponent: React.ComponentType<InjectedProps>) => {
    return class ComponentWithStore extends React.Component<Diff<OriginalProps, InjectedProps>> {
        static displayName = `Connect(${WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Unknown'})`;
        
        render() {
            const renderComponent = (props: OriginalProps | InjectedProps) => (<WrappedComponent {...props} />);
            return (<Consumer>
                {(injectedStore: State) => {
                    const injectedProps = mapStateToProps(injectedStore);
                    return (<BlockRendering renderComponent={renderComponent} {...this.props} {...injectedProps} />);
                }}
            </Consumer>)
        }
    }
}


interface BlockRenderingProps {
    renderComponent(props: any): React.ReactNode;
}

class BlockRendering extends React.PureComponent<BlockRenderingProps> {
    render() {
      const { renderComponent, ...allProps } = this.props;
      return renderComponent(allProps);
    }
  }