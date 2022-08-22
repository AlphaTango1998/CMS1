package com.example.ecomm

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.NavController
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.NavigationUI
import com.example.ecomm.objects.Communicator
import com.google.android.material.bottomnavigation.BottomNavigationView


class ThirdHomeActivity : AppCompatActivity(), Communicator {
    private lateinit var navController: NavController

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_third_home)
        val navHostFragment = supportFragmentManager.findFragmentById(R.id.mainContainer) as NavHostFragment
        navController = navHostFragment.navController
        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.nav_view)
        NavigationUI.setupWithNavController(bottomNavigationView, navController)
    }

    override fun passDataCom(title: String, thumbnail: String, brand: String, price: String) {
        val bundle = Bundle()
        bundle.putString("title", title)
        bundle.putString("thumbnail", thumbnail)
        bundle.putString("brand", brand)
        bundle.putString("price", price)

        val transaction = this.supportFragmentManager.beginTransaction()
        val itemDetailsFragment = ItemDetailsFragment()
        itemDetailsFragment.arguments = bundle

        transaction.replace(R.id.mainContainer, itemDetailsFragment)
        transaction.commit()
    }
}