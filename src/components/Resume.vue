<template>
    <div class="mb-5" id="resume">
        <div class="row">
            <div class="col">
                <h1 class="heading mb-5">Resume</h1>
            </div>
        </div>
        <div class="row">
            <h4 class="resHeadings">Work Experience</h4>
        </div>
        <div class="container Work mb-5">
            <div class="row">
                <div class="tabCon">
                    <button v-for="item in this.work" :key="item.WorkID" class="tabsWork"
                        @click="openContentWork(item.company)">
                        {{ item.company }}
                    </button>
                </div>
                <div>
                    <div v-for="item in this.work" :key="item.WorkID" :id="item.company" class="contentWork">
                        <h3>{{ item.company }}</h3>
                        <h4>{{ item.occupation }}</h4>
                        <h5>{{ item.duration }}</h5>
                        <h6>{{ item.location }}</h6>
                    </div>
                </div>
            </div>
        </div>
    

        <div class="row">
            <h4 class="resHeadings">Education Experience</h4>
        </div>
        <div class="container Education">
            <div class="row">
                <div class="tabCon">
                    <button v-for="item in this.education" :key="item.EducationID" class="tabsEducation"
                        @click="openContentEducation(item.institution)">
                        {{ item.institution }}
                    </button>
                </div>
                <div>
                    <div v-for="item in this.education" :key="item.EducationID" :id="item.institution"
                        class="contentEducation">
                        <h3>{{ item.institution }}</h3>
                        <h4>{{ item.course }}</h4>
                        <h5>{{ item.duration }}</h5>
                        <h6>{{ item.location }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        work() {
            return this.$store.state.work;
        },
        education() {
            return this.$store.state.education;
        }
    },
    async created() {
        await this.$store.dispatch("fetchWork");
        await this.$store.dispatch("fetchEducation");
        [...document.querySelectorAll(".tabsWork")][0].classList.add("active");
        [...document.querySelectorAll(".tabsEducation")][0].classList.add("active");
    },
    methods: {
        openContentWork(contentName) {
            let content, tabs;

            content = document.getElementsByClassName("contentWork");
            for (let i = 0; i < content.length; i++) {
                content[i].style.display = "none";
            }

            tabs = document.getElementsByClassName("tabsWork");
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].className = tabs[i].className.replace(" active", "");
            }
            document.getElementById(contentName).style.display = "block";
            event.target.classList.add("active");
        },
        openContentEducation(contentName) {
            let content, tabs;

            content = document.getElementsByClassName("contentEducation");
            for (let i = 0; i < content.length; i++) {
                content[i].style.display = "none";
            }

            tabs = document.getElementsByClassName("tabsEducation");
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].className = tabs[i].className.replace(" active", "");
            }
            document.getElementById(contentName).style.display = "block";
            event.target.classList.add("active");
        },
    },
};
</script>

<style scoped>
/* .container {
    
} */

.resHeadings {
    text-decoration: underline;
}

.show {
    display: block;
}

.Work {
    background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
}

.Education {
    background: rgba(143, 63, 189, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
}

#resume {
    scroll-margin: 60px;
    min-height: fit-content;
    margin: 10px;
}

.heading {
    font-size: 5rem;
}

.card {
    border-radius: 20px;
    margin: 10px 0;
}

.tabCon {
    background: rgba(140, 70, 147, 0.199);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    display: flex;
    overflow-y: scroll;
}

.tabCon::-webkit-scrollbar{
  background-color: #F5F5F5;
  color: #333;
  line-height: 1.5;
 display: none;
}
.tabCon {
  -ms-overflow-style: none;
  scrollbar-width: none;
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

.contentEducation {
    display: none;
    padding: 6px 12px;
    border-top: none;
}

.contentWork {
    display: none;
    padding: 6px 12px;
    border-top: none;
}

.contentWork:nth-child(1),
.contentEducation:nth-child(1) {
    display: block;
}


@media only screen and (max-width: 600px) {
    .tabCon button {
        border-radius: 5px;
        padding: 5px 5px;
        margin: 5px;
        font-size: 1rem;
        height: 50px;
        width: 90px;
    }
    
    .heading {
        font-size: 4rem;
    }
}
@media only screen and (max-width: 700px) {
    
    .tabCon button {
        border-radius: 5px;
        padding: 5px 5px;
        margin: 5px;
        font-size: 1rem;
        height: 70px;
        width: 100px;
    }
}
</style>
