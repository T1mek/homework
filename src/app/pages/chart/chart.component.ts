import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { ChartService } from "../../services/chart.service";
import demodata from "../../../assets/01.json";
import { IChart } from "../../../models/chart";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  chart_delivered: any;
  chart_orders: any;
  chart_new: any;
  chart_return: any;
  chart_all: any;

  data: IChart[] = demodata;

  w: any = Object.values(this.data);
  hh: any;
  k: any = Object.entries(this.data);
  o: any = new Map(this.w);

  first: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[0].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  second: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[25].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  there: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[36].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  four: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[51].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  five: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[62].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  six: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[63].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  seven: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[73].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  eight: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[75].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  nine: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[77].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  ten: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[79].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  eleven: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[89].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  twelve: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[90].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  thirteen: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[91].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  fourteen: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[91].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  fifteen: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[108].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  sixteen: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[114].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  seventeen: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[125].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  eighteen: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[132].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  nineteen: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[146].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  twenty: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[147].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  twenty_one: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[167].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);
  all: IChart[] = this.data.reduce((acc: IChart[], name) => {
    if (name.src_office_id === this.w[0].src_office_id) {
      acc.push(name);
    }
    return acc;
  }, []);

  l: any = this.data.reduce((acc, name) => {
    let k = Object.values(name);
    let o = new Map();
    o.set(k[0], name);

    for (let entry of o) {
      // @ts-ignore
      acc.push(entry);
    }

    return acc;
  }, []);
  u: any = new Map(this.l);

  q1: IChart = this.u.get(0);
  q2: IChart = this.u.get(24);
  q3: IChart = this.u.get(36);
  q4: IChart = this.u.get(48);
  q5: IChart = this.u.get(69);
  q6: IChart = this.u.get(87);
  q7: IChart = this.u.get(90);
  q8: IChart = this.u.get(96);
  q9: IChart = this.u.get(102);
  q10: IChart = this.u.get(120);
  q11: IChart = this.u.get(144);
  q12: IChart = this.u.get(150);
  q13: IChart = this.u.get(153);
  q14: IChart = this.u.get(171);
  q15: IChart = this.u.get(174);
  q16: IChart = this.u.get(192);
  q17: IChart = this.u.get(195);
  q18: IChart = this.u.get(204);
  q19: IChart = this.u.get(378);
  q20: IChart = this.u.get(387);
  q21: IChart = this.u.get(426);

  constructor(private chartService: ChartService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    console.log(this.all);
    console.log(this.u.keys(1));
    this.chart_delivered = new Chart("first", {
      type: "line",
      data: {
        labels: this.first.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.first.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.first.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.first.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.first.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q1.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });

    this.chart_orders = new Chart("second", {
      type: "line",
      data: {
        labels: this.second.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.second.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",

            fill: false,
          },
          {
            label: "qty_new",
            data: this.second.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.second.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.second.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        scales: {},
        plugins: {
          title: {
            display: true,
            text: this.q2.office_name,
          },
        },
      },
    });
    this.chart_delivered = new Chart("there", {
      type: "line",
      data: {
        labels: this.there.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.there.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.there.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.there.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.there.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q3.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("four", {
      type: "line",
      data: {
        labels: this.four.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.four.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.four.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.four.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.four.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q4.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("five", {
      type: "line",
      data: {
        labels: this.five.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.five.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.five.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.five.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.five.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q5.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("six", {
      type: "line",
      data: {
        labels: this.six.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.six.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.six.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.six.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.six.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q6.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("seven", {
      type: "line",
      data: {
        labels: this.seven.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.seven.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.seven.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.seven.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.seven.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q7.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("eight", {
      type: "line",
      data: {
        labels: this.eight.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.eight.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.eight.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.eight.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.eight.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q8.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("nine", {
      type: "line",
      data: {
        labels: this.nine.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.nine.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.nine.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.nine.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.nine.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q9.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("ten", {
      type: "line",
      data: {
        labels: this.ten.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.ten.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.ten.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.ten.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.ten.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q10.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("eleven", {
      type: "line",
      data: {
        labels: this.eleven.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.eleven.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.eleven.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.eleven.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.eleven.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q11.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("twelve", {
      type: "line",
      data: {
        labels: this.twelve.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.twelve.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.twelve.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.twelve.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.twelve.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q12.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("thirteen", {
      type: "line",
      data: {
        labels: this.thirteen.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.thirteen.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.thirteen.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.thirteen.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.thirteen.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q13.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("fourteen", {
      type: "line",
      data: {
        labels: this.fourteen.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.fourteen.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.fourteen.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.fourteen.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.fourteen.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q14.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("fifteen", {
      type: "line",
      data: {
        labels: this.fifteen.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.fifteen.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.fifteen.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.fifteen.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.fifteen.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q15.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("sixteen", {
      type: "line",
      data: {
        labels: this.sixteen.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.sixteen.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.sixteen.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.sixteen.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.sixteen.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q16.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("seventeen", {
      type: "line",
      data: {
        labels: this.seventeen.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.seventeen.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.seventeen.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.seventeen.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.seventeen.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q17.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("eighteen", {
      type: "line",
      data: {
        labels: this.eighteen.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.eighteen.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.eighteen.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.eighteen.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.eighteen.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q18.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("nineteen", {
      type: "line",
      data: {
        labels: this.nineteen.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.nineteen.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.nineteen.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.nineteen.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.nineteen.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q19.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("twenty", {
      type: "line",
      data: {
        labels: this.twenty.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.twenty.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.twenty.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.twenty.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.twenty.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q20.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("twenty_one", {
      type: "line",
      data: {
        labels: this.twenty_one.map((time: any) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.twenty_one.map((m: any) => {
              let v = 0;
              v += m.qty_delivered;
              console.log(v);
            }),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.twenty_one.map((m: any) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.twenty_one.map((m: any) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.twenty_one.map((m: any) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.q21.office_name,
          },
        },
        responsive: true,
        scales: {},
      },
    });
    this.chart_delivered = new Chart("all", {
      type: "line",
      data: {
        labels: this.all.map((time: IChart) => time.dt_date),
        datasets: [
          {
            label: "qty_delivered",
            data: this.all.map((m: IChart) => m.qty_delivered),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_new",
            data: this.all.map((m: IChart) => m.qty_new),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_return",
            data: this.all.map((m: IChart) => m.qty_return),
            borderColor: "gray",
            fill: false,
          },
          {
            label: "qty_orders",
            data: this.all.map((m: IChart) => m.qty_orders),
            borderColor: "gray",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "?????????? ??????????",
          },
        },
        responsive: true,
        scales: {},
      },
    });
    console.log(this.u);
  }
}
