import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./InfoBox.css";
export default function InfoBox({ info }) { 
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1564314966935-6c2f60eb32a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    return (
        <div className="InfoBox">
            <h1>Weather Type - {info.weather}</h1> {/* Now it uses the prop info */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity> 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{" "}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <div>Temperature : {info.temp}°C </div><br />
                            <div>Feels like: {info.feelslike}°C </div><br />
                            <div>Min Temp: {info.tempMin}°C </div><br />
                            <div>Max Temp: {info.tempMax}°C </div><br />
                            <div>Humidity: {info.humidity}%</div><br />
                            <div><i>The weather can be described as {info.weather}</i></div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
