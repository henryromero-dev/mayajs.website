import React from "react";
import "./home.scss";
import { Typography } from "@mui/material";
import AppTheme from "../../theme/app-theme.tsx"; // Adjust the import path as necessary

const Home: React.FC = () => (
    <div className="d-flex w-100 home position-relative">
        <div className="lines"> 
            <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>        
        <div className="d-flex container--standard mx-lg-auto position-relative w-100 px-3 pe-lg-0 py-5 py-md-3 py-lg-0">
            <div className="position-absolute h-full overflow-hidden d-flex bg__container">
                <svg className="w-auto m-auto" viewBox="0 0 95 52.8">
                    <path d="M27.3 0H0l26.4 26.4L0 52.8h27.3l26.4-26.4z"></path>
                    <path d="M68.6 0H41.3l26.4 26.4-26.4 26.4h27.3L95 26.4z"></path>
                </svg>
            </div>
            <div className="col-12 col-lg-5 d-flex">
                <div className="d-flex flex-column w-100 m-auto">
                    <Typography variant="h1" className="text--white regular" sx={AppTheme.typography.heading01}>
                        Build and run your API,
                    </Typography>
                    <Typography variant="h1" className="text--white bold mb-2" sx={AppTheme.typography.heading01}>
                        without coding.
                    </Typography>
                    <Typography variant="body1" className="text-white mt-4" sx={AppTheme.typography.desktop01}>
                        MayaJs is a powerful tool that enables you to design a <strong>database schema</strong>, build a <strong>REST API</strong>, and generate a complete <strong>project structure</strong> effortlessly.
                    </Typography>
                    <Typography variant="body1" className="text-white mt-2" sx={AppTheme.typography.desktop01}>
                        It also allows you to easily <strong>consume your API</strong> from your frontend applications.
                    </Typography>
                </div>
            </div>
            <div className="d-lg-flex d-none col">
                <div className="overflow-hidden rounded-t m-auto">
                    <div className="flex px-4 pt-3 ide__container">
                        <button type="button" className="focus:outline-none mr-1 rounded-t px-3 pt-3 pb-2 text-sm font-medium text-gray-500 hover:text-gray-200 sm:px-6 ide__tab">
                            app.component.ts
                        </button>
                    </div>
                    <pre><code className="p-3 leading-normal d-block overflow-auto text-white ide__pre" style={{ height: '330px' }}>
                        <span style={{ color: '#569CD6' }}> class</span> <span style={{ color: '#4EC9B0' }}>AppComponent</span> implements <span style={{ color: '#4EC9B0' }}>OnInit</span> <span style={{ color: '#D4D4D4' }}>&#123;</span><br />
                        <span style={{ color: '#569CD6' }}>     constructor</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#569CD6' }}>private</span> mayaService: MayaService<span style={{ color: '#D4D4D4' }}></span> <span style={{ color: '#D4D4D4' }}>&#123;&#125;</span><br /><br />
                        <span style={{ color: '#569CD6' }}>     public</span> <span style={{ color: '#569CD6' }}>ngOnInit</span> <span style={{ color: '#D4D4D4' }}>()</span> <span style={{ color: '#D4D4D4' }}>&#123;</span><br />
                        <span style={{ color: '#00c8b3' }}>         // Fetch list of customers</span><br />
                        <span style={{ color: '#569CD6' }}>         const</span> list = <span style={{ color: '#D4D4D4' }}>this</span><span style={{ color: '#D4D4D4' }}>.</span>mayaService<span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#DCDCAA' }}>getAll</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#CE9178' }}>'customers'</span>, 1, 10<span style={{ color: '#D4D4D4' }}>);</span><br />
                        <span style={{ color: '#00c8b3' }}>         // Fetch first fruit with name 'apple'</span><br />
                        <span style={{ color: '#569CD6' }}>         const</span> apple = <span style={{ color: '#D4D4D4' }}>this</span><span style={{ color: '#D4D4D4' }}>.</span>mayaService<span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#DCDCAA' }}>first</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#CE9178' }}>'fruits'</span>, <span style={{ color: '#D4D4D4' }}>&#123;</span><span>name</span>: <span style={{ color: '#CE9178' }}>'apple'</span><span style={{ color: '#D4D4D4' }}>&#125;</span><span style={{ color: '#D4D4D4' }}>);</span><br />
                        <span style={{ color: '#00c8b3' }}>         // Update apple price</span><br />
                        <span>         apple</span><span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#DCDCAA' }}>price</span> = <span style={{ color: '#B5CEA8' }}>1</span><span style={{ color: '#D4D4D4' }}>;</span><br />
                        <span style={{ color: '#569CD6' }}>         await</span> <span style={{ color: '#D4D4D4' }}>this</span><span style={{ color: '#D4D4D4' }}>.</span>mayaService<span style={{ color: '#D4D4D4' }}>.</span><span style={{ color: '#DCDCAA' }}>save</span><span style={{ color: '#D4D4D4' }}>(</span><span style={{ color: '#CE9178' }}>'fruits'</span>, apple<span style={{ color: '#D4D4D4' }}>);</span><br />
                        <span style={{ color: '#D4D4D4' }}>     &#125;</span><br />
                        <span style={{ color: '#D4D4D4' }}>&#125;</span>
                    </code></pre>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
