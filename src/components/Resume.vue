<template>
    <div id="resume">
        <!-- <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="heading m-5">Resume</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h1>Work</h1>
                </div>
            </div>
            <div class="row" v-for="item in this.work" :key="item.WorkID">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">{{ item.company }}</h2>
                            <h3 class="card-subtitle">{{ item.occupation }}</h3>
                            <h3 class="card-subtitle">{{ item.duration }}</h3>
                            <h3 class="card-subtitle">{{ item.location }}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h1>Education</h1>
                </div>
            </div>
            <div class="row" v-for="item in this.education" :key="item.EducationID">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">{{ item.institution }}</h2>
                            <h3 class="card-subtitle">{{ item.course }}</h3>
                            <h3 class="card-subtitle">{{ item.duration }}</h3>
                            <h3>{{ item.location }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    

    <div class="container Work mb-5">
        <div class="tabCon">
            <button class="tabsWork" @click="openContentWork('EXL')">EXL</button>
            <button class="tabsWork" @click="openContentWork('Rocomamas')">Rocomamas</button>
            <button class="tabsWork" @click="openContentWork('Mugg&Bean2')">Mugg&Bean</button>
            <button class="tabsWork" @click="openContentWork('Espresso')">Shift Espresso Bar</button>
            <button class="tabsWork" @click="openContentWork('Mugg&Bean1')">Mugg&Bean</button>
        </div>

        <div id="EXL" class="contentWork">
            <h3>Work</h3>
        </div>

        <div id="Rocomamas" class="contentWork">
            <h3>Education</h3>
        </div>
        <div id="Mugg&Bean2" class="contentWork">
            <h3>Education</h3>
        </div>
        <div id="Espresso" class="contentWork">
            <h3>Education</h3>
        </div>
        <div id="Mugg&Bean1" class="contentWork">
            <h3>Education</h3>
        </div>
    </div>

    <div class="container Education">
        <div class="tabCon">
            <button class="tabsEducation" @click="openContentEducation('Udemy')">Udemy</button>
            <button class="tabsEducation" @click="openContentEducation('LifeChoices')">LifeChoices Academy</button>
            <button class="tabsEducation" @click="openContentEducation('Balco')">Balco College</button>
            <button class="tabsEducation" @click="openContentEducation('Westridge')">Westridge High School</button>
            <button class="tabsEducation" @click="openContentEducation('Crawford')">Crawford CoCT</button>
            <button class="tabsEducation" @click="openContentEducation('Portland')">Portland High School</button>
        </div>

        <div id="Udemy" class="contentEducation">
            <h3>Work</h3>
        </div>

        <div id="LifeChoices" class="contentEducation">
            <h3>Education</h3>
        </div>
        <div id="Balco" class="contentEducation">
            <h3>Education</h3>
        </div>
        <div id="Westridge" class="contentEducation">
            <h3>Education</h3>
        </div>
        <div id="Crawford" class="contentEducation">
            <h3>Education</h3>
        </div>
        <div id="Portland" class="contentEducation">
            <h3>Education</h3>
        </div>
    </div>
</div>
</template>
    
<script>

export default {
    computed: {
        work() {
            return this.$store.state.work
        },
        education() {
            return this.$store.state.education
        }
    },
    created() {
        this.$store.dispatch('fetchWork');
        this.$store.dispatch('fetchEducation');
    },

    methods: {
        openContentWork(contentName) {
            let i,
                content,
                tabs;

            content = document.getElementsByClassName("contentWork");
            for (i = 0; i < content.length; i++) {
                content[i].style.display = "none";
            }

            tabs = document.getElementsByClassName("tabsWork");
            for (i = 0; i < tabs.length; i++) {
                tabs[i].className = tabs[i].className.replace(" active", "");
            }
            document.getElementById(contentName).style.display = "block";
            console.log(event.target);
            event.target.classList.add('active');
        },
        openContentEducation(contentName) {
            let i,
                content,
                tabs;

            content = document.getElementsByClassName("contentEducation");
            for (i = 0; i < content.length; i++) {
                content[i].style.display = "none";
            }

            tabs = document.getElementsByClassName("tabsEducation");
            for (i = 0; i < tabs.length; i++) {
                tabs[i].className = tabs[i].className.replace(" active", "");
            }
            document.getElementById(contentName).style.display = "block";
            console.log(event.target);
            event.target.classList.add('active');
        }
    }    
}
</script>
    
<style scoped>
/* .container {
    
} */

.Work {
    background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
    border: 1px solid rgba(63, 175, 189, 0.3);
}

.Education {
    background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
    border: 1px solid rgba(63, 175, 189, 0.3);
}

#resume {
    scroll-margin: 15px;
    min-height: 100vh;
}

.heading {
    font-size: 5rem;
}

.card {
    border: 1px solid black;
    border-radius: 20px;
    margin: 10px 0;
}

.tabCon {
    overflow: hidden;
    background: rgba(140, 70, 147, 0.199);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    border: 1px solid rgba(4, 41, 42, 0.3);
}

.tabCon button {
    background-color: inherit;
    justify-content: center;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    margin: 5px;
    transition: 0.3s;
    font-size: 17px;
}

.tabCon button:hover {
    background-color: #ba4ecf;
}

.tabCon button.active {
    background-color: #ccc;
}

.content {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}
</style>
    