import * as Icons from "./index";

export default () => {
    return <div className="icon-preview">
        {
            Object.keys(Icons).map(iconName => {
                // @ts-ignore
                const Icon = Icons[iconName]
                return <div className="icon-line" key={ iconName }
                            style={ {
                                position: 'relative',
                                width: '100%',
                                height: '48px',
                                padding: '0 16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start'
                            } }>
                    <input
                        value={ `<${ iconName }/>` } readOnly
                        style={ {
                            width: '200px',
                            marginRight: '20px',
                            border: 'none',
                            outline: 'none',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        } }
                        onClick={ (e) => {
                            // @ts-ignore
                            e.target.select()
                            document.execCommand('copy')
                            alert(`<${ iconName }/> 复制成功!`)
                        }
                        }/>
                    { <Icon size={ 32 }/> }
                </div>
            })
        }
    </div>
}