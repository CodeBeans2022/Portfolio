<template>
    <div id="resume">
    <div class="container Work mb-5">
        <div class="tabCon">
            <button v-for="item in this.work" :key="item.WorkID" class="tabsWork" @click="openContentWork(item.company)">{{item.company}}</button>
        </div>
        <div v-for="item in this.work" :key="item.WorkID">
        <div :id="item.company" class="contentWork">
            <h3>{{item.company}}</h3>
            <h4>{{ item.occupation }}</h4>
            <h5>{{ item.duration }}</h5>
            <h6>{{ item.location }}</h6>
        </div>
    </div>
    </div>

    <div class="container Education">
        <div class="tabCon">
            <button v-for="item in this.education" :key="item.EducationID" class="tabsEducation" @click="openContentEducation(item.institution)">{{item.institution}}</button>
        </div>
        <div v-for="item in this.education" :key="item.EducationID">
            <div  :id="item.institution" class="contentEducation">
                <h3>{{item.institution}}</h3>
                <h4>{{ item.course }}</h4>
                <h5>{{ item.duration }}</h5>
                <h6>{{ item.location }}</h6>
            </div>
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
            for (i = 0; i < 1; i++) {
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
    display: flex;
    /* flex-direction: colum; */
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
    border: 1px solid #ccc;
    border-top: none;
}

.contentWork{
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}
</style>
    