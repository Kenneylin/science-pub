import React, { Component } from 'react';
import '../static/css/sider.less';



export default class Agriculture extends Component {
	
	render () {
		
		return (
            <div className='food'>
                 <h1 style="margin: 0;">Agriculture &amp; Food</h1>   
                 <p>ISSN 1314-8591 (online)</p>
                 <ul class="list">
                    <li><a href="">Volume 7, 2019</a></li>
                    <li><a href="">Volume 6, 2018</a></li>
                    <li><a href="">Volume 5, 2017</a></li>
                    <li><a href="">Volume 4, 2016</a></li>
                    <li><a href="">Volume 3, 2015</a></li>
                    <li><a href="">Volume 2, 2014</a></li>
                </ul>
                <p>All issues, published prior to December, 31, 2013 are moved to <a href="">Archive</a> as a result of changes in the journals structure.</p>
                <div class="accordion">
                    <div class="title">Topics</div>
                    <div class="content" style="display: none;">

                        <p><strong>Agriculture</strong><br />
                            Organic agriculture<br />
                            Agricultural biotechnology<br />
                            Livestock, dairy farming and small ruminants<br />
                            Veterinary and feeding system<br />
                            Poultry farming<br />
                            Aquaculture and fisheries<br />
                            Field crops<br />
                            Floriculture<br />
                            Fruits and citrus<br />
                            Greenhouses and horticulture<br />
                            Agricultural buildings<br />
                            Agricultural machinery<br />
                            Fertilisers and chemicals<br />
                            Irrigation and water management<br />
                            Plants, seeds and propagation materials<br />
                            Plant protection and fertilization<br />
                            Post harvest treatment</p>
                        <p><strong>Food</strong><br />
                            Technology and raw materials for food production<br />
                            Biotechnology and nutraceutical technologies<br />
                            Nanotechnologies in food and agriculture<br />
                            Green technologies in food production<br />
                            Food processing machines<br />
                            Food preparation<br />
                            Food packaging<br />
                            Food safety and food security<br />
                            Quality control of raw materials<br />
                            Food inspection systems<br />
                            International certifications<br />
                            Nutrition and dietary problems</p>
                        <p><strong>Agricultural and food policy</strong><br />
                            Precise agriculture<br />
                            Intensive growing methods<br />
                            Renewable energy in agriculture<br />
                            Information and communication technology<br />
                            Import and export of food and agricultural products<br />
                            Interaction between agricultural production and retailing<br />
                            Logistics of agricultural production<br />
                            Rural development<br />
                            Employment in agriculture<br />
                            Agro industry start–ups<br />
                            Turnkey, joint projects and know–how<br />
                            Financing credits and agricultural subsidies<br />
                            EU legislation on agriculture<br />
                            The partnership between Europe and farmers<br />
                            EU grants, tenders<br />
                            International training and cooperation</p>
                        <p style="color: #900;">Note: Papers on other relevant topics are welcome too.</p>

                    </div>
                </div>

                <div class="accordion">
                    <div class="title">Editorial board</div>
                    <div class="content" style="display: none;">
                        <p><strong>Editor in Chief</strong><br />Irfan Ozturk, Trakya Agricultural Research Institute, Turkey</p>
                        <p><strong>Editorial Board Members</strong><br />
                            Ahmed Zahran, Minia University, Egypt<br />
                            Beglarashvili Nazibrola, Institute of Hydrometeorology, Georgian Technical University, Georgia<br />
                            Charles Iledun Oyewole, Kogi State University, Nigeria<br />
                            Cristina Bianca Pocol, University of Agricultural Sciences and Veterinary Medicine Cluj-Napoca, Romania<br />
                            George Chiladze, University of Georgia, Georgia<br />
                            Jelena Marinkovic, Institute of Field and Vegetable Crops, Serbia<br />
                            Liga Paura, Latvia University of Life Sciences and Technologies, Latvia<br />
                            Maia Meladze, Institute of Hydrometeorology, Georgian Technical University, Georgia<br />
                            Metahri Mohammed Said, UMMTO, Algeria<br />
                            Nacira Zerrouki Daoudi, UMMTO, Algeria<br />
                            Vladimir Bales, Slovak University of Technology in Bratislava, Slovakia</p>
                    </div>
                </div>
            </div>
		);
	}
}
